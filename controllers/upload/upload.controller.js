const uploadFileProvider = "./providers/uploadFile.provider.js";

async function handleFileUpload(req, res) {
  return await uploadFileProvider(req, res);
}

module.exports = handleFileUpload;
