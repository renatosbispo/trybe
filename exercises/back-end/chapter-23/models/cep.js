const connection = require('./connection');

async function addCepData(cepData) {
  const { cep, logradouro, bairro, localidade, uf } = cepData;

  const query =
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  const [addedCepData, something] = await connection.execute(query, [
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  ]);

  return cepData;
}

async function getCepData(cep) {
  const query = `SELECT * FROM ceps WHERE cep = ?`;
  const [queryResults] = await connection.execute(query, [cep]);
  const [cepData] = queryResults;

  return cepData;
}


module.exports = {
  addCepData,
  getCepData,
};
