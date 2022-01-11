const fs = require('fs');

const file1Path = './arquivo1.txt';

// async/await
(async () => {
  try {
    const fileContents = await fs.promises.readFile(file1Path, 'utf8');

    const fileLines = fileContents.split('\n');
    const customers = fileLines.map((line, index) => {
      const idCliente = index + 1;
      const products = line.split(' - ')[1].split(', ');

      return {
        idCliente,
        products,
      };
    });

    fs.promises.writeFile('customers.json', JSON.stringify(customers, null, 2));
  } catch (error) {
    console.log(error);
  }
})();
