{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script> */}

var circle = document.getElementsByClassName('cursor')[0];
var circleOut = document.getElementsByClassName('cursor-outside')[0];
// console.log(circle);

    function moveCircle(e) { 
        TweenMax.to(circle, 1, {
            css: { 
                left: e.pageX,
                top: e.pageY 
            },
            ease: Elastic.easeOut
        });
        TweenMax.to(circleOut, 1, {
            css: { 
                left: e.pageX,
                top: e.pageY 
            },
            delay:.05,
            ease: Elastic.easeOut
        });
    };
    
    $(window).on('mousemove', moveCircle);
    
    $('.mousehover').mouseenter(function(e) {
        TweenMax.to(circle, 0.2, {
            scale: 5,
            backgroundColor: '#e5e5e5a2'
        });
    });
    
    $('.mousehover').mouseleave(function(e) {
        TweenMax.to(circle, 0.2, {
            scale: 1,
            backgroundColor: 'rgb(175, 175, 175)'
        });
    });

