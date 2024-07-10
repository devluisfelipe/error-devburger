// aqui configura as rotas

// importando o Router de dentro do express
import { Router } from "express";

// instanciando a classe Router
const routes = new Router();

// criação da rota get
routes.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello World !" });
});

// exportando aqui para importar dentro do app.js
export default routes;
