const apikey = "e8065ad41ffea2b4ff635ce4c51bcde9";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(url + city + "&appid=" + apikey);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "image/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "image/rain.png";
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = "image/clear.png";
    }else if(data.weather[0].main == "Mist"){

        weathericon.src = "image/mist.png";
    }
    else if (data.weather[0].main == "Haze") {
        weathericon.src = "image/haze.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "image/snow.png";
    }
}
searchbtn.addEventListener("click", function(){
    checkweather(search.value);
});