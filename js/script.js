document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.button').classList.toggle('dark');
  document.querySelector('.site-header').classList.toggle('dark');
  document.querySelector('.site-footer').classList.toggle('dark');
});

document.querySelector('.burger-menu').addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  document.querySelector('.theme-toggle').classList.toggle('display');
  document.querySelector('.burger-menu').classList.toggle('display');
  document.querySelector('.mobile-nav').classList.toggle('display');
});