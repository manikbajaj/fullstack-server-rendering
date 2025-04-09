document.addEventListener("DOMContentLoaded", () => {
  // Parse the query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const isSuccess = queryParams.get("success") === "true";

  if (isSuccess) {
    // Select the element and change its display property to 'flex'
    const successMessageDiv = document.getElementById("successMessage");
    if (successMessageDiv) {
      successMessageDiv.style.display = "flex";

      // Set a timeout to reset the display style to 'none' after 7 seconds
      setTimeout(() => {
        successMessageDiv.style.display = "none";
      }, 5000); // 7000 milliseconds equals 7 seconds
    }
  }
});
