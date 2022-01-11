const fs = require('fs');

async function exercise5() {
  try {
    const filesContentsToWrite = ['Finally', "I'm using", 'Promise.all', '!!!'];
    const exerciseOutputDirPath = './exercise5-output';

    if (!fs.existsSync(exerciseOutputDirPath)) {
      fs.mkdirSync(exerciseOutputDirPath);
    }

    const writeFilePromises = filesContentsToWrite.map((fileContent, index) =>
      fs.promises.writeFile(
        `${exerciseOutputDirPath}/file${index + 1}.txt`,
        fileContent
      )
    );

    await Promise.all(writeFilePromises);

    const readFilePromises = [
      ...new Array(filesContentsToWrite.length).keys(),
    ].map((fileIndex) =>
      fs.promises.readFile(
        `${exerciseOutputDirPath}/file${fileIndex + 1}.txt`,
        'utf8'
      )
    );

    const readFilesContents = await Promise.all(readFilePromises);

    await fs.promises.writeFile(
      `${exerciseOutputDirPath}/fileAll.txt`,
      readFilesContents.join(' ')
    );

    console.log(
      await fs.promises.readFile(`${exerciseOutputDirPath}/fileAll.txt`, 'utf8')
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  exercise5
};
