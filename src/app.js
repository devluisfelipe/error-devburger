// aqui é configurado toda a aplicação, middlewares

// importando o express
import express from 'express';

// importando de dentro de routes.js
import routes from './routes';

// importando a conexão com o banco de dados, quando a aplicação carregar, ja vai instanciar
import './database'

class App {
  // método construtor da classe
  constructor() {
    // chamar o método express para criar toda aplicação com express (app é chamado no module.exports)
    this.app = express();
    // chamando os métodos (usa o this para acessar as propriedades de dentro da classe)
    this.middlewares();
    this.routes();
  }

  // método de configuração de middlewares
  middlewares() {
    this.app.use(express.json());
  }
  //método de configuração das rotas
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
