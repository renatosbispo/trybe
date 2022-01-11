const fs = require('fs');

(async function exercise5() {
  try {
    const filesContentsToWrite = ['Finally', "I'm using", 'Promise.all', '!!!'];

    const writeFilePromises = filesContentsToWrite.map((fileContent, index) =>
      fs.promises.writeFile(`file${index + 1}.txt`, fileContent)
    );

    await Promise.all(writeFilePromises);

    const readFilePromises = [
      ...new Array(filesContentsToWrite.length).keys(),
    ].map((fileIndex) =>
      fs.promises.readFile(`file${fileIndex + 1}.txt`, 'utf8')
    );

    const readFilesContents = await Promise.all(readFilePromises);

    await fs.promises.writeFile('fileAll.txt', readFilesContents.join(' '));
    console.log(await fs.promises.readFile('fileAll.txt', 'utf8'));
  } catch (error) {
    console.error(error);
  }
})();
