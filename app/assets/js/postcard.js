//自動生成圖片
window.onload = background();

function background(){
  $.ajax({
    method: "POST",
    url: "php/front/cardImg.php",
    data: {
      'postcard_category': 1,
    },
    dataType: "text",
    success: function (response) {
        //更新html內容
      // console.log(response);
      let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
      postImg.innerHTML=response;
      changePic();
    },
    error: function (exception) {
        alert("發生錯誤: " + exception.status);
    }
  });
  //換背景圖片
  function changePic(){
    let changeImg = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
    let cardImg = document.getElementsByClassName('postcard_bg')[0];
    for(let i = 0 ; i < changeImg.length ; i++){
      changeImg[i].addEventListener('click',function(){
        let imgSrc = changeImg[i].getAttribute('src');
        cardImg.style.backgroundImage="url('"+imgSrc+"')";
      })
    }
  }  
}
function logo(){
  $.ajax({
    method: "POST",
    url: "php/front/cardImg.php",
    data: {
      'postcard_category': 2,
    },
    dataType: "text",
    success: function (response) {
        //更新html內容
      // console.log(response);
      let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
      postImg.innerHTML=response;
      dragDrop();
    },
    error: function (exception) {
        alert("發生錯誤: " + exception.status);
    }
  });
}
//drop and drag 素材
function dragDrop(){
  let img = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
  for(let i = 0;i<img.length;i++){
    img[i].addEventListener('dragstart',function(e){
      e.dataTransfer.setData('image/png',`<img src="${img[i].src}" alt>`);
    });
  }
  box = document.getElementsByClassName('postcard_bg')[0];
  box.addEventListener('dragover',function(e){e.preventDefault();});
  box.addEventListener('drop',function dropped(e){
    e.preventDefault();
    console.log(e.dataTransfer.getData('image/png'))
    console.log(typeof(e.dataTransfer.getData('image/png')))
    box.innerHTML += e.dataTransfer.getData('image/png');
  })
}
//文字框 CLICK 出現 
function message(){
  let postcard_message = document.getElementsByClassName('postcard_message')[0];
  if(postcard_message.style.opacity == 0){
    postcard_message.style.opacity = 1;
  }else{
    postcard_message.style.opacity = 0;
  }
}
//message saved and 創造
function messageSave(){
  let value = document.getElementsByClassName('pos_textbox')[0].value;
  let span = document.createElement("span");
  let textarea = document.getElementsByTagName('textarea')[0];
  span.classList.add('drag');
  span.style.color = "white";
  span.style.fontSize = textarea.style.fontSize;
  span.style.color = textarea.style.color;
  span.style.position= 'absolute';
  span.style.top = '50%';
  span.style.right='50%';
  span.innerHTML = value;
  let postcard_bg = document.getElementsByClassName('postcard_bg')[0];
  postcard_bg.appendChild(span);
  drag();
}
// message 自由拖拉
function drag(){
  $(document).ready(function(){
    $('.drag').draggable({
        cursor: 'pointer',
        opacity: 0.6,
        containment:'parent',
        scroll: false,
    });
  });
}
function messageDel(){

}
//改變大小
function changeLineWidth (e) {
  let newWidth = document.getElementsByClassName('input-range')[0].value;
  let textarea = document.getElementsByTagName('textarea')[0];
  textarea.style.fontSize = newWidth + 'px';
}
//改變顏色
function changeLineColor () {
  let newColor = document.getElementById('shadowColorInput').value;
  let textarea = document.getElementsByTagName('textarea')[0];
  textarea.style.color = newColor;
}
//canvas
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.style.width = '35.4583vw'; 
canvas.style.height = '20.8333vw'; 
canvas.style.zIndex='10000';

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function mouseMove(evt) {
  var mousePos = getMousePos(canvas, evt);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}

canvas.addEventListener('mousedown', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
  evt.preventDefault();
  canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', mouseMove, false);
}, false);
