$(document).ready(function() {
    $("#sep").accordion( {
    heightStyle: "content",
    collapsible: true
    })
});

$( function() {
    $( document ).tooltip();
  } );

$("#email").validateEmail();
  
$(".popup-link").magnificPopup({
    type: "image",
    gallery: {
        enabled: true
    }
});