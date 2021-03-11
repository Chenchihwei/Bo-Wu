  //會員登入彈窗
  let logIn = document.getElementsByClassName("login")[0];
  let panel = document.getElementsByClassName("panel--static")[0];
  let block = document.getElementsByClassName('block');
  // let leftblock = document.getElementsByClassName("leftBlock")[0];
  // let rightblock = document.getElementsByClassName("rightBlock")[0];
  
  logIn.addEventListener('click', function () {
    if (panel.classList.contains("close")) {
      panel.classList.remove('close');
      for(let i = 0 ; i < block.length  ; i++){
        block[i].style.opacity='0.5'
      }
      // leftblock.style.opacity = '0.5';
      // rightblock.style.opacity = '0.5';
    } else {
      panel.classList.add('close');
      for(let i = 0;i<block.length;i++){
        block[i].style.opacity='1'
      }
      // leftblock.style.opacity = '1';
      // rightblock.style.opacity = '1';
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

      function open_login (){
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