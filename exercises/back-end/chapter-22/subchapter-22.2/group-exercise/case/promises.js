const fs = require('fs');

const file2Path = './arquivo2.txt';

// Promises
fs.promises
  .readFile(file2Path, 'utf8')
  .then((data) => {
    const fileLines = data.split('\n');
    const orders = fileLines.map((line, index) => {
      const idCliente = index + 1;
      const products = line.split(' - ')[1].split(', ');

      return {
        idCliente,
        products,
      };
    });

    return orders;
  })
  .then((orders) => {
    fs.promises
      .writeFile('orders.json', JSON.stringify(orders, null, 2))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
