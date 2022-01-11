const fs = require('fs');

const file1Path = './arquivo1.txt';

// Callbacks
fs.readFile(file1Path, 'utf8', (error, data) => {
  if (error) throw error;
  const fileLines = data.split('\n');
  const customers = fileLines.map((line, index) => {
    const id = index + 1;
    const name = line.split(' - ')[1];

    return {
      id,
      name
    }
  });

  fs.writeFile('customers.json', JSON.stringify(customers, null, 2), (error) => {
    if (error) throw error;

    console.log('The file has been saved!');
  });
});
