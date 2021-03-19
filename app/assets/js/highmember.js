$(document).ready(function () {
  work_save();
  work_exhibition();
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
    url: "./assets/php/front/highlevel_work_save.php",
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

//撈出上架區
function work_exhibition() {
  let member_id = item.id;
  // let member_id = 1614609750;
  $.ajax({
    method: "POST",
    url: "./assets/php/front/highlevel_work_exhibition.php",
    data: {
      'member_id': member_id,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
      // console.log(response);
      document.getElementsByClassName('personal_works')[0].innerHTML = response;

    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
};

//上架展品被點擊
$('.personal_works').on('click', '.personal_work', function () {
  // console.log($(this));
  if ($(this).children('.checkrage').hasClass('custom')) {
    $(this).children('.checkrage').removeClass('custom');
    $(this).children('.custom-checkbox').css('display', 'none');
    biddingBtn.style.display = "none";
  } else {
    $(this).children('.checkrage').addClass('custom');
    $(this).children('.custom-checkbox').css('display', 'block');
    biddingBtn.style.display = "block";
    let src = $(this).children('img').attr('data-id')
    biddingInformation(src);
    Save(src);
  };
});

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

//上架
$('.personal_OnShelf').click(function () {
  let unexhibition_img_choose = $('.unexhibition_img_choose');
  let unexhibition_div = $('.authority_div');
  // console.log(unexhibition_img_choose.length);
  let status = 1;
  if (unexhibition_img_choose.length == 0) {
    alert('您沒有選擇展品!');
  } else {


    for (let i = 0; i < unexhibition_img_choose.length; i++) {
      let work_id = $(unexhibition_img_choose[i]).attr('data-id');
      let img_path = $(unexhibition_img_choose[i]).attr('src');
      // console.log(data_id);
      // console.log(img_path);
      let block = `<div class="personal_work">
                    <img data-id="${work_id}" src="${img_path}" alt="">
                    <input type="checkbox" class="checkrage" data-img="2">
                    <div class="custom-checkbox"><i class="fas fa-check"></i></div>
                </div>`;
      // console.log(block);
      let personal_works = document.getElementsByClassName('personal_works')[0];
      personal_works.insertAdjacentHTML('beforeend', block);
      $(unexhibition_div[i]).remove();
      work_exhibition_update(status, work_id);
    };
    alert('上架成功!');
    verify_mail();
    location.reload();
  }
});

//下架
$('.personal_OffShelf').click(function () {
  let personal_work_choose = $('.custom').parents('.personal_work');
  // console.log(personal_work_choose.length);
  let exhibition_img_choose = $('.custom').prevAll('img');
  // console.log(exhibition_img_choose);
  let status = 2;
  if (personal_work_choose.length == 0) {
    alert('您沒有選擇展品');
  } else {
    for (let i = 0; i < personal_work_choose.length; i++) {
      let work_id = $(exhibition_img_choose[i]).attr('data-id');
      let img_path = $(exhibition_img_choose[i]).attr('src');
      // console.log(data_id);
      // console.log(img_path);
      let block = `<div class="authority_div" style="height:178px"><p style="font-weight:bold;" class="none">已選取</p>
                  <img class="checked" data-id="${work_id}" src="${img_path}" alt="">
                  </div>`;
      // console.log(block);
      document.getElementsByClassName('authority_image')[0].insertAdjacentHTML('beforeend', block);
      $(personal_work_choose[i]).remove();
      work_exhibition_update(status, work_id);
    };
    alert('下架成功!');
    location.reload();
  }

});




function work_exhibition_update(status, work_id) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/highlevel_exhibition_update.php",
    data: {
      'work_id': work_id,
      'status': status,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
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


//上傳至網頁上

// let authority_image = document.getElementsByClassName('authority_image')[0];
// function imgInsert(thisimg) {
// 	let file = thisimg.files[0];
// 		let fr = new FileReader();
// 		fr.onloadend = function(e) {

// 	  };
// 	fr.readAsDataURL(file);
// }

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
    url: "./assets/php/front/highmember_insert.php",
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




var biddingBtn = document.getElementsByClassName('biddingBtn')[0];
let biddingEdit = document.getElementsByClassName('biddingEdit')[0];
let save = document.getElementsByClassName('information')[0].querySelector('button');
let biddingInfor = document.getElementsByClassName('information')[0].querySelector('h1');
let biddingP = document.getElementsByClassName('information')[0].querySelector('p');
let biddingBtnStatus = true;
biddingBtn.addEventListener('click', function () {
  if (biddingBtnStatus == true) {
    biddingEdit.style.display = "block";
    biddingBtnStatus = false;
  } else {
    biddingEdit.style.display = "none";
    biddingBtnStatus = true;
  }
})

function Save(imgId) {
  save.addEventListener('click', function () {
    let time = document.getElementsByClassName('information')[0].getElementsByTagName('input')[0].value;
    let money = document.getElementsByClassName('information')[0].getElementsByTagName('input')[1].value;
    let item = getLocalstorage();
    $.ajax({
      method: "POST",
      url: "./assets/php/front/highlevel_bidding_insert.php",
      data: {
        'time': time,
        'money': money,
        'work_id': imgId,
        'member_id': item.id
        // 'member_id':1614609750,
      },
      dataType: "text",
      success: function (response) {
        alert('新增成功');
        console.log(response)
      },
      error: function (exception) {
        alert("發生錯誤: " + exception.status);
      }
    });
  })
}

function biddingInformation(imgId) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/highlevel_bidding_select.php",
    data: {
      'work_id': imgId,
    },
    dataType: "json",
    success: function (response) {
      biddingInfor.innerHTML = response[0].work_name
      biddingP.innerHTML = response[0].work_introduce
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
};

function verify_mail() {
  let member_id = item.id;
  $.ajax({
    method: "POST",
    url: "./assets/php/front/highmemberwork_mail.php",
    data: {
      'member_id': member_id,
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