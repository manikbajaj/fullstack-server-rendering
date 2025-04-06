htmx.on("#uploadForm", "htmx:xhr:progress", function (evt) {
  console.log(evt);
  htmx
    .find("#progress")
    .setAttribute("value", (evt.detail.loaded / evt.detail.total) * 100);
});

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("imageContainer");
  if (imageContainer) {
    imageContainer.addEventListener("htmx:afterSettle", function () {
      const previewImage = document.getElementById("previewImage");
      if (previewImage) {
        // Get the new image URL from the src attribute of the previewImage
        const newImageUrl = new URL(previewImage.src);

        // Set this URL to the hidden input field in the createPostForm
        // Only using the pathname part of the URL
        document.getElementById("featuredImageUrl").value =
          newImageUrl.pathname;

        // Log the new image URL to the console
        console.log("New Image URL set:", newImageUrl);
      }
    });
  }
});
