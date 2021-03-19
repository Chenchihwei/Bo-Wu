//自動生成圖片
window.onload = background();

function background() {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/cardImg.php",
    data: {
      'postcard_category': 1,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
      // console.log(response);
      let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
      postImg.innerHTML = response;
      changePic();
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
  //換背景圖片
  function changePic() {
    let changeImg = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
    let cardImg = document.getElementsByClassName('postcard_bg')[0];
    for (let i = 0; i < changeImg.length; i++) {
      changeImg[i].addEventListener('click', function () {
        let imgSrc = changeImg[i].getAttribute('src');
        cardImg.style.backgroundImage = "url('" + imgSrc + "')";
      })
    }
  }
}
function logo() {
  $.ajax({
    method: "POST",
    url: "./assets/php/front/cardImg.php",
    data: {
      'postcard_category': 2,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
      // console.log(response);
      let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
      postImg.innerHTML = response;
      dragDrop();
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
}
//drop and drag 素材
function dragDrop() {
  let img = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('image/png', `<img class='drag material' src="${img[i].src}" alt>`);
    });
  }
  box = document.getElementsByClassName('postcard_bg')[0];
  box.addEventListener('dragover', function (e) { e.preventDefault(); });
  box.addEventListener('drop', function dropped(e) {
    e.preventDefault();
    console.log(e.dataTransfer.getData('image/png'))
    console.log(typeof (e.dataTransfer.getData('image/png')));
    // box.innerHTML += e.dataTransfer.getData('image/png');  //用innerHTML會蓋掉原有的內容
    box.insertAdjacentHTML('beforeend', e.dataTransfer.getData('image/png'));
    drag();
  })
}
//文字框 CLICK 出現 
function message() {
  let postcard_message = document.getElementsByClassName('postcard_message')[0];
  if (postcard_message.style.opacity == 0) {
    postcard_message.style.opacity = 1;
  } else {
    postcard_message.style.opacity = 0;
  }
}
//message saved and 創造
function messageSave() {
  let pos_textbox = document.getElementsByClassName('pos_textbox')[0];
  let span = document.createElement("span");
  let textarea = document.getElementsByTagName('textarea')[0];
  span.classList.add('drag');
  span.style.color = "white";
  span.style.fontSize = textarea.style.fontSize;
  span.style.color = textarea.style.color;
  span.style.position = 'absolute';
  span.style.top = '50%';
  span.style.right = '50%';
  span.innerHTML = pos_textbox.value;
  let postcard_bg = document.getElementsByClassName('postcard_bg')[0];
  postcard_bg.appendChild(span);
  textarea.value = "";
  drag();

}
// message 自由拖拉
function drag() {
  $(document).ready(function () {
    $('.drag').draggable({
      cursor: 'pointer',
      opacity: 0.6,
      containment: 'parent',
      scroll: false,
    });
  });
}
//訊息點擊外框
document.addEventListener('click', function outline(e) {
  if (e.target.classList.contains('drag')) {
    if (e.target.classList.contains('outline')) {
      e.target.classList.remove('outline')
    } else {
      e.target.classList.add('outline');
    }
  }
})
//訊息刪除
function messageDel(e) {
  let mesSelect = document.querySelectorAll('.outline');
  [...mesSelect].forEach(item => item.remove());
}
//改變大小
function changeLineWidth(e) {
  //點選可更改
  let postcard_bg = document.getElementsByClassName('postcard_bg')[0];
  let span = postcard_bg.getElementsByTagName('span')[1];
  let outline = document.getElementsByClassName('drag');
  let newWidth = document.getElementsByClassName('input-range')[0].value;
  if (postcard_bg.contains(span)) {
    for (let i = 0; i < outline.length; i++) {
      if (outline[i].classList.contains('outline')) {
        let mesSelect = document.querySelectorAll('.outline');
        [...mesSelect].forEach(item => item.style.fontSize = newWidth + 'px');
      } else {//僅輸入框更改
        let textarea = document.getElementsByTagName('textarea')[0];
        textarea.style.fontSize = newWidth + 'px';
      }
    }
  } else {
    let textarea = document.getElementsByTagName('textarea')[0];
    textarea.style.fontSize = newWidth + 'px';
  }
}
//改變顏色
function changeLineColor() {
  let postcard_bg = document.getElementsByClassName('postcard_bg')[0];
  let span = postcard_bg.getElementsByTagName('span')[1];
  let outline = document.getElementsByClassName('drag');
  let newColor = document.getElementById('shadowColorInput').value;
  if (postcard_bg.contains(span)) {
    for (let i = 0; i < outline.length; i++) {
      if (outline[i].classList.contains('outline')) {
        let mesSelect = document.querySelectorAll('.outline');
        [...mesSelect].forEach(item => item.style.color = newColor);
      } else {//僅輸入框更改
        let textarea = document.getElementsByTagName('textarea')[0];
        textarea.style.color = newColor;
      }
    }
  } else {
    let textarea = document.getElementsByTagName('textarea')[0];
    textarea.style.color = newColor;
  }
}
//canvas 畫板
$('.fa-pen').click(function () {
  let markerWidth = 1;
  let markerColor = 'black';
  let lastEvent;
  let mouseDown = false;

  let canvas = $('canvas');

  let context = $('canvas')[0].getContext('2d');

  canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
  }).mousemove(function (e) {
    if (mouseDown) {

      context.beginPath();

      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.lineWidth = markerWidth;
      context.strokeStyle = markerColor;
      context.lineCap = 'round';
      context.stroke();

      lastEvent = e;

    }
  }).mouseup(function () {
    mouseDown = false;
  });

  var changeWidth = function () {
    markerWidth = $('.input-range').val();
  }
  var changeColor = function () {
    markerColor = $('#shadowColorInput').val();
  }

  var clear = function () {
    context.clearRect(0, 0, 690, 390);
  }

  $('.fa-eraser').on('click', clear);

  $('.input-range').change(changeWidth);

  $('#shadowColorInput').change(changeColor);


});

//localhost
function getLocalstorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    return tasks[0];
  }
}
let item = getLocalstorage();


//html2canvas 下載圖片
function screenshot() {
  if (item) {
    $(".postcard_send").css("height", "");
    // $(".postcard_send").css("width", "753px");
    $("html, body").scrollTop(0);
    html2canvas(document.getElementsByClassName('postcard_send')[0]).then(function (canvas) {
      // document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = 'image.jpg';
      a.click();
    });
  } else {
    alert('請先登入喔!');
  }
}

$('.send').click(function () {
  if (item) {
    $(".postcard_send").css("height", "");
    $(".postcard_send").css("width", "753px");
    $("html, body").scrollTop(0);
    html2canvas(document.getElementsByClassName('postcard_send')[0]).then(function (canvas) {
      // document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      let base64 = canvas.toDataURL("image/jpeg");
      // console.log(base64);
      let your_mail = $('.email_text').val();
      mailtest(your_mail, base64);

    });
  } else {
    alert('請先登入喔!');
  }
});


function mailtest(your_mail, base64) {

  //Typing your code...
  $.ajax({
    method: "POST",
    url: "./assets/php/front/send.php",
    data: {
      'your_mail': your_mail,
      'base64': base64,
    },
    dataType: "text",
    success: function (response) {
      //更新html內容
      // document.getElementsByClassName('tr')[0].innerHTML = response;
      // console.log(response);
      alert('明信片已經為您寄出!');
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    }
  });

}

let width = $(window).width();
if (width <= 1920 && width > 1440) {
  $('#canvas').removeClass('none');
  $('#canvas1').addClass('none');
  $('#canvas2').addClass('none');

} else if (width <= 1440 && width > 1280) {
  $('#canvas').addClass('none');
  $('#canvas1').removeClass('none');
  $('#canvas2').addClass('none');

} else if (width <= 1280) {
  $('#canvas').addClass('none');
  $('#canvas1').addClass('none');
  $('#canvas2').removeClass('none');
}