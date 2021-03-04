// let menu_bar = document.getElementsByClassName('menu_bar')[0];
// let menu = document.getElementsByClassName('menu')[0];
// let menuGold = document.getElementsByClassName('menuGold')[0];
// function menu_open() {
//     let not_none = menu_bar.classList.contains("none");
//     if (not_none) {
//         menu_bar.classList.remove("none");
//         $('header').addClass('black');
//     } else {
//         menu_bar.classList.add("none");
//         $('header').removeClass('black');
//     }
// };
// menu.addEventListener('click', function () {
//     menu_open();
// })
// menuGold.addEventListener('click', function () {
//     menu_open();
// })

//black
// 引入以下
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>


let menu_bar = document.getElementsByClassName('menu_bar')[0];
let menu = document.getElementsByClassName('menu')[0];
    
menu.addEventListener('click', function () {            
    let not_none = menu_bar.classList.contains("none");

    if (not_none) 
    {
        menu_bar.classList.remove("none");
        gsap.to(".indexMenuline1", {
            duration: .5, 
            y: '1vh',
            rotation:45, 
            ease: "ease", 
            transformOrigin:"50% 50%"}
        );
        gsap.to(".indexMenuline2", {
            duration: .5, 
            width: '4vw', 
            rotation:-45, 
            ease: "ease", 
            transformOrigin:"50% 50%"},
        );
        gsap.to(".menu p", {
            opacity:0},
        );
        gsap.to(".menu_bar", {
            opacity:0},
        );
        gsap.to(".menu_bar", {
            left : 0,
            duration: 1,
            opacity:1,
            ease: "ease",}
        );
        gsap.to(".menuGsapLine", {
            right: 0,
            duration: 1,
            ease: "ease"}
        );
        gsap.to(".menu_child a",{
            opacity:1,
            stagger: 0.3,
            ease: "ease",
            delay : .5}
        );
        gsap.to(".menu_personal_exhibits",{
            opacity:1,
            ease: "ease",
            delay : 1.2}
        );
        gsap.to(".join",{
            opacity:1,
            ease: "ease",
            delay : 1.5}
        );
    } else {
        menu_bar.classList.add("none");
        gsap.to(".indexMenuline1", {
            duration: .5, 
            y: '0vh',
            rotation: 0, 
            ease: "ease", 
            }
        );
        gsap.to(".indexMenuline2", {
            duration: .5, 
            rotation: 0, 
            width: '2vw', 
            ease: "ease", 
            },
        );
        gsap.to(".menu p", {
            opacity:1 },
        );
        gsap.to(".menu_personal_exhibits",{
            opacity:0,
            ease: "ease",}
        );
        gsap.to(".join",{
            opacity:0,
            ease: "ease",}
        );
        gsap.to(".menuGsapLine", {
            right: '-200vw',
            duration: 1,
            ease: "ease"}
        );
        gsap.to(".menu_child a",{
            opacity:0,
            stagger: 0.3,
            ease: "ease",
            delay : .5}
        );
        gsap.to(".menu_bar", {
            opacity:0,
            ease: "ease",}
        );
    };

    
});
