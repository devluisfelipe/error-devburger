// INTERFACE PARA PERSISTIR OS DADOS DENTRO DO BANCO

// importando o sequelize e o model de dentro do sequelize
import Sequelize, { Model } from 'sequelize';

// usando extends, a classe User pode usar todos os métodos da classe Model
class User extends Model {
  // com o método static não precisa mais instaciar a classe
  // não precisa const pessoa = new Pessoa():
  // com o método estático faz direto User.método
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        /* 
            MAS CADÊ OS CAMPOS ID, CREATED_AT E UPDATED_AT ?
            COMO EU CONFIGUREI NO ARQUIVO DATABASE.JS 
            O TIMESTAMPS COMO TRUE, O SEQUELIZE JA ENTENDE
            QUE EXISTEM ESSES CAMPOS
            COMO O ID É UMA PRIMARY KEY, O SEQUELIZE TAMBÉM ENTENDE
            QUE JÁ EXISTE E CRIA AUTOMÁTICO.
            */
      },
      sequelize,
    );
  }
}

export default User;
