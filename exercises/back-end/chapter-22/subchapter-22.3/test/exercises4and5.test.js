const { exercises4and5 } = require('../exercises4and5');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

describe('Exercises 4 and 5', () => {
  it('If the file path is falsy the function must inform it is missing', () => {
    const resultIfEmptyString = exercises4and5('', 'file content');
    const resultIfUndefined = exercises4and5(undefined, 'file content');
    const resultIfNull = exercises4and5(null, 'file content');

    expect(resultIfEmptyString).to.be.equal('Missing parameter "filePath".');
    expect(resultIfUndefined).to.be.equal('Missing parameter "filePath".');
    expect(resultIfNull).to.be.equal('Missing parameter "filePath".');
  });

  it('If the file content is missing the function must inform so', () => {
    const result = exercises4and5('file.txt');

    expect(result).to.be.equal('Missing parameter "fileContent".');
  });

  it('If the file path or file content is not a string the function must inform so', () => {
    const resultIfFilePathIsNotAString = exercises4and5(10, 'file content');
    const resultIfFileContentIsNotAString = exercises4and5('file.txt', 5);

    expect(resultIfFilePathIsNotAString).to.be.equal(
      'File path must be a string.'
    );
    expect(resultIfFileContentIsNotAString).to.be.equal(
      'File content must be a string.'
    );
  });

  describe('If the file was successfully written', () => {
    before(() => sinon.stub(fs, 'writeFileSync').returns(undefined));
    after(() => fs.writeFileSync.restore());

    it('the function must return "Ok."', () => {
      const result = exercises4and5('file.txt', 'file content');
      expect(result).to.be.equal('Ok.');
    });
  });

  describe('If the file could not be written', () => {
    before(() =>
      sinon.stub(fs, 'writeFileSync').throws(new Error('Failed to write file.'))
    );

    after(() => fs.writeFileSync.restore());

    it('the function must return the error message', () => {
      const error = exercises4and5('file.txt', 'file content');
      expect(error.message).to.be.equal('Failed to write file.');
    });
  });
});
