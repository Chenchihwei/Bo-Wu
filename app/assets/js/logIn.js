let logOut = document.getElementsByClassName('logOut')[0];
//會員登入彈窗
let logIn = document.getElementsByClassName("login_manger")[0];
let panel = document.getElementsByClassName("panel--static")[0];
let block = document.getElementsByClassName('block');


logIn.addEventListener('click', function () {
  if (panel.classList.contains("close")) {
    panel.classList.remove('close');
    for (let i = 0; i < block.length; i++) {
      block[i].style.opacity = '0.5'
    }

  } else {
    panel.classList.add('close');
    for (let i = 0; i < block.length; i++) {
      block[i].style.opacity = '1'
    }

  }
});
//會員登入左右滑動
(function () {
  var staticPanel = $('.panel--static');
  var slidingPanel = $('.panel--sliding');

  var signupBtn = staticPanel.find('.btn.signup');
  var loginBtn = staticPanel.find('.btn.login');

  var signupContent = slidingPanel.find('.panel__content.signup');
  var loginContent = slidingPanel.find('.panel__content.login');

  signupBtn.on('click', function () {
    loginContent.hide('fast');
    signupContent.show('fast');
    slidingPanel.animate({
      'left': '4%'
    }, 550, 'easeInOutBack');
  });

  function open_login() {
    signupContent.hide('fast');
    loginContent.show('fast');
    slidingPanel.animate({
      'left': '47%'
    }, 550, 'easeInOutBack');
  }

  loginBtn.on('click', function () {
    open_login()
  });

  open_login()

})();


//登入成功視窗消失
function signClose() {
  let panel = document.getElementsByClassName("panel--static")[0];

  panel.classList.add('close');
  for (let i = 0; i < block.length; i++) {
    block[i].style.opacity = '1'
  }
}
//控制是否登入狀況
let manger = document.getElementsByClassName('manger')[0];
function controlSignBar(num) {
  let sign = num;
  if (sign == 0) {
    manger.classList.add('close');
    logOut.classList.add('close');
    logIn.classList.remove('close')
  } else if (sign == 1) {
    manger.classList.remove('close');
    logOut.classList.remove('close');
    logIn.classList.add('close');

  }
}
//寫入localstorge
function inStorage(userid, how, sign, imgUrl, name) {
  let task = {
    'id': userid,
    "status": how, // 用啥登入
    'sign': sign, //是否登入
    'pic': imgUrl,//照片
    'name': name,//姓名
  };
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) { // 若存在
    tasks.unshift(task);
  } else { // 若不存在
    tasks = [task];
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
window.onload = outStorage();
//localstorage拿出
function outStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach(function (item) {
      if (item.sign == 1) {
        controlSignBar(1);
        manger_click();
      }
    })
  } else {
    controlSignBar(0);
  }
}
// manger.addEventListener('click',function(){
//   manger_click();
// })
//判斷登入者等級
function manger_click() {
  let item = getLocalstorage();
  let member_id = item.id;
  console.log(member_id);
  let manger = document.getElementsByClassName('manger')[0];
  $.ajax({
    method: "POST",
    url: "./assets/php/front/login_member.php",
    data: {
      'member_id': member_id,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
      console.log(response);
      // 1:高級 2:普通
      if (response == 1) {
        $(manger).attr("href", './hightlevelnumber.html');
      } else if (response == 2) {
        $(manger).attr("href", './normalnumber.html');
      } else {

      };
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
};

logOut.addEventListener('click', function () {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks[0].status == 'google') {
    signOut();
    alert('登出成功');
    manger.classList.add('close');
    logOut.classList.add('close');
    logIn.classList.remove('close')
    location.assign('./homepage.html')
  } else if (tasks[0].status == 'facebook') {
    Fblogout();
    alert('登出成功');
    manger.classList.add('close');
    logOut.classList.add('close');
    logIn.classList.remove('close')
    location.assign('./homepage.html')
  } else if (tasks[0].status == 'normal') {
    localStorage.clear();
    alert('登出成功');
    manger.classList.add('close');
    logOut.classList.add('close');
    logIn.classList.remove('close')
    location.assign('./homepage.html')
  }
})

//拿localstorage
function getLocalstorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    // tasks.forEach(function(item){
    //   return item;
    // })
    return tasks[0];
  }
}