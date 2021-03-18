// let authority = document.querySelector('.authority');
// // console.log(authority);
// let authority_btn = document.querySelector('.authority_btn');
// let authority_btn_down = document.querySelector('.authority_btn_down');
// // console.log(authority_btn);

// $(window).on('load scroll resize', function () {
//     console.log(window.innerWidth);

//     $(authority).on('scroll', function () {
//         let hideheight = $('.authority').scrollTop();
//         console.log(hideheight);
//         authority_btn_down.style.marginTop = hideheight + 650 + 'px';

//     })


// })



$(document).ready(function () {
    work_save();
    member_content();
    member_total();
});
//localhost
function getLocalstorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        return tasks[0];
    }
}
let item = getLocalstorage();

//撈出會員資料
function member_content() {
    let member_id = item.id;
    // let member_id = 1614609750;
    $.ajax({
        method: "POST",
        url: "./assets/php/front/highlevel_member_content.php",
        data: {
            'member_id': member_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            let name = response.split('|')[0];
            let email = response.split('|')[1];
            let introduction = response.split('|')[2];
            let userimage = response.split('|')[3];
            $('.name').children('p').html(name);
            $('.mastername').children('p').html(email);
            $('.intro').children('p').html(introduction);
            $('.art').attr('src', userimage);
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};
//撈出總值
function member_total() {
    let member_id = item.id;
    // let member_id = 1614609750;
    $.ajax({
        method: "POST",
        url: "./assets/php/front/highlevel_member_count.php",
        data: {
            'member_id': member_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            let goodTotal = response.split('|')[0];
            let peopleTotal = response.split('|')[1];
            let commentTotal = response.split('|')[2];
            $('.good').children('.p1').html(goodTotal);
            $('.tour').children('.p1').html(peopleTotal);
            $('.message').children('.p1').html(commentTotal);
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

//撈出作品儲存區
function work_save() {
    let member_id = item.id;
    // let member_id = 1614609750;
    $.ajax({
        method: "POST",
        url: "./assets/php/front/normember_work_save.php",
        data: {
            'member_id': member_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            document.getElementsByClassName('authority_image')[0].innerHTML = response;

        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};


//作品儲存區展品被點擊
$('.authority_image').on('click', 'img', function () {
    // console.log($(this).attr('data-id'));
    let work_id = $(this).attr('data-id');
    // console.log(work_id);
    if ($(this).hasClass('uncheck')) {
        alert('請靜待審核!');
    } else {
        if ($(this).hasClass('unexhibition_img_choose')) {
            $(this).removeClass('unexhibition_img_choose');
            $(this).prevAll('p').addClass('none');
            $('.name').removeClass('work_content');
            member_content();
            member_total();
        } else {
            $(this).addClass('unexhibition_img_choose');
            $(this).prevAll('p').removeClass('none');
            $('.name').addClass('work_content');
            work_content(work_id);
        };
    };
});



function work_content(work_id) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/highlevel_work_content.php",
        data: {
            'work_id': work_id,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            let work_name = response.split('//')[0];
            let work_introduce = response.split('//')[1];
            let like_num = parseInt(response.split('//')[2]);
            let vistors = parseInt(response.split('//')[3]);
            let message_count = parseInt(response.split('//')[4]);
            let img = response.split('//')[5]
            // console.log(message_count);
            // console.log(message_count);
            $('.mastername').children('p').html(work_name);
            $('.intro').children('p').html(work_introduce);
            $('.good').children('.p1').html(like_num);
            $('.tour').children('.p1').html(vistors);
            $('.message').children('.p1').html(message_count);
            $('.artimg').html(img);
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};




//修改資料
$('.edit_click').click(function () {
    let textbox = $(this).prevAll('.edit_input');
    let p_str = $(this).prevAll('p');
    if ($(this).prevAll('.edit_input').hasClass('none')) {
        $(this).prevAll('.edit_input').removeClass('none');
        $(this).prevAll('p').addClass('none');
        $(textbox).val($(p_str).html());



    } else {
        $(this).prevAll('.edit_input').addClass('none');
        $(this).prevAll('p').removeClass('none');
        $(p_str).html($(textbox).val());

        let field;
        let edit_content;
        if ($(textbox).hasClass('edit_name')) {
            field = 'name';
            edit_content = $(textbox).val();

        } else if ($(textbox).hasClass('edit_work_name')) {
            field = 'work_name';
            edit_content = $(textbox).val();


        } else {
            field = 'introduce';
            edit_content = $(textbox).val();

        }


        // console.log($(this).parents('.left').children('.name'));
        //判斷現在是展品還是會員資料，如果是展品資料的話會有class="work_content"
        if ($(this).parents('.left').children('.name').hasClass('work_content')) {
            let work_id = $(this).parents('.left').children('.artimg').children('img').attr('data-id');
            // console.log(work_id);
            // 展品資料update
            $.ajax({
                method: "POST",
                url: "./assets/php/front/highlevel_work_update.php",
                data: {
                    'work_id': work_id,
                    'field': field, //欄位為姓名或名稱或簡介
                    'edit_content': edit_content //修改後的值
                },
                dataType: "text",
                success: function (response) {
                    //更新html內容
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });



        } else {
            // 會員資料update
            let member_id = item.id;
            // let member_id = 1614609750;
            $.ajax({
                method: "POST",
                url: "./assets/php/front/highlevel_member_update.php",
                data: {
                    'member_id': member_id,
                    'field': field,   //欄位為姓名或mail或自介
                    'edit_content': edit_content //修改後的值
                },
                dataType: "text",
                success: function (response) {
                    //更新html內容
                    // console.log(response);
                    alert('修改完成');
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

        }

    }
});



function upload() {
    let upimg = new FormData(document.getElementsByClassName('upimg')[0]);
    if ($('.fileupload').get(0).files[0]) {
        $.ajax({
            type: 'post',
            url: "./assets/php/front/highmemberupload.php",
            data: upimg,
            cache: false,
            processData: false,
            contentType: false,
            success: function (response) {
                let path = response.split("|")[0];
                let img_name = response.split("|")[1];
                console.log(path)
                console.log(img_name)
                insert(path);
            },
            error: function (exception) {
                alert("發生錯誤: " + exception.status);
            }
        });
    } else {

    };
};
//新增sql
function insert(path) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/normal_work_insert.php",
        data: {
            'path': path,
            'img_name': "請輸入展品名稱",
            'member_id': item.id,
            // 'member_id':1614609750,
        },
        dataType: "text",
        success: function (response) {
            alert('上傳成功');
            console.log(response)
            let block = `<div class="authority_div" style="height:178px"><p style="font-weight:bold;">待審核</p>
                    <img style="opacity:0.4;" class="uncheck" data-id="${response}" src="${path}" alt="">
                    </div>`;
            // console.log(block);
            document.getElementsByClassName('authority_image')[0].insertAdjacentHTML('beforeend', block);
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
}
let work_btn = document.getElementsByClassName('work_btn')[0];
let fileupload = document.getElementsByClassName('fileupload')[0];

work_btn.addEventListener('click', function (e) {
    if (fileupload) {
        fileupload.click();
    }
    e.preventDefault();
})


//刪除網頁上的圖片
let trash_btn = document.getElementsByClassName('trash_btn')[0];
trash_btn.addEventListener('click', function () {
    let imgSelected = document.getElementsByClassName('authority_image')[0].querySelectorAll('div');

    imgSelected.forEach(element => {
        if (element.lastChild.classList.contains('unexhibition_img_choose')) {
            element.remove();
            let imgId = element.querySelector('img').getAttribute('data-id');
            deleteWork(imgId);
            member_content();
        }
    });
})

function deleteWork(imgId) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/highmember_delete.php",
        data: {
            'imgId': imgId,
        },
        dataType: "text",
        success: function (response) {
            alert('刪除成功');
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
}
