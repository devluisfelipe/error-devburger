'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // método de fazer/subir
  // criação de tabelas, inserção de dados
  async up(queryInterface, Sequelize) {
    // criando uma tabela chamada 'users'
    await queryInterface.createTable('users', {
      // coluna id
      id: {
        primaryKey: true, // chave primária
        allowNull: false, // campo não pode ser nulo NOTNULL
        type: Sequelize.UUID, // tipo que será o id, com o uuid vai gerar uma cadeia de caracteres
        defaultValue: Sequelize.UUIDV4,
      },
      // coluna nome
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // coluna email
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // não pode ter usuários com o mesmo email, facilita na verificação se contém o email no sistema
      },
      // coluna da senha criptografada
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // coluna que vai verificar se o usuário do sistema é administrador
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // se eu não passar essa informação pro banco, automaticamente será falso, ou seja, não é admin
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // o método down desfaz o que foi criado no up
  async down(queryInterface) {
    // vai dropar/excluir a tabela
    await queryInterface.dropTable('users');
  },
};
