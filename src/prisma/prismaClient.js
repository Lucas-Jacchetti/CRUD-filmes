import { PrismaClient } from "@prisma/Client" //importação do prisma (?)
const prisma = new PrismaClient(); //conexão com a base de dados

module.exports = prisma; //reusável em toda a aplicação

