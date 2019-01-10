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
'use strict';

var favBtn = document.querySelector('.header__nav');
var favList = document.querySelector('.fav-hidden');
var galleryList = document.querySelector('.gallery');
var addFav = document.querySelector('.modal-favorite');
var imgContainer = document.querySelector('.first');
favBtn.addEventListener('click', appGallery);
addFav.addEventListener('click', addPic);

function appGallery(event) {
  favList.classList.remove('fav-hidden');
  galleryList.classList.add('hide');
}

;

function addPic() {
  localStorage.setItem('firstImg', getAttr);
  var fromLS = localStorage.getItem('firstImg');
  imgContainer.setAttribute('src', fromLS);
}

;
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
var favorites = document.querySelector('.favorites-gallery__img-list');
console.log(modalImg.src);
gallery.addEventListener('click', openModal);
modalSection.addEventListener('click', hidd);
modalClose.addEventListener('click', hidd);
modalNext.addEventListener('click', next);
favorites.addEventListener('click', openModal);
var getAttr;

function openModal(e) {
  var target = e.target;
  console.log(target);
  choosePicture(target);
  modalSection.classList.remove('modal-hidden');
  getAttr = target.getAttribute('src');
}

function hidd(e) {
  // console.log(e.target);
  if (this !== e.target) return;
  modalSection.classList.add('modal-hidden');
}

function choosePicture(target) {
  if (target.classList.contains('img-list__imgs')) {
    modalImg.src = target.firstElementChild.src;
  } else if (target.classList.contains('imgs__item')) {
    modalImg.src = target.src;
  }
}

function next() {
  var galleryArr = _toConsumableArray(gallery.children);

  console.log(galleryArr);
  console.log(modalImg.parentElement);

  for (var i = 0; i < galleryArr.length; i++) {
    console.log(i);
  }
}