//一載入頁面就呼叫fbInit()
window.onload = fbInit();

function fbInit() {
  window.fbAsyncInit = function () {
    FB.init({
      appId      : '494224398302494',
      cookie     : true,
      xfbml      : true,
      version    : 'v10.0'
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function (response) {

      if(response.status === 'connected'){
        console.log(response);
        let accesstoken = response.authResponse.accessToken;
      }
    });
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

// 按會員按鈕時先檢查有沒有登入過
  function facebookLogIn(){
    FB.getLoginStatus(function (response) {
      if(response.status === 'connected'){
        alert('你已經登入囉')
        console.log(response);
        let accesstoken = response.authResponse.accessToken;
        let auth = {
          "provider":"facebook",
          "access_token": accesstoken,
        };
        console.log(auth);
        signClose();
      }else{
        login();
      }
    });
  }


// 繼續未完成的登入
function login() {
  FB.login(function (response) {
    console.log(response);
  if (response.status === "connected") {

    // 如果已經登入了(response.status === "connected")，就使用FB.api"這個方法來獲得使用者的資料
      FB.api('/me', {
            'fields': 'id,name,email,picture.width(200).height(200)'
      }, function (res) {
        console.log(res)
        AjaxFB(res);
        signClose();
        // controlSignBar('1');
        window.alert(res.name+'您已經成功登入囉!');
      });
    }
  }, {
    scope: 'email',
    auth_type: 'rerequest'
  });
};
function Fblogout(){
  // //按登出按鈕時先檢查狀態是否為登入
  FB.getLoginStatus(function (response) {
    // console.log(response.status);
    if(response.status === 'connected') {
      FB.logout(function () {
        // window.localStorage.clear();
        localStorage.clear();
        // window.alert("您已經成功登出囉!");
        // window.location = "./index.html";
        //清除localStorage
        // item = getLocalstorage();
        // window.location.href = "./";
      });
    }
  });
}
//AJAX丟給PHP
function AjaxFB(res){
  $.ajax({
    url: "./assets/php/front/JoinFb.php",
    method: "POST",        
    data: {
      'fbname':res.name,
      'fbmail':res.email,
      'fbid':res.id,
      'fbimg':res.picture.data.url,
    },
    dataType: "text",
    success: function(data){
      inStorage(data,'facebook',1,res.picture.data.url,res.name);
      item = getLocalstorage();
      controlSignBar(1);
      manger_click();
    },
    error: function(errMsg) {
      alert(JSON.stringify(errMsg));
    }
  });
};

