var canvas = $('#canvas')

$(document).ready(function() {
    // Code here will run when the page has loaded.
    $('input[type=radio][name=fontname]').change(function(e) {
        canvas.css('font-family', e.target.value);

        console.log(e.target.value);
    })

    $('#textcolor').change(function(e) {
        canvas.css('color', e.target.value);
    });

    $('#bgcolor').change(function(e) {
    canvas.css('background-color', e.target.value);
});

    $("#textsize").change(function() {
      canvas.css("font-size", $(this).val() + "px");
});

$("#lineheight").change(function() {
  canvas.css("height", $(this).val() + "px");
});

$("#textpadding").change(function() {
  canvas.css("padding", $(this).val() + "px");
});

$("#margin").change(function() {
  canvas.css("margin", $(this).val() + "px");
});

});
