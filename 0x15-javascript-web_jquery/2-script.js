// Update the text color of the <header> element to red (#FF0000) when DIV#red_header is clicked
const $ = window.$
$(document).ready(function () {
    $('#red_header').click(function () {
        $('header').css('color', '#FF0000');
    });
});
