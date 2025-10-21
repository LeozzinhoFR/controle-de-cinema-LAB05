# Sistema Web de Controle de Cinema

Um sistema web simples para gerenciamento de um cinema, permitindo o cadastro de filmes, salas, sessões e a venda de ingressos. Este projeto é focado no frontend e utiliza o LocalStorage do navegador para persistência de dados.

## Funcionalidades

O sistema é dividido em várias páginas, cada uma com uma funcionalidade específica:

  * **Início (`index.html`):** Página principal de boas-vindas do sistema.
  * **Cadastro de Filmes (`cadastro-filmes.html`):** Permite registrar novos filmes com detalhes como título, descrição, gênero, classificação indicativa, duração e data de estreia.
  * **Cadastro de Salas (`cadastro-salas.html`):** Permite registrar as salas do cinema, especificando nome, capacidade e tipo (ex: 2D, 3D, IMAX).
  * **Cadastro de Sessões (`cadastro-sessoes.html`):** Permite criar novas sessões. O formulário carrega dinamicamente os filmes e salas cadastrados, permitindo associá-los a uma data/hora, preço, idioma e formato.
  * **Sessões Disponíveis (`sessoes.html`):** Exibe uma lista de todas as sessões cadastradas, buscando os dados de filmes e salas no LocalStorage para apresentar informações detalhadas.
  * **Venda de Ingressos (`venda-ingressos.html`):** Um formulário para registrar a venda de ingressos. As sessões disponíveis são carregadas dinamicamente. A página de "Sessões Disponíveis" possui um botão "Comprar Ingresso" que redireciona para esta página, já selecionando a sessão desejada.

## Tecnologias Utilizadas

  * **HTML5:** Estrutura das páginas.
  * **CSS3:** Estilização básica para formulários, navegação e listagem.
  * **JavaScript (Vanilla):** Responsável por toda a interatividade, manipulação do DOM e lógica de negócios.
  * **LocalStorage:** Utilizado como banco de dados do lado do cliente para salvar, carregar e gerenciar os dados de filmes, salas, sessões e ingressos.

## Como Usar

Como este é um projeto puramente frontend, não é necessário um servidor backend.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/LeozzinhoFR/controle-de-cinema-LAB05.git
    ```
2.  Abra o arquivo `pages/index.html` em qualquer navegador web moderno.
3.  Navegue pelo menu superior para acessar as diferentes funcionalidades:
      * Comece cadastrando alguns filmes e salas.
      * Em seguida, cadastre sessões associando os filmes e salas criados.
      * Você pode visualizar as sessões na página "Sessões Disponíveis" ou ir diretamente para "Venda de Ingressos".
## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Demonstração

Insira um gif ou um link de alguma demonstração


## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Stack utilizada

**Front-end:** React, Redux, TailwindCSS

**Back-end:** Node, Express




## 🛠 Habilidades
Javascript, HTML, CSS...

## Funcionalidades

- Temas dark e light
- Preview em tempo real
- Modo tela cheia
- Multiplataforma


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`



