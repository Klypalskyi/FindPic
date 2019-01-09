'use strict';

var apiKey = '563492ad6f91700001000001efe4554ec5924beab8b1c433b156ab30';
var findQuery = document.querySelector('.form__input');
var findBtn = document.querySelector('.form__button');
var gallery = document.querySelector('.gallery__wrapper');
var btnHidd = document.querySelector('.btn-hidden');
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
  var apiUrl = "https://api.pexels.com/v1/search?query=".concat(query, "&per_page=18");
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

gallery.addEventListener('click', openModal);

function openModal(e) {
  var target = e.target;
  console.log(target);
}