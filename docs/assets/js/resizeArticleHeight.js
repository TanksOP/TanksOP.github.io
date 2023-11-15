$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('.tiles article');
    var width = div.width();
    
    div.css('height', width);
}