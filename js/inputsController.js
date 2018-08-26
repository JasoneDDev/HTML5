
var moreValue = $('#move-value');

$('#move-range').on('change', function() {
    moreValue.html($( this ).val());
  });