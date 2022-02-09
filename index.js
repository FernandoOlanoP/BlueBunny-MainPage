document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          document.querySelector('.main-navbar').classList.add('fixed-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.querySelector('.main-navbar').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 