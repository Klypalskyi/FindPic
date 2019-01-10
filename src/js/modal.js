const modalSection = document.querySelector('.js-modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');
const modalImg = document.querySelector('.modal-img');
const favorites = document.querySelector('.favorites-gallery__img-list'); 
console.log(modalImg.src);


gallery.addEventListener('click', openModal);
modalSection.addEventListener('click', hidd);
modalClose.addEventListener('click', hidd);
modalNext.addEventListener('click', next);
favorites.addEventListener('click', openModal);

function openModal(e) {
    const target = e.target;
    console.log(target);
    choosePicture(target)
    modalSection.classList.remove('modal-hidden');
}

function hidd (e) {
    // console.log(e.target);
    if (this !== e.target) return;
    modalSection.classList.add('modal-hidden')
}

function choosePicture(target) {
    if (target.classList.contains('img-list__imgs')) {
        modalImg.src = target.firstElementChild.src
    } else if (target.classList.contains('imgs__item')) {
        modalImg.src = target.src
    }
}

function next() {
    let galleryArr = [...gallery.children];
    console.log(galleryArr);
    console.log(modalImg.parentElement);
    for (let i=0; i < galleryArr.length; i++) {
        console.log(i);
    }
}