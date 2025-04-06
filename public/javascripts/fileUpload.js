htmx.on("#uploadForm", "htmx:xhr:progress", function (evt) {
  console.log(evt);
  htmx
    .find("#progress")
    .setAttribute("value", (evt.detail.loaded / evt.detail.total) * 100);
});
