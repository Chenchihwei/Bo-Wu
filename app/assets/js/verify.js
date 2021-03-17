//會員驗證
var vm = new Vue({
  el:'#app2',
  data:{
    name: '',
    usernameError: false,
    userErrMsg: '',
    password: '',
    passwordError: false,
    passErrMsg: '',
    mail: '',
    mailError: false,
    mailErrMsg: ''
  },
  watch:{
    name(){
      let isName = /^[a-zA-Z\u4e00-\u9fa5]{0,}$/;
      if(!isName.test(this.name)){
        this.usernameError = true;
        this.userErrMsg = '勿含特殊字元及數字';
      }else{
        this.usernameError = false;
        this.userErrMsg = '';
      }
    },
    mail(){
      let isMail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if(this.mail == ''){
        this.mailError = false;
        this.mailErrMsg = '';
      }else if(!isMail.test(this.mail)){
        this.mailError = true;
        this.mailErrMsg = '請輸入正確格式';
      }else{
        this.mailError = false;
        this.mailErrMsg = '';
      }
    },
    password(){
      let isText = /^[a-z0-9]+$/;
      if(this.password == ''){
        this.passwordError = false;
        this.passErrMsg = '';
      }else if (!isText.test(this.password)) {
        this.passwordError = true;
        this.passErrMsg = '勿含特殊字元';
      }else if (this.password.length < 6) {
        this.passwordError = true;
        this.passErrMsg = '請勿少於6個字';
      }else if (this.password.length > 15) {
        this.passwordError = true;
        this.passErrMsg = '請勿超過15個字';
      }else {
        this.passwordError = false;
        this.passErrMsg = '';
      }
    },
  },
  methods: {
    checkSign(event){
      if (document.getElementById('name').value == '') {
        alert("請填寫[姓名]");
        event.preventDefault();
      }else if (document.getElementById('mail').value == '') {
        alert("請填寫[信箱]");
        event.preventDefault();
      }else if (document.getElementById('password').value == '') {
        alert("請填寫[密碼]");
        event.preventDefault();
      }else if(document.getElementsByClassName('input--agree')[0].checked == false){
        alert('請勾選會員守則');
        event.preventDefault();
      }else if(this.passwordError == true || this.usernameError == true || this.mailError == true){
        event.preventDefault();
      }
    },
    checkLog(event){
      if (document.getElementById('mail').value == '') {
        alert("請填寫[信箱]");
        event.preventDefault();
      }else if (document.getElementById('password').value == '') {
        alert("請填寫[密碼]");
        event.preventDefault();
      }else if(this.passwordError == true || this.mailError == true){
        event.preventDefault();
      }
    },
  },
})
var vm = new Vue({
  el:'#app3',
  data:{
    name: '',
    usernameError: false,
    userErrMsg: '',
    password: '',
    passwordError: false,
    passErrMsg: '',
    mail: '',
    mailError: false,
    mailErrMsg: ''
  },
  watch:{
    name(){
      let isName = /^[a-zA-Z\u4e00-\u9fa5]{0,}$/;
      if(!isName.test(this.name)){
        this.usernameError = true;
        this.userErrMsg = '勿含特殊字元及數字';
      }else{
        this.usernameError = false;
        this.userErrMsg = '';
      }
    },
    mail(){
      let isMail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if(this.mail == ''){
        this.mailError = false;
        this.mailErrMsg = '';
      }else if(!isMail.test(this.mail)){
        this.mailError = true;
        this.mailErrMsg = '請輸入正確格式';
      }else{
        this.mailError = false;
        this.mailErrMsg = '';
      }
    },
    password(){
      let isText = /^[a-z0-9]+$/;
      if(this.password == ''){
        this.passwordError = false;
        this.passErrMsg = '';
      }else if (!isText.test(this.password)) {
        this.passwordError = true;
        this.passErrMsg = '勿含特殊字元';
      }else if (this.password.length < 6) {
        this.passwordError = true;
        this.passErrMsg = '請勿少於6個字';
      }else if (this.password.length > 15) {
        this.passwordError = true;
        this.passErrMsg = '請勿超過15個字';
      }else {
        this.passwordError = false;
        this.passErrMsg = '';
      }
    },
  },
  methods: {
    checkSign(event){
      if (document.getElementById('name').value == '') {
        alert("請填寫[姓名]");
        event.preventDefault();
      }else if (document.getElementById('mail').value == '') {
        alert("請填寫[信箱]");
        event.preventDefault();
      }else if (document.getElementById('password').value == '') {
        alert("請填寫[密碼]");
        event.preventDefault();
      }else if(document.getElementsByClassName('input--agree')[0].checked == false){
        alert('請勾選會員守則');
        event.preventDefault();
      }else if(this.passwordError == true || this.usernameError == true || this.mailError == true){
        event.preventDefault();
      }
    },
    checkLog(event){
      if (document.getElementById('mail').value == '') {
        alert("請填寫[信箱]");
        event.preventDefault();
      }else if (document.getElementById('password').value == '') {
        alert("請填寫[密碼]");
        event.preventDefault();
      }else if(this.passwordError == true || this.mailError == true){
        event.preventDefault();
      }
    },
  },
})
