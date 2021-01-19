console.log('e11ty Connected');

let lightMode = localStorage.getItem('lightMode');
const body = document.querySelector('body');
const sidebar = document.querySelector('#sidebar');
const darkIcon = document.querySelector('.dm-icon');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');

menuIcon.addEventListener('click', function () {
  console.log('clicked');
  sidebar.classList.toggle('menu-open');
});

const lightModeEnabled = () => {
  body.classList.add('light-mode');
  localStorage.setItem('lightMode', 'enabled');
};

const lightModeDisabled = () => {
  body.classList.remove('light-mode');
  localStorage.setItem('lightMode', null);
};

if (lightMode === 'enabled') {
  lightModeEnabled();
}

darkIcon.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');

  if (lightMode !== 'enabled') {
    lightModeEnabled();
  } else {
    lightModeDisabled();
  }
});
