const readline = require('readline/promises');
const { stdin, stdout } = require('process');
const fs = require('fs');

async function exercise6() {
  try {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const fileToReadPath = await rl.question('What file do you want to read? ');

    rl.close();

    if (!fs.existsSync(fileToReadPath)) {
      throw new Error(`File ${fileToReadPath} not found.`);
    }

    const fileContent = await fs.promises.readFile(fileToReadPath, 'utf8');

    console.log(`\n${fileToReadPath}:\n`);
    console.log(fileContent);
  } catch (error) {
    console.error(`\n${error}`);
  }
}

module.exports = {
  exercise6,
};
