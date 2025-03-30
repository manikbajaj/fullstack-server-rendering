import Quill from "quill";

// Initialize Quill on a specific div with an ID of 'editor'
const editor = new Quill("#editor", {
  theme: "snow", // Set the default theme to 'snow'
});

document
  .getElementById("createPost")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // This stops the form from submitting by default

    // Call your function here
    customFunction(event.target);
  });

function customFunction(form) {
  const formData = new FormData(form); // Initialize FormData with the form element

  let quillHTML = editor.getSemanticHTML();

  // Use URLSearchParams to properly encode the data for URL-encoded form submission
  const urlEncodedData = new URLSearchParams();
  for (const pair of formData) {
    urlEncodedData.append(pair[0], pair[1]);
  }

  urlEncodedData.append("content", quillHTML);
  console.log(urlEncodedData);

  // Send the data using Fetch API
  fetch("/blog/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlEncodedData,
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("Form submitted!");
  // You can handle your form data here
}
