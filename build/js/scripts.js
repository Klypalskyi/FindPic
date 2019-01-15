"use strict";

// 'use strict'
var apiKey = '563492ad6f91700001000001efe4554ec5924beab8b1c433b156ab30';
var findQuery = document.querySelector('.form__input');
var findBtn = document.querySelector('.form__button');
var gallery = document.querySelector('.gallery__wrapper');
var btnHidd = document.querySelector('.btn-hidden');
btnHidd.addEventListener('click', appendGallery);

function loadImages(image) {
  page = page + 1;
  var apiUrl = "https://api.pexels.com/v1/search?query=".concat(image, "&per_page=18&page=").concat(page);
  var headers = {
    Authorization: apiKey
  };
  return fetch(apiUrl, {
    headers: headers
  }).then(function (response) {
    if (response.ok) return response.json();
    throw new Error('error' + response.statusText);
  }).then(function (data) {
    return data.photos;
  }).catch(function (err) {
    return console.log(err);
  });
}

;

function appendGallery(event) {
  event.preventDefault();

  var updatePage = function updatePage(photos) {
    var append = imageMaker(photos);
    gallery.innerHTML += append;
  };

  loadImages(findQuery.value).then(updatePage);
}

;

function imageMaker(img) {
  var markup = img.reduce(function (markup, item) {
    return markup + "<div class=\"img-list__imgs\"> <img src=".concat(item.src.large, " \n    alt=").concat(item.photographer, " class=\"imgs__item\"> </div>");
  }, '');
  return markup;
}
'use strict';

var apiKey = '563492ad6f91700001000001efe4554ec5924beab8b1c433b156ab30';
var findQuery = document.querySelector('.form__input');
var findBtn = document.querySelector('.form__button');
var gallery = document.querySelector('.gallery__wrapper');
var btnHidd = document.querySelector('.btn-hidden');
var page = 1;
findBtn.addEventListener('click', goApi);

function goApi(e) {
  e.preventDefault();

  var updatePage = function updatePage(photos) {
    // console.log(photos);
    var markup = createImages(photos);
    gallery.innerHTML = markup;
    btnHidd.classList.remove('btn-hidden');
  };

  fetchImages(findQuery.value).then(updatePage);
}

;

function fetchImages(query) {
  var apiUrl = "https://api.pexels.com/v1/search?query=".concat(query, "&per_page=18&page=").concat(page);
  var headers = {
    Authorization: apiKey // console.log(apiUrl);

  };
  return fetch(apiUrl, {
    headers: headers
  }).then(function (response) {
    if (response.ok) return response.json();
    throw new Error('error' + response.statusText);
  }).then(function (data) {
    return data.photos;
  }).catch(function (err) {
    return console.log(err);
  });
}

;

function createImages(imgs) {
  var markup = imgs.reduce(function (markup, item) {
    return markup + " <div class=\"img-list__imgs\"> <img src=".concat(item.src.large, " alt=").concat(item.photographer, " class=\"imgs__item\"> </div>");
  }, ''); // console.log(markup);

  return markup;
} // .then(data => console.log(data))
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var modalSection = document.querySelector('.js-modal-backdrop');
var modalClose = document.querySelector('.modal-close');
var modalPrev = document.querySelector('.modal-prev');
var modalNext = document.querySelector('.modal-next');
var modalImg = document.querySelector('.modal-img');
var modalFav = document.querySelector('.modal-favorite');
var galleryArr;
var index;
var favorite = false;
console.log(modalImg.src);
gallery.addEventListener('click', openModal);
modalSection.addEventListener('click', hidd);
modalClose.addEventListener('click', hidd);
modalFav.addEventListener('click', addToFavorite);
modalFav.addEventListener('click', removeFavorite);

function openModal(e) {
  // let index;
  var target = e.target;
  console.log(target);
  choosePicture(target);
  modalNext.addEventListener('click', next);
  modalPrev.addEventListener('click', prev);
}

function hidd(e) {
  // console.log(e.target);
  if (this !== e.target) return;
  modalSection.classList.add('modal-hidden');
}

function choosePicture(target) {
  // let index
  galleryArr = _toConsumableArray(gallery.children);

  if (target.classList.contains('img-list__imgs')) {
    modalSection.classList.remove('modal-hidden');
    modalImg.src = target.firstElementChild.src;
    index = target;
    return galleryArr, index;
  } else if (target.classList.contains('imgs__item')) {
    modalSection.classList.remove('modal-hidden');
    modalImg.src = target.src;
    index = target.parentElement;
    return galleryArr, index;
  }
}

function next() {
  var nextItem = index.nextElementSibling.firstElementChild;
  index = index.nextElementSibling;
  modalImg.src = nextItem.src;
}

function prev() {
  var prevItem = index.previousElementSibling.firstElementChild;
  index = index.previousElementSibling;
  modalImg.src = prevItem.src;
}

function addToFavorite(e) {
  var target = e.target;
  favorite = true;
  target.style.color = 'rgb(255, 240, 108)';
} // function removeFavorite (e) {
//     const target = e.target;
//     if(favorite) {
//         favorite = false;
//         target.style.color = 'rgb(255, 255, 255)';
//     }
// }