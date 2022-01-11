const fs = require('fs');

function exercises4and5(filePath, fileContent) {
  if (!filePath) {
    return 'Missing parameter "filePath".';
  }

  if (!fileContent) {
    return 'Missing parameter "fileContent".';
  }

  if (typeof filePath !== 'string') {
    return 'File path must be a string.';
  }

  if (typeof fileContent !== 'string') {
    return 'File content must be a string.'
  }

  try {
    fs.writeFileSync(filePath, fileContent);

    return 'Ok.';
  } catch (error) {
    return error;
  }
}

module.exports = {
  exercises4and5,
}
