$(document).ready(function () {
    // inStorage();
    work_list();
    advance_list();

    //接值,透過分享網址進來的
    let url = location.href;
    let spilt_url = url.split('/');
    // console.log(spilt_url[4]);
    if (spilt_url[4] !== 'exhibition.html' && spilt_url[4] !== 'exhibition.html###' && spilt_url[4] !== 'exhibition.html##') {
        var temp = url.split("?")[1].split('=');
        let work_id = temp[1];
        work_content(work_id);
        exhibition_content_open();
    } else {

    };


});

let exhibition_img = document.getElementsByClassName('exhibition_img')[0];
let click_left = exhibition_img.querySelector('.fa-chevron-left');
let click_right = exhibition_img.querySelector('.fa-chevron-right');
let ul = exhibition_img.querySelector('ul');

//高級會員展間
function advance_list() {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_advance_list.php",
        data: {
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            ul.innerHTML = response;
            let img_li = ul.querySelectorAll('li');
            $(img_li[0]).addClass('pic_cover_left');
            $(img_li[1]).addClass('pic_cover');
            $(img_li[2]).addClass('pic_cover_1');
            $(img_li[3]).addClass('pic_cover_right');
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};


//傳值
$('.exhibition_img').on('click', '.advance_url', function () {
    let advance_memberid = $(this).parents('li').children('.advance_memberid').html();
    // console.log(advance_memberid);
    url = "member_pre.html?advance_id=" + advance_memberid;
    window.location.href = url;
});


//接值
// var url = location.href;
// var temp = url.split("?")[1].split('=');
// console.log(temp[1]);

// 寫入localstorage
// function inStorage() {
//     let task = {
//         'id': 1,
//     };
//     let tasks = JSON.parse(localStorage.getItem("tasks"));
//     if (tasks) { // 若存在
//         tasks.unshift(task);
//     } else { // 若不存在
//         tasks = [task];
//     }
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }



//localhost
function getLocalstorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        return tasks[0];
    }
}
let item = getLocalstorage();
// console.log(item);

//按讚
$('body').on('click', '.fa-heart', function () {
    if (item) {
        let work_id = $(this).parents('.product_like').prevAll('.work_id').html();
        let product_like = $('.product_like');
        let like_num = parseInt($(this).nextAll('span').html());
        let status; //按讚狀態 1:按讚 2:收回

        //登入者待寫
        let member_id = item.id;


        if ($(this).hasClass('like_red')) {
            $(this).removeClass('like_red');
            $(this).nextAll('span').html(like_num - 1);

            for (let i = 0; i < product_like.length; i++) {
                if ($(product_like[i]).prevAll('.work_id').html() === work_id) {
                    $(product_like[i]).children('.fa-heart').removeClass('like_red');
                    $(product_like[i]).children('span').html(like_num - 1);
                } else { };
            };
            status = 2;
            like_update(work_id, member_id, status);
        } else {
            $(this).addClass('like_red');
            $(this).nextAll('span').html(like_num + 1);

            for (let i = 0; i < product_like.length; i++) {
                if ($(product_like[i]).prevAll('.work_id').html() === work_id) {
                    $(product_like[i]).children('.fa-heart').addClass('like_red');
                    $(product_like[i]).children('span').html(like_num + 1);

                } else { };
            };
            status = 1;
            like_update(work_id, member_id, status);

        };

    } else {
        alert('請先登入喔!');
        return false;
    }
});

function like_update(work_id, member_id, status) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_like.php",
        data: {
            'work_id': work_id,
            'member_id': member_id,
            'status': status,
        },
        dataType: "text",
        success: function (response) {
            // console.log(response);
            if (status == 1) {
                level_update(work_id);
            }
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

function level_update(work_id) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_level_update.php",
        data: {
            'work_id': work_id,
        },
        dataType: "text",
        success: function (response) {
            console.log(response);
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};



let count = 0;
let count1;
let count2;
let count3;
//輪播圖
click_right.addEventListener('click', function () {
    let img_li = ul.querySelectorAll('li');
    count += 1;
    for (let i = 0; i < img_li.length; i++) {
        // console.log(img_li[i]);
        $(img_li[i]).removeClass('none');
        $(img_li[i]).removeClass('pic_cover_left');
        $(img_li[i]).removeClass('pic_cover');
        $(img_li[i]).removeClass('pic_cover_1');
        $(img_li[i]).removeClass('pic_cover_right');
    };

    if (count == img_li.length) {
        count = 0;
        count1 = count + 1;
        count2 = count + 2;
        count3 = count + 3;
    } else if (count > img_li.length - 2) {
        count1 = 0;
        count2 = 1;
        count3 = 2;
    } else if (count > img_li.length - 3) {
        count1 = count + 1;
        count2 = 0;
        count3 = 1;
    } else if (count > img_li.length - 4) {
        count1 = count + 1;
        count2 = count + 2;
        count3 = 0;
    } else {
        count1 = count + 1;
        count2 = count + 2;
        count3 = count + 3;
    };


    $(img_li[count]).addClass('pic_cover_left');
    $(img_li[count1]).addClass('pic_cover');
    $(img_li[count2]).addClass('pic_cover_1');
    $(img_li[count3]).addClass('pic_cover_right');

    for (let i = 0; i < img_li.length; i++) {
        if (i == count || i == count1 || i == count2 || i == count3) {
        } else {
            $(img_li[i]).addClass('none');
        };
    };


});
click_left.addEventListener('click', function () {
    count -= 1;
    let img_li = ul.querySelectorAll('li');
    for (let i = 0; i < img_li.length; i++) {
        // console.log(img_li[i]);
        $(img_li[i]).removeClass('none');
        $(img_li[i]).removeClass('pic_cover_left');
        $(img_li[i]).removeClass('pic_cover');
        $(img_li[i]).removeClass('pic_cover_1');
        $(img_li[i]).removeClass('pic_cover_right');
    };

    if (count == -1) {
        count1 = count + 1;
        count2 = count + 2;
        count3 = count + 3;
        count = img_li.length - 1;
    } else if (count > img_li.length - 3) {
        count1 = count + 1;
        count2 = 0;
        count3 = 1;
    } else if (count > img_li.length - 4) {
        count1 = count + 1;
        count2 = count + 2;
        count3 = 0;
    } else {
        count1 = count + 1;
        count2 = count + 2;
        count3 = count + 3;
    };


    $(img_li[count]).addClass('pic_cover_left');
    $(img_li[count1]).addClass('pic_cover');
    $(img_li[count2]).addClass('pic_cover_1');
    $(img_li[count3]).addClass('pic_cover_right');

    for (let i = 0; i < img_li.length; i++) {
        if (i == count || i == count1 || i == count2 || i == count3) {
        } else {
            $(img_li[i]).addClass('none');
        };
    };

});



let exhibition_content = document.getElementsByClassName('exhibition_content')[0];

function exhibition_content_open() {
    let not_none = exhibition_content.classList.contains("none");
    if (not_none) {
        exhibition_content.classList.remove("none");
        $('.exhibition_cover').removeClass('none');
    } else { }
};

function exhibition_content_close() {
    exhibition_content.classList.add("none");
    $('.exhibition_cover').addClass('none');
};

document.addEventListener("click", function (e) {
    if (e.target.closest(".fa-times-circle")) {
        exhibition_content_close(e);
    };
});

$('body').on('click', '.exb_pic', function () {
    // console.log($(this).children('.work_id').html());
    // $(this).children('.work_id');
    let work_id = $(this).children('.work_id').html();
    work_content(work_id);
    exhibition_content_open();
    exbition_vistor(work_id);
});

function exbition_vistor(work_id) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_vistor.php",
        data: {
            'work_id': work_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            console.log(response);

        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};


function work_list() {
    let work_ul = document.getElementsByClassName('work_ul')[0];
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_work_list.php",
        data: {

        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            work_ul.innerHTML = response;
            member_like();
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

function work_content(work_id) {
    let exhibition_content = document.getElementsByClassName('exhibition_content')[0];
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_work_content.php",
        data: {
            'work_id': work_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            exhibition_content.innerHTML = response;
            member_like();
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

//會員登入按讚狀態
function member_like() {
    // item = {
    //     id: 1,
    // }
    //登入者ID待寫
    let login_id = item.id;
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_member_like.php",
        data: {
            'login_id': login_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);

            //陣列最後一個索引為空
            let like_work = response.split('/');
            // console.log($('.product_like')[0]);
            let product_like = document.getElementsByClassName('product_like');
            for (let j = 0; j < product_like.length; j++) {

                for (let i = 0; i < like_work.length - 1; i++) {

                    if ($(product_like[j]).prevAll('.work_id').html() == like_work[i]) {
                        // console.log($(this));
                        $(product_like[j]).children('.fa-heart').addClass('like_red');
                    } else { }
                };
            };

        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

// 分享
$('body').on('click', '.share', function () {
    let url = location.href;
    let id = $(this).parents('.product_like').prevAll('.work_id').html();
    // console.log(id);
    // let new_url = `${url}?share_id=${id}`;
    // $(this).attr("data-url", new_url);
    // console.log(new_url);
    var dummy = document.createElement('input'),
        new_url = `${url}?share_id=${id}`;
    document.body.appendChild(dummy);
    dummy.value = new_url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("已複製網址，可分享給您的朋友摟!");
});

let tag_btn = document.getElementsByClassName('tag_btn')[0].querySelectorAll('button');
// console.log(tag_btn);

let tag = [];
$(tag_btn).click(function () {
    // console.log($(this).val());
    if ($(this).hasClass('tag_click')) {
        $(this).removeClass('tag_click');
        for (let i = 0; i < tag.length; i++) {
            if (tag[i] === $(this).val()) {
                tag.splice(i, 1);
                console.log(tag);
            };
        };
        if (tag.length == 0) {
            work_list();
        } else {
            tag_search(tag);
        }
        // console.log(tag);
    } else {
        $(this).addClass('tag_click');
        tag.push($(this).val());
        tag_search(tag);
    };

});


function tag_search(tag) {
    let work_ul = document.getElementsByClassName('work_ul')[0];
    $.ajax({
        method: "POST",
        url: "./assets/php/front/exhibition_tag.php",
        data: {
            'tag': tag,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            console.log(response);
            work_ul.innerHTML = response;
            member_like();
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};