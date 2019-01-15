const modalSection = document.querySelector('.js-modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');
const modalImg = document.querySelector('.modal-img');

const modalFav = document.querySelector('.modal-favorite')

let galleryArr;
let index;
let favorite = false;


const favorites = document.querySelector('.favorites-gallery__img-list'); 

console.log(modalImg.src);


gallery.addEventListener('click', openModal);
modalSection.addEventListener('click', hidd);
modalClose.addEventListener('click', hidd);
modalFav.addEventListener('click', addToFavorite);
modalFav.addEventListener('click', removeFavorite)


modalNext.addEventListener('click', next);
// favorites.addEventListener('click', openModal);
let getAttr;

function openModal(e) {
    // let index;
    const target = e.target;
    console.log(target);
    choosePicture(target);
    modalNext.addEventListener('click', next);
    modalPrev.addEventListener('click', prev);
    choosePicture(target)
    modalSection.classList.remove('modal-hidden');
    getAttr = target.getAttribute('src');
}

function hidd (e) {
    // console.log(e.target);
    if (this !== e.target) return;
    modalSection.classList.add('modal-hidden')
}

function choosePicture(target) {
    // let index
    galleryArr = [...gallery.children];
    if (target.classList.contains('img-list__imgs')) {
        modalSection.classList.remove('modal-hidden');
        modalImg.src = target.firstElementChild.src
        index = target;
        return galleryArr, index
    } else if (target.classList.contains('imgs__item')) {
        modalSection.classList.remove('modal-hidden');
        modalImg.src = target.src
        index = target.parentElement;
        return galleryArr, index
    } 
}

function next() {
    let nextItem = index.nextElementSibling.firstElementChild;
    index = index.nextElementSibling;
    modalImg.src = nextItem.src
}

function prev() {
    let prevItem = index.previousElementSibling.firstElementChild;
    index = index.previousElementSibling;
    modalImg.src = prevItem.src
}

function addToFavorite (e) {
    const target = e.target;
    favorite = true;
    target.style.color = 'rgb(255, 240, 108)';
}

// function removeFavorite (e) {
//     const target = e.target;
//     if(favorite) {
//         favorite = false;
//         target.style.color = 'rgb(255, 255, 255)';
//     }
// }