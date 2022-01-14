const fs = require('fs');

function getAllModulesFrom(sourceDirectoryPath, namespaced = true) {
  const modules = {};

  const filenames = fs
    .readdirSync(sourceDirectoryPath, 'utf8')
    .filter((filename) => !filename.includes('index'));

  const filenamesWithoutExtension = filenames.map((filename) =>
    filename.replace(new RegExp(/\.[a-z]+/, 'g'), '')
  );

  filenamesWithoutExtension.forEach((filenameWithoutExtension, index) => {
    modules[
      filenameWithoutExtension
    ] = require(`./${sourceDirectoryPath}/${filenames[index]}`);
  });

  if (!namespaced) {
    return Object.values(modules);
  }

  return modules;
}

module.exports = {
  getAllModulesFrom,
};
