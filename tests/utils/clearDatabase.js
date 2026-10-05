import { connection } from "../../src/configs/Database.js";
/**
 * Limpa o banco de dados ignorando as chaves estrangeiras.
 */
export async function clearDatabase() {
  // Ingnorar a verificação de chave estrangeira
  await connection.query("SET FOREIGN_KEY_CHECKS = 0");

  await connection.query("DELETE FROM veiculos");
  await connection.query("DELETE FROM clientes");
  await connection.query("DELETE FROM montadoras");

  //Ativa novamente a verificacção de chave estrangeira
  await connection.query("SET FOREIGN_KEY_CHECKS = 1");
}
