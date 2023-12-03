var btnContact = document.querySelector('.nd-btn-contact');

btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.nd-contact-info');
    boxContact.classList.toggle('nd-is-open');
    this.classList.toggle('nd-change-icon');
})