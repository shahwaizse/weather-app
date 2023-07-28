const api_key = ""; //enter your api key here
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const desc = document.getElementById('desc');

let getWeather = function() {
    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                console.log(data.weather[0].description);
                icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                temp.textContent = `It's ${Math.floor(data.main.temp)} C`;
                feels_like.textContent = `Feels like ${Math.floor(data.main.feels_like)} C`;
                desc.textContent = `${data.weather[0].description}`;
            });
        });
    } else {
        alert("your browser does not support geolocation.");
    }
}

getWeather();

//TODO
//convert the promise code to async/await.