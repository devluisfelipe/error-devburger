// importando o sequelize
import Sequelize from 'sequelize';

// importando o model de User
import User from '../app/models/User';

// importando a configuração do banco de dados
import configDatabase from '../config/database';

// criação de um array para armazenar as models
const models = [User];

class Database {
  constructor() {
    //toda vez que a classe for instanciada, este método é chamado
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    // todas as models vão usar a mesma conexão com o bando de dados
    models.map((model) => model.init(this.connection));
  }
}
// exportando já instanciado
export default new Database();
