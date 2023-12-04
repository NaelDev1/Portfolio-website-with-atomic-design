var btnContact = document.querySelector('.nd-btn-contact');

window.addEventListener('load', function(){
      var pagePreloader = document.querySelector('.nd-preloader');
      
      setTimeout(function(){
        pagePreloader.classList.add('nd-fade-out');
    },2500);
    setTimeout(function(){
        pagePreloader.style.display = 'none';
  },2700);
});


btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.nd-contact-info');
    boxContact.classList.toggle('nd-is-open');
    this.classList.toggle('nd-change-icon');
}); 