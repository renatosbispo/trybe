const readline = require('readline/promises');
const { stdin, stdout } = require('process');
const fs = require('fs');

async function exercise7() {
  try {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const sourceFilePath = await rl.question(
      'What file do you want to use as source? '
    );

    if (!fs.existsSync(sourceFilePath)) {
      rl.close();
      throw new Error(`File ${sourceFilePath} not found.`);
    }

    const wordToReplace = await rl.question(
      'What word do you want to replace? '
    );

    const substituteWord = await rl.question(
      `What word do you want to replace ${wordToReplace} with? `
    );

    const sourceFileContent = await fs.promises.readFile(
      sourceFilePath,
      'utf8'
    );

    const targetFileContent = sourceFileContent.replace(
      new RegExp(wordToReplace, 'g'),
      substituteWord
    );

    console.log(`\nNew content:\n`);
    console.log(targetFileContent, '\n');

    const targetFilePath = await rl.question(
      'In what file do you want to save the new content? '
    );

    fs.writeFileSync(targetFilePath, targetFileContent);
    console.log(`\nNew content saved to ${targetFilePath}.`);
    rl.close();
  } catch (error) {
    console.error(`\n${error}`);
  }
}

module.exports = {
  exercise7,
};
