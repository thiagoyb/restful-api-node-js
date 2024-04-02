# restful-api-node-js

API de Restful com Node.js do Curso Completo de JavaScript na Udemy.com.

### Criação package.json
```
npm init
```
### Instalação do Express (e salvando nas dependências)
```
npm install express --save
```
### Instalação do nodemon
```
npm install nodemon -g
```
### Excutando servidor
```
npm start
```
## Rotas
Obter todos os usuários:
```
GET /users
```
Exemplo de resultado:
```json
{
    "users":[]
}
```
Cadastrar um novo usuário:
```
POST /users
```
Exemplo de resultado:
```json
{
    "id":"Wr6vvWsS",
    "name":"Fulano S. Sauro"
}
```
Obter dados de um usuário:
```
GET /users/:id
```
Exemplo de resultado:
```json
{
    "id":"Wr6vvWsS",
    "name":"Fulano S. Sauro"
}
```
Editar um usuário:
```
PUT /users/:id
```
Exemplo de resultado:
```json
{
    "id":"Wr6vvWsS"
}
```
Excluir um usuário:
```
DELETE /users/:id
```
Exemplo de resultado:
```json
{
    "id":"Wr6vvWsS"
}
```
