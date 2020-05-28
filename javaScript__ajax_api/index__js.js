var catalog = document.querySelector('.menu__catalog a');
var menuUsers = document.querySelector('.menu__catalog_users');

catalog.addEventListener('click', (event) => {
  event.preventDefault();
  menuUsers.classList.toggle('displayActive');
});

function requests(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();
  return request;
}

let request = requests('https://json.medrating.org/users');

request.addEventListener('readystatechange', function () {
  if (request.readyState === 4 && request.status === 200) {
    var usersObject = JSON.parse(request.responseText);
    console.log('result', usersObject);
    for (var i = 0; i < usersObject.length; i++) {
      for (var key in usersObject[i]) {
        if (key == "name") {
          generateTemp(usersObject[i][key], menuUsers);
        } else {
          console.log('error');
        }
      }
    }
  } else {
    console.log('err', usersObject);
  }
});

let xhr = requests('https://json.medrating.org/albums?userId=3');

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var albumsObject = JSON.parse(xhr.responseText);
    console.log('result albums', albumsObject);
    for (var i = 0; i < albumsObject.length; i++) {
      for (var key in albumsObject[i]) {
        if (key == "title") {
          let menuAlbums = document.querySelectorAll('.menu__catalog_users .item');
          menuAlbums[i].insertAdjacentHTML('beforeend', `<ul class="menu__catalog_albums"><li class="item">${albumsObject[i][key]}</li></ul>`);
          console.log(menuAlbums.length);
        } else {
          console.log("key");
        }
      }
    }
  } else {
    console.log('err', albumsObject);
  }
});

function generateTemp(value, space) {
  let item =
    `<li class="item">
          <p class="text"><i class="fa fa-chevron-right" aria-hidden="true"></i>${value}</p>
    </li>`;
  space.innerHTML += item;
}












// var menuAlbums = [];
// var menuAlbums = document.querySelectorAll('.menu__catalog_users li');
// console.log(menuUsers);
// for (let i = 0; i < menuUsers.length; i++) {
//   console.log('Help! I need somebady!');
// }

// console.log(menuAlbums);
// for (let i = 0; i < menuUsers.length; i++) {
//   console.log('Thank GOD!');
// }




// for (let i = 0; i < 10; i++) {
//   console.log(generateTemp.length);
// }


// if (albumsObject[i] == 'title') {

// }



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://json.medrating.org/albums?userId=3');
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.send();


// for (var i = 0; i < 10; i++) {

//   xhr.addEventListener('readystatechange', function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var albumsObject = JSON.parse(xhr.responseText);
//       console.log('result', albumsObject);
//       let menuItem = albumsObject[title];
//       generateTemp(menuItem);
//     } else {
//       console.log('err', albumsObject);
//     }

//   });
// }




// for (i = 0; i < item.length; i++) {
//   item[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }


// const getList = async () => await fetch('https://json.medrating.org/users').then(response => response.json());
// let responsObj = new Object();
// let responsObj = JSON.parse(getList);
// console.log(responsObj);


// let value = JSON.parse(request.name.responseType);
// console.log(value);
// generateTemp(value);


// window.addEventListener('DOMContentLoaded', function () {
//   'use strict';


//   let url = 'https://json.medrating.org/users';
//   let promise = fetch(url);
//   promise.response.json()
//   // читаем ответ в формате JSON
//   alert(promise.name);


// });

// for (let li of menuBasic.querySelectorAll('li')) {
//   let span = document.createElement('span');
//   li.prepend(span);
//   span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
// }

// menuBasic.onclick = (e) => {
//   if (e.target.tagName != 'SPAN') {
//     return;
//   }

//   let childrenContainer = e.target.parentNode.querySelector('ul');
//   if (!childrenContainer) return; // нет детей

//   childrenContainer.hidden = !childrenContainer.hidden;
// }