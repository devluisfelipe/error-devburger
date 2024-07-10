module.exports = {
  dialect: 'postgres', // tipo de banco utilizado
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'devburger',
  define: {
    // cria dois registros, created_at que é o horário que o registro foi criado e o updated_at
    // se eu atualizr alguma informação nessa linha ele salva o horário que foi feito
    timestamps: true, 
    // toda vez que eu criar um campo, separar as palavras por underline
    underscored: true,
    underscoredAll: true,
  },
};
