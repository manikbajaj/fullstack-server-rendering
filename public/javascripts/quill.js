import Quill from "quill";

const quillContainer = document.getElementById("editor");
const postForm = document.getElementById("createPost");

if (quillContainer) {
  // Initialize Quill on a specific div with an ID of 'editor'
  const editor = new Quill("#editor", {
    theme: "snow", // Set the default theme to 'snow'
  });

  editor.on("text-change", () => {
    let quillHTML = editor.getSemanticHTML();
    document.getElementById("content").value = quillHTML;
  });
}
