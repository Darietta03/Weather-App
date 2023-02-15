let city = document.querySelector('.searchField');
let btn = document.querySelector('.searchBtn');
let modal = document.querySelector('.modal');
let search =document.querySelector('.search');
let close = document.querySelector('.closeBtn');
let container = document.querySelector('.container');
let weather = document.querySelector('.weather');



btn.addEventListener('click', () => {
 if(city.value.length === 0) {
    modal.style.display = 'block';
    search.style.display = 'none';

 } else {
    container.style.height = '600px';
    weather.style.display = 'flex';


 }
})

close.addEventListener('click', () => {
    search.style.display = 'block';
    modal.style.display = 'none';
})