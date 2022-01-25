const connection = require('./connection');

async function getCepData(cep) {
  const query = `SELECT * FROM ceps WHERE cep = ?`;
  const [queryResults] = await connection.execute(query, [cep]);
  const [cepData] = queryResults;

  return cepData;
}

module.exports = {
  getCepData,
};
