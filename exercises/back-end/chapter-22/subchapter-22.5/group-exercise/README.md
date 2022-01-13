### Exercícios

Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos. A sua API deve rodar em `http://localhost:3000`.

Cada desafio pede para implementar um middleware em um arquivo específico dentro do diretório `middlewares` mas que deve ser associada a uma rota específica. 

Esse repositório possui tanto  **testes unitários** como **testes de integração**, ou seja, ele vai avaliar se o middleware cumpre seu objetivo específico, mas também vai testar se as rotas executam os seus respectivos middlewares.

## Desafios

### 1 -  Crie um middleware no arquivo `middlewares/pingMiddleware.js` seguindo as seguintes especifições:
* retorne uma resposta com status igual a 200 e a mensagem `pong`. 
* Esse middleware deve ser acessível pela rota `GET /ping`;


### 2 - Crie um middeware no arquivo `middlewares/hello.js` seguindo as seguintes especifições:

* O middleware recebe o atributo `name` pelo body da requisição
* a resposta do middleware deve ser `{ "message": "Hello, <nome do usuário>!" }`, onde `<nome do usuário>` deve ser o nome enviado. 
* O status da resposta deve ser `201`. 
* Esse middleware deve ser acessível pela rota `POST /ping`;

### 3 - Crie um middeware no arquivo `middlewares/greeting.js`. 

* esse middleware recebe o atributos `name` e `age` pelo body da requisição. Esse middleware deve seguir a seguinte lógica:
- Se o valor do atributo `age` for maior ou igual a 18 deve a resposta deve ter o status 200 e o json `{ "message": "Hello, <nome do usuário>!" }`
- Se o valor do atributo `age` for menor que 18 a resposta deve ter o status 401 e o json `{ "message": "Unauthorized" }`.

* Esse middleware deve ser acessível pela rota `POST /greeting`.

---

:warning: Para os próximos desafios, será usando o arquivo `simpsons.json`, não modifique o conteúdo desse arquivo, exceto quando o requisito pedir por isso.

:warning: Utilize o modulo `fs` do Node para ler e escrever nesse arquivo.

---

### 4 -  Crie um middleware no arquivo `middlewares/getSimpsons.js` seguindo as seguintes especifições:
* a resposta deve ter o status `200` e retornar o conteúdo do arquivo `simpsons.json`. 
* Esse middleware deve ser acessível pela rota `GET /simpsons`

### 5 - Crie um middleware no arquivo `middlewares/getSimpsonById.js` seguindo as seguintes especifições:
* Deve receber o id como **parâmetro de rota**;
* Se existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 200 e retornar o objeto do simpson como json.
* Se não existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 404 e retornar o seguinte json: `{ message: 'Simpson not found!'}`

Esse middleware deve ser acessível através da rota `GET /simpsons/:id`


### 6 - Crie um middleware no arquivo `middlewares/createSimpson.js` seguindo as seguintes especifições:
* Deve ser capaz de receber os parâmetros `id` e `body` no corpo da requisição.
* Deve ser capaz de adicionar um objeto com os dois parâmetros recebidos no arquivo `simpsons.json`.
* A resposta da requisição deve ser `{ message: 'Simpson criado com sucesso!' }` com o status `201`.

Esse middleware deve ser chamado pela rota `POST /simpsons`.

### 7 - Crie um middleware no arquivo `middlewares/validateIdSimpson.js` seguindo as seguintes especifições:
* Deve ser capaz de receber o parâmetro `id` do `req.body`.
* Se já existir um simpson com id passado deve retornar o json `{ message: 'Não é possível cadastrar esse simpson!'}` com o status `500`.
* Caso não exista, deve chamar a função `next` do middleware.
* Esse middleware deve ser chamado pela rota `POST /simpsons` **antes** do middleware construído no requisito 5.

### 8 - Crie um middleware no arquivo `middlewares/validateNameSimpson.js` seguindo as seguintes especifições:
* Deve ser capaz de receber o parâmetro `name` do `req.body`.
* Se o valor de `name` for igual a vazio ou nulo deve retornar o json `{ message: 'Nome é obrigatório'}` e status 500.
* Caso `name` seja válido deve chamar a função `next` do middleware.
* Esse middleware deve ser chamado pela rota `POST /simpsons` **antes** do middleware construído no requisito 6 e **depois** do middleware construído no requisito 7.
