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
let defunctCity = document.querySelector('.defunct-city-btn');




btn.addEventListener('click', () => {
    const town = city.value;
    console.log(town);
 if(town === "") {

    modal.style.opacity = '1';
    modal.style.scale = '1';

 } else {
    
    const APIKey = "e7f10e7dd8bcdd8f7846a47464174d9b";
    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${APIKey}&units=metric`
    )
    .then((response) => response.json())
    .then((json) => {
        if(json.cod === '404') {
            err404.style.opacity = '1';
            err404.style.scale = '1';
            return;
        } 
        
        else {
            console.log(json);
           
            container.classList.add("big");
            weather.style.opacity = '1';
            weather.style.scale = '1';
            weather.style.display = 'flex';
            chosenTown.innerHTML = town;

            const image = document.querySelector('.current_weather img');
            const temperature = document.querySelector('.temperature');
            const description = document.querySelector('.description');

            const humidity = document.querySelector('.humidity-param span');
            const wind = document.querySelector('.wind-param span');
            const pressure = document.querySelector('.pressure-param span');
            const visibility = document.querySelector('.visibility-param span');

            switch(json.weather[0].main) {
                case "Clear":
                    image.src = "./icons/images/clear.png";
                    break;
                case "Clouds":
                    image.src = "./icons/images/cloud.png";
                    break;
                case "Haze":
                    image.src = "./icons/images/haze.png";
                    break;
                case "Mist":
                    image.src = "./icons/images/mist.png";
                    break;
                case "Rain":
                    image.src = "./icons/images/rain.png";
                    break;
                case "Smoke":
                    image.src = "./icons/images/smoke.png";
                    break;
                case "Snow":
                    image.src = "./icons/images/snow.png";
                    break;
                default:
                    image.src = "";
            }

            temperature.innerHTML = `${parseInt(json.main.temp)} <span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;

            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
            pressure.innerHTML = `${json.main.pressure}mb`;
            visibility.innerHTML = `${parseInt(json.visibility/1000)}km`;
            return;
        }
    })
 }

 city.value = "";
})

err404.addEventListener('click', () => {
    err404.style.opacity = '0';
    err404.style.scale = '0';

})

defunctCity.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.scale = '0';

})