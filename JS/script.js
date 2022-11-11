const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
   nav.classList.toggle('menu__open');
});

// const nav = document.querySelector('.nav');
// nav.addEventListener('click',(event) => {
// nav.classList.toggle('open');
// });