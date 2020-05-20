### :clipboard: Funcionalidades do projeto:

Um aplicativo que simula um e-commerce usando uma força incrível da API Context.

### :straight_ruler: Arquitetura:

![marketplace](https://user-images.githubusercontent.com/43249054/82496041-72e27c80-9ac2-11ea-804c-54480e840593.PNG)

### :bulb: Funcionalidades:

POST /transactions: essa rota recebe title, value e type no body da requisição, sendo o tipo de transação, que deve ser "income" para entrada (depósitos) e "outcome" para saída (retirada). Ao registrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato da seguinte maneira:

Esse simples aplicativo, permiti que seja possível adicionar produtos da Dashboard ao carrinho e exibir o número total de produtos e o valor total dos produtos no carrinho, e também podendo assim incrementar e decrementar as quantidades no carrinho

![marketplace](https://user-images.githubusercontent.com/43249054/82496020-6b22d800-9ac2-11ea-8b89-dcfe4eca598b.gif)

### ⚙️ Tecnologias utilizadas:

    - React Native;
    - Styled Component;
    - Typescript
    - EsLint;
    - Prettier;
    - React-navigation;
    - Axios
    - Yarn;
    
### :checkered_flag: Passos para rodar o projeto:

Primeiro clone o arquivo do git:

```
$ git clone https://github.com/isaachouston/GoMarketplace-Mobile
```

Instale os módulos, executando:

```
yarn
```

E incie o servidor:

```
yarn json-server server.json -p 3333
```

Inicialize o emulador, e excute na pasta do projeto:

```
yarn android
```






