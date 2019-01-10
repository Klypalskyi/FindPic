'use strict'

const favBtn = document.querySelector('.header__nav');
const favList = document.querySelector('.fav-hidden');
const galleryList = document.querySelector('.gallery');

favBtn.addEventListener('click', appGallery)

function appGallery(event) {
    favList.classList.remove('fav-hidden');
    galleryList.classList.add('hide');
};


