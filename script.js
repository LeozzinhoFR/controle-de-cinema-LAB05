document.addEventListener('DOMContentLoaded', () => {
    // Funções utilitárias para localStorage
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function loadData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    // Lógica para cadastro-filmes.html
    if (document.getElementById('form-filme')) {
        const formFilme = document.getElementById('form-filme');
        formFilme.addEventListener('submit', (e) => {
            e.preventDefault();
            const filmes = loadData('filmes');
            const novoFilme = {
                id: Date.now(), // ID único
                titulo: document.getElementById('titulo').value,
                descricao: document.getElementById('descricao').value,
                genero: document.getElementById('genero').value,
                classificacao: document.getElementById('classificacao').value,
                duracao: document.getElementById('duracao').value,
                dataEstreia: document.getElementById('dataEstreia').value
            };
            filmes.push(novoFilme);
            saveData('filmes', filmes);
            alert('Filme salvo com sucesso!');
            formFilme.reset();
        });
    }

    // Lógica para cadastro-salas.html
    if (document.getElementById('form-sala')) {
        const formSala = document.getElementById('form-sala');
        formSala.addEventListener('submit', (e) => {
            e.preventDefault();
            const salas = loadData('salas');
            const novaSala = {
                id: Date.now(), // ID único
                nome: document.getElementById('nomeSala').value,
                capacidade: document.getElementById('capacidade').value,
                tipo: document.getElementById('tipoSala').value
            };
            salas.push(novaSala);
            saveData('salas', salas);
            alert('Sala salva com sucesso!');
            formSala.reset();
        });
    }

    // Lógica para cadastro-sessoes.html
    if (document.getElementById('form-sessao')) {
        const formSessao = document.getElementById('form-sessao');
        const selectFilme = document.getElementById('filme');
        const selectSala = document.getElementById('sala');

        function carregarFilmesESalas() {
            const filmes = loadData('filmes');
            const salas = loadData('salas');

            selectFilme.innerHTML = '<option value="">Selecione um Filme</option>';
            filmes.forEach(filme => {
                const option = document.createElement('option');
                option.value = filme.id;
                option.textContent = filme.titulo;
                selectFilme.appendChild(option);
            });

            selectSala.innerHTML = '<option value="">Selecione uma Sala</option>';
            salas.forEach(sala => {
                const option = document.createElement('option');
                option.value = sala.id;
                option.textContent = sala.nome;
                selectSala.appendChild(option);
            });
        }

        carregarFilmesESalas();

        formSessao.addEventListener('submit', (e) => {
            e.preventDefault();
            const sessoes = loadData('sessoes');
            const novaSessao = {
                id: Date.now(), // ID único
                filmeId: document.getElementById('filme').value,
                salaId: document.getElementById('sala').value,
                dataHora: document.getElementById('dataHora').value,
                preco: document.getElementById('preco').value,
                idioma: document.getElementById('idioma').value,
                formato: document.getElementById('formato').value
            };
            sessoes.push(novaSessao);
            saveData('sessoes', sessoes);
            alert('Sessão salva com sucesso!');
            formSessao.reset();
            carregarFilmesESalas(); // Recarrega para limpar os selects
        });
    }

    // Lógica para venda-ingressos.html
    if (document.getElementById('form-venda-ingresso')) {
        const formVendaIngresso = document.getElementById('form-venda-ingresso');
        const selectSessao = document.getElementById('sessao');

        function carregarSessoes() {
            const sessoes = loadData('sessoes');
            const filmes = loadData('filmes');
            const salas = loadData('salas');

            selectSessao.innerHTML = '<option value="">Selecione uma Sessão</option>';
            sessoes.forEach(sessao => {
                const filme = filmes.find(f => f.id == sessao.filmeId);
                const sala = salas.find(s => s.id == sessao.salaId);
                if (filme && sala) {
                    const option = document.createElement('option');
                    option.value = sessao.id;
                    option.textContent = `${filme.titulo} - ${sala.nome} (${new Date(sessao.dataHora).toLocaleString()})`;
                    selectSessao.appendChild(option);
                }
            });

            // Pre-selecionar sessão se houver parâmetro na URL
            const urlParams = new URLSearchParams(window.location.search);
            const sessaoIdParam = urlParams.get('sessaoId');
            if (sessaoIdParam) {
                selectSessao.value = sessaoIdParam;
            }
        }

        carregarSessoes();

        formVendaIngresso.addEventListener('submit', (e) => {
            e.preventDefault();
            const ingressos = loadData('ingressos');
            const novoIngresso = {
                id: Date.now(), // ID único
                sessaoId: document.getElementById('sessao').value,
                nomeCliente: document.getElementById('nomeCliente').value,
                cpf: document.getElementById('cpf').value,
                assento: document.getElementById('assento').value,
                tipoPagamento: document.getElementById('tipoPagamento').value
            };
            ingressos.push(novoIngresso);
            saveData('ingressos', ingressos);
            alert('Venda de ingresso confirmada!');
            formVendaIngresso.reset();
            carregarSessoes(); // Recarrega para limpar os selects
        });
    }

    // Lógica para sessoes.html
    if (document.getElementById('lista-sessoes')) {
        const listaSessoesDiv = document.getElementById('lista-sessoes');

        function listarSessoesDisponiveis() {
            const sessoes = loadData('sessoes');
            const filmes = loadData('filmes');
            const salas = loadData('salas');

            listaSessoesDiv.innerHTML = ''; // Limpa a lista antes de recarregar

            if (sessoes.length === 0) {
                listaSessoesDiv.innerHTML = '<p>Nenhuma sessão disponível no momento.</p>';
                return;
            }

            sessoes.forEach(sessao => {
                const filme = filmes.find(f => f.id == sessao.filmeId);
                const sala = salas.find(s => s.id == sessao.salaId);

                if (filme && sala) {
                    const sessaoItem = document.createElement('div');
                    sessaoItem.classList.add('sessao-item');
                    sessaoItem.innerHTML = `
                        <h3>${filme.titulo}</h3>
                        <p><strong>Sala:</strong> ${sala.nome} (${sala.tipo})</p>
                        <p><strong>Data e Hora:</strong> ${new Date(sessao.dataHora).toLocaleString()}</p>
                        <p><strong>Preço:</strong> R$ ${parseFloat(sessao.preco).toFixed(2)}</p>
                        <p><strong>Idioma:</strong> ${sessao.idioma}</p>
                        <p><strong>Formato:</strong> ${sessao.formato}</p>
                        <button onclick="comprarIngresso(${sessao.id})">Comprar Ingresso</button>
                    `;
                    listaSessoesDiv.appendChild(sessaoItem);
                }
            });
        }

        // Função global para ser acessível pelo onclick
        window.comprarIngresso = function(sessaoId) {
            window.location.href = `venda-ingressos.html?sessaoId=${sessaoId}`;
        };

        listarSessoesDisponiveis();
    }
});

