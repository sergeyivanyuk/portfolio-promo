const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>  {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () =>  {
    menu.classList.remove('active');
});

const value = document.querySelectorAll('.progress__item-value'),
      total = document.querySelectorAll('.progress__item-total div');

value.forEach((item, i) => {
    total[i].style.width = item.innerHTML;
});