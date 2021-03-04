let checkrage = document.querySelectorAll(".checkrage");

let custom = document.querySelector('.custom-checkbox');
let hidesection = document.querySelector('.hidesection');
// console.log(hidesection);
let countdown = document.querySelectorAll('.countdown');
// console.log(countdown);
let overlay = document.querySelector('.overlay');
// console.log(overlay);
let popup = document.querySelectorAll('.popup');

let canMoveArea = document.querySelector(".overlay").className;
let cantMoveArea = document.querySelector(".popup").className;

let personal_img = document.querySelectorAll('.personal_img');
let personal_work = document.querySelectorAll('.personal_work');
// console.log(personal_img);
// console.log(personal_work);
countdown.forEach((item) => {

    item.addEventListener('click', () => {

        overlay.style.display = "block";
        overlay.addEventListener('mousedown', (e) => {
            // console.log(e);
            let targetArea = e.target.className;
            e.preventDefault();
            if (targetArea == canMoveArea) {
                overlay.addEventListener('click', () => overlay.style.display = "none")
            }
            else {
                overlay.addEventListener('click', function () {
                    overlay.style.display = "block";
                })
            }

        })


        let finish = document.querySelector('.finish');
        finish.addEventListener('click', () => {
            overlay.addEventListener('click', () => overlay.style.display = "none")
            // console.log(finish);

        })



    })


})

// new Vue({
//     el: '.checkrage'
// })









checkrage.forEach((btn) => {
    // console.log(btn);

    btn.addEventListener('click', (e) => {

        if (e.target.classList.toggle("custom") == true) {
            // console.log(123);
            e.target.closest("div").querySelector('div.custom-checkbox').style.display = "block";

        } else {
            e.target.closest("div").querySelector('div.custom-checkbox').style.display = "none";

        }
    })


})


let backimage_item = document.querySelectorAll('.backimage_item');
// console.log(backimage_item);

let nothing = document.querySelector('.nothing');
// console.log(nothing);
let rightbar = document.querySelector('.rightbar');

let wrapper = document.querySelector('.wrapper');

nothing.addEventListener('click', (e) => {
    wrapper.style.backgroundImage = "none";

})

backimage_item.forEach((item) => {

    item.addEventListener('click', (e) => {
        // console.log(item);



        // console.log(e.target);

        if (item == backimage_item[0]) {
            // console.log(0);

            wrapper.style.backgroundImage = "url(../img/highlevelnumber/select2.jpg)";
            wrapper.style.backgroundSize = "cover";

            wrapper.style.backgroundRepeat = "no-repeat";
        }
        if (item == backimage_item[1]) {
            // console.log(1);
            wrapper.style.backgroundImage = "url(../img/highlevelnumber/select3.jpg)";
            wrapper.style.backgroundSize = "cover";

            wrapper.style.backgroundRepeat = "no-repeat";
        } if (item == backimage_item[2]) {
            // console.log(2);

            wrapper.style.backgroundImage = "url(../img/highlevelnumber/select4.jpg)";
            wrapper.style.backgroundSize = "cover";

            wrapper.style.backgroundRepeat = "no-repeat";
        } if (item == backimage_item[3]) {
            // console.log(3);

            wrapper.style.backgroundImage = "url(../img/highlevelnumber/select5.jpg)";
            wrapper.style.backgroundSize = "cover";

            wrapper.style.backgroundRepeat = "no-repeat";

        }

    })
})


let pull_stone = document.querySelector('.pull_stone');
// console.log(pull_stone);

pull_stone.addEventListener("scroll", function () {

    // console.log(123);

})

let authority = document.querySelector('.authority');
// console.log(authority);

let personal_OffShelf = document.querySelector('.personal_OffShelf');
// console.log(personal_OffShelf);

window.addEventListener("load", function () {
    // console.log(window.innerWidth);

    if (window.innerWidth <= 414) {
        authority.addEventListener("scroll", function (e) {
            // window.addEventListener('resize', function (e) {
            //     console.log(resize);
            // });
            // let topdistance = authority.scrollHeight;
            // console.log(topdistance);

            let divtop = authority.getBoundingClientRect();
            // console.log(divtop.top);
            // console.log(divtop);

            let documentHeight = document.body.scrollHeight;
            let windowHeight = window.innerHeight;
            window.addEventListener("scroll", function () {
                let scorllPercent = this.scrollY / (documentHeight - windowHeight)
                // console.log(scorllPercent);
            });
            // personal_OffShelf.style.marginTop="";
            // console.log(authority.height);
        });
    }



})

// $(document).ready(function () {
//     let showheight = $('.authority').scrollTop();
//     console.log(showheight);
// })

let authority_pull = document.querySelector('.authority_pull');

$(pull_stone).on('load scroll resize', function () {
    let pullheight = $('.pull_stone').scrollTop();
    console.log(pullheight);
    authority_pull.style.bottom = -(pullheight) + 'px';
})


let authority_upload = document.querySelector('.authority_upload');

$(authority).on('load scroll resize', function () {
    // console.log(pull_stone);
    let showheight = $('.authority').scrollTop();

    // console.log(showheight);
    // authority_upload.style.top = `${showheight}px`;
    authority_upload.style.top = showheight + 'px';

})
let authority_down = document.querySelector('.authority_down');
// console.log(authority_down);
let authority_btn_down = document.querySelector('.authority_btn_down');
let authority_btn = document.querySelector('.authority_btn');


window.addEventListener('load', function () {

    if (window.innerWidth > 1280) {
        console.log(window.innerWidth);

        $(authority).on('load scroll resize', function () {
            let btnheight = $('.authority').scrollTop();
            console.log(btnheight);
            authority_btn_down.style.marginTop = btnheight + 230 + 'px';
        })
    }

    if (window.innerWidth <= 1280 & window.innerWidth > 768) {
        console.log(window.innerWidth);

        $(authority).on('load scroll resize', function () {
            let btnheight = $('.authority').scrollTop();
            console.log(btnheight);
            authority_btn_down.style.marginTop = btnheight + 80 + 'px';
        })
    }

    if (window.innerWidth <= 768 & window.innerWidth > 414) {
        console.log(window.innerWidth);

        $(authority).on('load scroll resize', function () {
            let btnheight = $('.authority').scrollTop();
            console.log(btnheight);
            authority_btn_down.style.marginTop = btnheight + 80 + 'px';
        })
    }

    if (window.innerWidth <= 414) {
        console.log(window.innerWidth);

        $(authority).on('load scroll resize', function () {
            let btnheight = $('.authority').scrollTop();
            console.log(btnheight);
            authority_btn_down.style.marginTop = btnheight + 200 + 'px';
        })
    }

})




// for (let i = 0; i < countdown.length; i++) {
//     console.log(countdown[i]);
//     countdown[i].addEventListener('click', function () {

//         overlay.style.display = "block";

//         overlay.addEventListener('mousemove', function (e) {
//             // if(e.target=)
//             let ename = e.target.className;
//             // console.log(ename);
//             if (ename == x) {
//                 console.log(x);
//                 overlay.addEventListener('click', function () {
//                     overlay.style.display = "none";
//                 })

//             }
//             else {
//                 console.log(y);
//                 overlay.addEventListener('click', function () {
//                     overlay.style.display = "block";
//                 })
//             }

//         })


//     })

// }
