$(document).ready(function () {
  $('.uni').click(function () { 
    // console.log('click!');
    $(this).addClass('clicked');
    $('.uni').not(this).removeClass('clicked');
  });

  $('container span').click(function () { 
    $('container').css({
      marginLeft: '5vw',
    });
    
  });


});