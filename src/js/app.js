console.log('e11ty Connected');

const menuIcon = document.querySelector('#menuIcon');
const sidebar = document.querySelector('#sidebar');
const closeMenu = document.querySelector('#closeMenu');

menuIcon.addEventListener('click', function () {
  sidebar.style.left = '0rem';
});

closeMenu.addEventListener('click', function () {
  sidebar.style.left = '-1000rem';
});
