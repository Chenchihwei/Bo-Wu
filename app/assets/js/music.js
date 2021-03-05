var vm = new Vue({
  el: '#app',
  data: {
    Music:'Music off',
  },
  methods: {
    open(){
      let audio = document.getElementById('music1');
      let bar = document.querySelectorAll(".bar");
      if (audio.paused) {
        audio.play();
        this.Music = 'Music on';
        bar.forEach((item) => {
          item.classList.remove('hide');
        });
      } else {
        audio.pause();
        this.Music = 'Music off';
        bar.forEach((item) => {
          item.classList.add('hide');
        });
      }
    },
  },
});  