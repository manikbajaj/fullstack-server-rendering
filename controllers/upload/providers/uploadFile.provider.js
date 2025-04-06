async function uploadFileProvider(req, res) {
  const uploadedFilename = req.file.filename;
  featuredImageUrl = `/images/${uploadedFilename}`;

  return res.render("partials/featuredImageResponse", {
    featuredImageUrl,
    layout: false,
  });
}

module.exports = uploadFileProvider;
