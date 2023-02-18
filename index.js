let city = document.querySelector('.searchField');
let btn = document.querySelector('.searchBtn');
let modal = document.querySelector('.modal');
let search =document.querySelector('.search');
let close = document.querySelector('.closeBtn');
let container = document.querySelector('.container');
let weather = document.querySelector('.weather');
let chosenTown = document.querySelector('.chosen-city');
let currentInd = document.querySelector('.current_indicators');
let err404 = document.querySelector('.not-found');
let close404 = document.querySelector('.close-404')



btn.addEventListener('click', () => {
    const town = city.value;
 if(town === "") {
    modal.style.display = 'block';
    search.style.display = 'none';

 } else {
    


    const APIKey = "e7f10e7dd8bcdd8f7846a47464174d9b";
    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${APIKey}&units=metric`
    )
    .then((response) => response.json())
    .then((json) => {
        if(json.cod === '404') {


            //container.style.height = '300px';
            err404.style.display = 'flex';
            console.log('jopa')
        } else {
            container.style.height = '600px';
            weather.style.display = 'flex';
        }
    })




   
    

    chosenTown.textContent = town;




 }

 city.value = "";
})

close.addEventListener('click', () => {
    search.style.display = 'block';
    modal.style.display = 'none';
})

close404.addEventListener('click', () => {
    err404.style.display = 'none';
   // container.style.height = '100px';
})