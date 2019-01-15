'use strict'

const favBtn = document.querySelector('.header__nav');
const favList = document.querySelector('.fav-hidden');
const container = document.querySelector('.favorites-gallery__img-list');
const galleryList = document.querySelector('.gallery');
const addFav = document.querySelector('.modal-favorite');


favBtn.addEventListener('click', appGallery);
addFav.addEventListener('click', createElementGlobal);

function createElementGlobal() {
    const libox = document.createElement('li');
    const imgBox = document.createElement('img');
    const btnBox = document.createElement('button');
    
    libox.classList.add('img-list__imgs');
    imgBox.classList.add('imgs__item');
    btnBox.classList.add('imgs__remove');

    btnBox.textContent = 'x';

    container.append(libox);
    libox.append(imgBox);
    libox.append(btnBox);

    localStorage.setItem('firstImg', getAttr);
    const fromLS = localStorage.getItem('firstImg');
    imgBox.setAttribute('src', fromLS);
}

function appGallery(event) {
    favList.classList.remove('fav-hidden');
    galleryList.classList.add('hide');
};


const LOCALSTORAGE = (w => {
    if (!w) return;
    
    const isActive = "localStorage" in w;
    
    const get = key => {
      try {
        const serializedState = localStorage.getItem(key);
    
        return serializedState === null
          ? undefined
          : JSON.parse(serializedState);
      } catch (err) {
        console.error("Get state error: ", err);
      }
    };
    
    const set = (key, value) => {
      try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
      } catch (err) {
        console.error("Set state error: ", err);
      }
    };
    
    const publicAPI = {
      isActive,
      get,
      set ,
    };
    
    return publicAPI;
    })(window);

