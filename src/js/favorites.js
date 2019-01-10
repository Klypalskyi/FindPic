'use strict'

const favBtn = document.querySelector('.header__nav');
const favList = document.querySelector('.fav-hidden');
const galleryList = document.querySelector('.gallery');
const addFav = document.querySelector('.modal-favorite');
const imgContainer = document.querySelector('.imgs__item');

favBtn.addEventListener('click', appGallery);
addFav.addEventListener('click', addPic);

function appGallery(event) {
    favList.classList.remove('fav-hidden');
    galleryList.classList.add('hide');
};

function addPic() {
    localStorage.setItem('firstImg', getAttr);
    const fromLS = localStorage.getItem('firstImg');
    imgContainer.setAttribute('src', fromLS);
};

