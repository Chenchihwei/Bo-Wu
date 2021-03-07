let authority = document.querySelector('.authority');
// console.log(authority);
let authority_btn = document.querySelector('.authority_btn');
let authority_btn_down = document.querySelector('.authority_btn_down');
// console.log(authority_btn);

$(window).on('load scroll resize', function () {
    console.log(window.innerWidth);

    $(authority).on('scroll', function () {
        let hideheight = $('.authority').scrollTop();
        console.log(hideheight);
        authority_btn_down.style.marginTop = hideheight + 650 + 'px';

    })


})

