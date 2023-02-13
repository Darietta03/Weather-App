let city = document.querySelector('.searchField');
let btn = document.querySelector('.searchBtn');
let modal = document.querySelector('.modal');
let search =document.querySelector('.search');
let close = document.querySelector('.closeBtn');




btn.addEventListener('click', () => {
 if(city.value === 0) {








 } else {
    modal.style.display = 'block';
    search.style.display = 'none';

 }
})

close.addEventListener('click', () => {
    search.style.display = 'block';
    modal.style.display = 'none';
})