document.addEventListener('DOMContentLoaded', function() {
  const downloadLink = document.querySelector('footer a');

  downloadLink.addEventListener('click', function(event) {
    // Optionally, add logic to check or handle the download
    console.log('Download triggered');

    // Removing preventDefault() to allow the default action
    // event.preventDefault(); // Commented out to let the download proceed
  });
});
