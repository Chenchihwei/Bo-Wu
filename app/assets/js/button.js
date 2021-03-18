$(document).ready(function () {
  $('.uni').click(function () { 
    // console.log('click!');
    $(this).addClass('clicked');
    $('.uni').not(this).removeClass('clicked');
  });

  $('html').mousewheel(function(e, delta) {
    console.log(delta);
    this.scrollLeft -= ((delta)*10);
    e.preventDefault();
  });


//   $('.container').on('mousewheel', function(event) {
//     // console.log(event.deltaX, event.deltaY);
//     console.log(this.scrollLeft);
//     var scrollTop = this.scrollLeft;
//     this.scrollLeft = (scrollTop + ((event.deltaX * event.deltaFactor) * -1));

//     // this.scrollLeft -= (event.deltaX);

// });





});

// let target = document.querySelector('.container');

// console.log(target);

// window.addEventListener('scroll',(e)=>{

// console.log(e.scroll);


// })
