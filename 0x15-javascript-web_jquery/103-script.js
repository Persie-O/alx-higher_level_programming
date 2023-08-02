// Wait for the document to be ready
$(document).ready(function() {
  // Attach event handlers for both button click and "Enter" key press
  $('#btn_translate, #language_code').on('click keypress', function(event) {
    // Check if the event is a key press and the key is "Enter" (key code 13)
    if (event.type === 'keypress' && event.which === 13) {
      // Prevent the default action of form submission on "Enter" press
      event.preventDefault();

      // Trigger the click event on the Translate button
      $('#btn_translate').click();
    } else {
      // Get the language code entered by the user
      const languageCode = $('#language_code').val();

      // Build the URL for fetching the translation
      const url = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;

      // Send an HTTP GET request to the API
      $.get(url, function(data) {
        // Update the text content of the DIV#hello element with the translation
        $('#hello').text(data.hello);
      });
    }
  });
});
