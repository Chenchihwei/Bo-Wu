var clicked=false;
function ClickLogin(){
    clicked=true;
};

function onSignIn(googleUser) {
  if(clicked){
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    AjaxGoogle(profile);
    //視窗消失
    let panel = document.getElementsByClassName("panel--static")[0];
    let leftblock = document.getElementsByClassName("leftBlock")[0];
    let rightblock = document.getElementsByClassName("rightBlock")[0];
    panel.classList.add('close');
    leftblock.style.opacity = '1';
    rightblock.style.opacity = '1';

    alert(profile.getName()+"登入成功");

  }
};
//登出
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("登出成功");
    });
  }
//AJAX丟給PHP
function AjaxGoogle(profile){
  $.ajax({
    url: "php/front/JoinGoogle.php",
    method: "POST",        
    data: {
      'googlename':profile.getName(),
      'googlemail':profile.getEmail(),
      'googleid':profile.getId(),
    },
    dataType: "text",
    success: function(data){
      alert(JSON.stringify(data));
    },
    error: function(errMsg) {
      alert(JSON.stringify(errMsg));
    }
  });
};