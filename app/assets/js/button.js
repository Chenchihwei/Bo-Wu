$(document).ready(function () {
  $('.uni').click(function () { 
    // console.log('click!');
    $(this).addClass('clicked');
    $('.uni').not(this).removeClass('clicked');
  });

  $('.container span').click(function () { 
    console.log('按到了');
    $('.container').toggleClass('shrink');
  
  });

//   $(".container span").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });


});