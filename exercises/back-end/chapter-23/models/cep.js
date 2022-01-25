const connection = require('./connection');

async function getCepData(cep) {
  const query = `SELECT * FROM ceps WHERE cep = ?`;
  const [cepData] = await connection.execute(query, [cep]);

  return cepData;
}

module.exports = {
  getCepData,
};
