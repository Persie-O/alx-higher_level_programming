// Add the class 'red' to the <header> element when DIV#red_header is clicked
const $ = window.$
$(document).ready(function () {
    $('#red_header').click(function () {
        $('header').addClass('red');
    });
});
