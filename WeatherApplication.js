let search_city_name = document.getElementById("search_bar");
let location_details_container = document.getElementById("location_details_container");
let city_name = document.getElementById("city_name");
let weather_informations_container = document.getElementById("weather_informations_container");
let humidity_windspeed_container = document.getElementById("humidity_windspeed_container");


document.getElementById("magnifying_glass_icon_container").addEventListener("click",async ()=>{
    let rawWeatherReport = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_city_name.value}&appid=6c630bdf2ef49df33a8e6538663001b0`);
    let weatherReport = await rawWeatherReport.json();
    console.log(weatherReport);
    location_details_container.style.display="flex";
    weather_informations_container.style.display = "flex";
    humidity_windspeed_container.style.display="flex";
    city_name.textContent=weatherReport.name;
    document.getElementById("climate_condition").textContent=`${weatherReport.weather[0].description}`;
    document.getElementById("degree_celsius").textContent=`${Math.trunc(weatherReport.main.temp-273.15)}`;
    document.getElementById("humidity_quantity").textContent=`${weatherReport.main.humidity}`;
    document.getElementById("windspeed_quantity").textContent=`${weatherReport.wind.speed}m/s`;
})