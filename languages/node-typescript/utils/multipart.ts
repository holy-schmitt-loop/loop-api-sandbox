const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

/**
 * Creates a multipart/form-data payload from a file path
 * @param {string} filePath - Path to the JSONL file to upload
 * @returns {FormData} FormData instance with attached file
 */
function buildMultipartForm(filePath) {
  const form = new FormData();
  const filename = path.basename(filePath);
  form.append('file', fs.createReadStream(filePath), filename);
  return form;
}

module.exports = {
  buildMultipartForm,
};
