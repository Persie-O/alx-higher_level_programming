// script that adds a <li> element to a list when the user clicks on the
// tag DIV#add_item
const $ = window.$;
$(document).ready(function() {
  $('#add_item').click(function() {
    $('<li>Item</li>').appendTo('.my_list');
  });
});
