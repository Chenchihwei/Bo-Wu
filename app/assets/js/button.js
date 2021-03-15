$(document).ready(function () {
  $('.uni').click(function () { 
    // console.log('click!');
    $(this).addClass('clicked');
    $('.uni').not(this).removeClass('clicked');
  });

  $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta);
    e.preventDefault();
    });




});