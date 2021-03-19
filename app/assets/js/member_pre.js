//動態載入圖片
let currentWorkId;
var url = location.href;
var temp = url.split("?")[1].split('=');
// console.log(temp[1]);
window.onload = memberWorks();
let item = getLocalstorage();
function memberWorks() {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/memberWorks.php",
    data: {
      // 'member_id': 1614609750,
      'member_id': temp[1],
    },
    dataType: "json",
    success: function (response) {
      //更新html內容
      let i = 0;
      $.each(response, function () {
        let works = document.getElementsByClassName('imgShow')[0];
        let memberImg = document.getElementsByClassName('selectImg')[0].querySelector('ul');
        let texth3 = document.getElementsByClassName('text')[0].querySelector('h3');
        let texth2 = document.getElementsByClassName('text')[0].querySelector('h2');
        let textp = document.getElementsByClassName('text')[0].querySelector('p');
        let countP = document.getElementsByClassName('count')[0].querySelector('p');
        //展示大圖第一張
        works.style.backgroundImage = "url('./" + response[0].img_path + "')";
        //展示大圖第一張MAKERname
        texth3.innerHTML = response[0].name;
        //展示大圖第一張workname
        texth2.innerHTML = response[0].work_name;
        //展示大圖第一張介紹
        textp.innerHTML = response[0].work_introduce;
        //展示大圖第一張按讚數
        countP.innerHTML = response[0].like_num;
        //新增所有展品於下方選擇處
        memberImg.innerHTML += '<li><img src=' + response[i].img_path + ' alt=""></li>';
        i++;
      });
      commentFirst(response[0].work_id);
      // commentInsert(response[0].work_id);
      currentWorkId = response[0].work_id;
      changePic(response);
      heartChange(response);
      Subscribe();
      heartStatus();
      selectPic();
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
};
//動態載入留言第一次
function commentFirst(picID) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/membercomment.php",
    data: {
      'work_id': picID,
      // 'member_id': 1614609750,
      'member_id': temp[1],
    },
    dataType: "json",
    success: function (response) {
      let i = 0;
      $.each(response, function () {
        let commentRightTop = document.getElementsByClassName('commentRightTop')[0].querySelector('ul');
        commentRightTop.innerHTML += '<li><img src=' + response[i].member_img + ' alt=""><h4>' + response[i].name + '</h4><p>' + response[i].message_text + '</p></li>'
        i++;
      });

    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
}
//留言板彈窗
let messageBoard = document.getElementsByClassName('messageBoard')[0]
let messageButton = document.getElementsByClassName('commentRightTop')[0].querySelector('button');
let messageCancel = document.getElementsByClassName('messageTitle')[0].querySelector('img');
messageButton.addEventListener('click', function () {
  if (!item) {
    alert('請先登入喔！')
  } else {
    if (messageBoard.classList.contains('show')) {
      messageBoard.classList.remove('show');
      for (let i = 0; i < block.length; i++) {
        block[i].style.opacity = '1';
      }
    } else {
      messageBoard.classList.add('show');
      for (let i = 0; i < block.length; i++) {
        block[i].style.opacity = '0.5';
      }
    }
  }

})
messageCancel.addEventListener('click', function () {
  if (messageBoard.classList.contains('show')) {
    messageBoard.classList.remove('show');
    for (let i = 0; i < block.length; i++) {
      block[i].style.opacity = '1';
    }
  }
})

//訂閱click改變顏色
let subscribeBtn = document.getElementsByClassName('subscribeBtn')[0];
let subscribeState = true
subscribeBtn.addEventListener('click', function () {
  if (!item) {
    alert('請先登入喔！')
  } else {
    if (subscribeState == true) {
      subscribeBtn.style.color = 'black';
      subscribeBtn.style.backgroundColor = 'white';
      subscribeBtn.style.border = '3px solid #707070';
      insSubscribe();
      subscribeState = false;
    } else {
      subscribeBtn.style.color = '#ffffff';
      subscribeBtn.style.backgroundColor = '';
      subscribeBtn.style.border = '3px solid #ffffff';
      delSubscribe();
      subscribeState = true;
    }
  }
})
//訂閱寫進資料庫
let timeSubscription;
function insSubscribe() {
  // let item = getLocalstorage();
  if (item) {
    $.ajax({
      method: "POST",
      url: "./assets/php/front/insertSubscribe.php",
      data: {
        'fans_id': item.id,
        'subscribed_id': temp[1],
      },
      dataType: "text",
      success: function (response) {
        timeSubscription = response;
      },
      error: function (exception) {

      }
    });
  }
}
//取消訂閱刪除資料庫
function delSubscribe() {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/delSubscribe.php",
    data: {
      'subscripition_id': timeSubscription,
    },
    dataType: "text",
    success: function (response) {
    },
    error: function (exception) {

    }
  });
}
//是否有訂閱
function Subscribe() {
  // let item = getLocalstorage();
  if (item) {
    $.ajax({
      method: "POST",
      url: "./assets/php/front/subscribe.php",
      data: {
        'fans_id': item.id,
        'subscribed_id': temp[1],
      },
      dataType: "text",
      success: function (response) {
        if (response == 1) {
          subscribeBtn.style.color = 'black';
          subscribeBtn.style.backgroundColor = 'white';
          subscribeBtn.style.border = '3px solid #707070';
          subscribeState = false;
        }
      },
      error: function (exception) {
      }
    });
  }
}

//愛心click改變
var count = document.getElementsByClassName('count')[0].querySelector('img');
var countP = document.getElementsByClassName('count')[0].querySelector('p');
var countState = true;
function heartChange(res) {
  count.style.cursor = 'pointer';
  count.addEventListener('click', function () {
    if (!item) {
      alert('請先登入喔！')
    } else {
      if (countState == true) {
        count.src = './assets/img/Heart1.png';
        countP.innerHTML = parseInt(countP.innerHTML) + 1;
        heartInsert(1)
        countState = false;
      } else {
        count.src = './assets/img/Heart.png';
        countP.innerHTML = parseInt(countP.innerHTML) - 1;
        heartInsert(2)
        countState = true;
      }
      heartUpdate(countP.innerHTML);
    }
  })
}
//按讚後更新進資料庫數字
function heartUpdate(value) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/heartUpdate.php",
    data: {
      'like_num': value,
      'work_id': currentWorkId,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
    },
    error: function (exception) {
    }
  });
}
//按讚後更新進資料庫
function heartInsert(status) {
  let item = getLocalstorage();
  $.ajax({
    method: "POST",
    url: "./assets/php/front/heartInsert.php",
    data: {
      'work_id': currentWorkId,
      'member_id': item.id,
      'like': status,
    },
    dataType: "text",
    success: function (response) {
    },
    error: function (exception) {
      alert('error')
    }
  });
}
//確認是否按過讚
function heartStatus() {
  // let item = getLocalstorage();
  if (item) {
    $.ajax({
      method: "POST",
      url: "./assets/php/front/heartStatus.php",
      data: {
        'work_id': currentWorkId,
        'member_id': item.id,
      },
      dataType: "text",
      success: function (response) {
        if (response == 1) {
          count.src = './assets/img/Heart1.png';
          countState = false;
        } else if (response == 2) {
          count.src = './assets/img/Heart.png';
          countState = true;
        }
      },
      error: function (exception) {

      }
    });
  }
}
//選取變更圖片及圖片資料及愛心數量
function changePic(res) {
  let works = document.getElementsByClassName('imgShow')[0];
  let changeWorks = document.getElementsByClassName('selectImg')[0].querySelector('ul').querySelectorAll('img');
  let texth3 = document.getElementsByClassName('text')[0].querySelector('h3');
  let texth2 = document.getElementsByClassName('text')[0].querySelector('h2');
  let textp = document.getElementsByClassName('text')[0].querySelector('p');
  let countP = document.getElementsByClassName('count')[0].querySelector('p');
  let imgCount = 0;
  changeWorks.forEach(item => {
    item.addEventListener('click', function () {
      let worksSrc = item.getAttribute('src');
      works.style.backgroundImage = "url('./" + worksSrc + "')";
      for (let i = 0; i < res.length; i++) {
        if (res[i].img_path == worksSrc) {
          texth3.innerHTML = res[i].name;
          texth2.innerHTML = res[i].work_name;
          textp.innerHTML = res[i].work_introduce;
          console.log(typeof res[i].work_introduce)
          countP.innerHTML = res[i].like_num;
          commentLoad(res[i].work_id);
          currentWorkId = res[i].work_id;
          heartStatus();
          imgCount += 1;
          imgCountInsert(imgCount);
        }
      }
    });
  });
}
//點擊次數
function imgCountInsert(imgCount) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/imgCountInsert.php",
    data: {
      'visitors': imgCount,
      'work_id': currentWorkId,
    },
    dataType: "text",
    success: function (response) {
    },
    error: function (exception) {
    }
  });
}
//選取圖片變更留言內容
function commentLoad(picID) {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/membercomment.php",
    data: {
      'work_id': picID,
    },
    dataType: "json",
    success: function (response) {
      let i = 0;
      let commentRightTop = document.getElementsByClassName('commentRightTop')[0].querySelector('ul');
      let commentRightLi = commentRightTop.querySelectorAll('li')
      if (commentRightTop.querySelector('li')) {
        for (let i = 0; i < commentRightLi.length; i++) {
          commentRightLi[i].remove();
        }
        $.each(response, function () {
          commentRightTop.innerHTML += '<li><img src=' + response[i].member_img + ' alt=""><h4>' + response[i].name + '</h4><p>' + response[i].message_text + '</p></li>'
          i++;
        });
      } else {
        $.each(response, function () {
          commentRightTop.innerHTML += '<li><img src=' + response[i].member_img + ' alt=""><h4>' + response[i].name + '</h4><p>' + response[i].message_text + '</p></li>'
          i++;
        });
      }

    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
}
//左右選擇圖片
function selectPic() {

  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];
  let liWidth = document.getElementsByClassName('selectImg')[0].querySelector('ul').querySelector('li')
  let picAll = document.getElementsByClassName('selectImg')[0].querySelector('ul');
  picAll.style.left = "0";
  picAll.style.position = 'relative';

  right.addEventListener('click', function () {
    slidePic(-liWidth.offsetWidth);
  })
  left.addEventListener('click', function () {
    slidePic(liWidth.offsetWidth);
  })

  let picLength = picAll.querySelectorAll('li').length;
  function slidePic(offset) {

    let newLeft = parseInt(picAll.style.left) + offset;

    if (newLeft < -(picLength - 3) * (liWidth.offsetWidth)) {
      picAll.style.left = -liWidth + "px";
    } else if (newLeft > 0) {
      picAll.style.left = 0 + "px";
    } else {
      picAll.style.left = newLeft + "px";
    }

  }
}
//留言顯示於前台頁面並寫入資料庫
let mesButton = document.getElementsByClassName('message')[0].querySelector('button');
let text = document.getElementsByClassName('message')[0].querySelector('textarea');
let commentRightTop = document.getElementsByClassName('commentRightTop')[0].querySelector('ul');
function commentInsert(picID) {
  // let tasks = JSON.parse(localStorage.getItem("tasks"));
  // if(tasks){
  // tasks.forEach(function(item){
  let item = getLocalstorage();
  commentRightTop.innerHTML += '<li><img src=' + item.pic + ' alt=""><h4>' + item.name + '</h4><p>' + text.value + '</p></li>'
  $.ajax({
    method: "POST",
    url: "./assets/php/front/commentInsert.php",
    data: {
      'message_text': text.value,
      'work_id': picID,
      'member_id': item.id,
    },
    dataType: "text",
    success: function (response) {
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
  // })
  // }
}
//點擊 Save & Send 按鈕送出留言 
mesButton.addEventListener('click', function () {
  if (text.value == "") {
    alert('輸入點東西吧!')
  } else {
    commentInsert(currentWorkId);
    messageBoard.classList.remove('show');
    for (let i = 0; i < block.length; i++) {
      block[i].style.opacity = '1';
    }
  }
})

// //拿localstorage
// function getLocalstorage(){
//   let tasks = JSON.parse(localStorage.getItem("tasks"));
//   if(tasks){
//     // tasks.forEach(function(item){
//     //   return item;
//     // })
//     return tasks[0];
//   }
// }
