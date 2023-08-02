// Wait for the document to be ready
$(document).ready(function() {
  // Attach a click event handler to the Translate button
  $('#btn_translate').click(function() {
    // Get the language code entered by the user
    const languageCode = $('#language_code').val();

    // Build the URL for fetching the translation
    const url = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;

    // Send an HTTP GET request to the API
    $.get(url, function(data) {
      // Update the text content of the DIV#hello element with the translation
      $('#hello').text(data.hello);
    });
  });
});
