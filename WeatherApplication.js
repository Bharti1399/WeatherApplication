let search_city_name = document.getElementById("search_bar");
let location_details_container = document.getElementById("location_details_container");
let city_name = document.getElementById("city_name");
let weather_informations_container = document.getElementById("weather_informations_container");
let humidity_windspeed_container = document.getElementById("humidity_windspeed_container");
let weather_image = document.getElementById("weather_image");
let weatherIconID;      

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
    weatherIconID=weatherReport.weather[0].id;
    if(weatherIconID>=200 && weatherIconID<=232){
        weather_image.src=`assets/images/ThunderstromIcon.png`;
    }
    else if(weatherIconID>=300 && weatherIconID<=321){
        weather_image.src=`assets/images/DrizzleIcon.png`;
    }
    else if(weatherIconID>=500 && weatherIconID<=531){
        weather_image.src=`assets/images/RainIcon.png`;
    }
    else if(weatherIconID>=600 && weatherIconID<=622){
        weather_image.src=`assets/images/SnowIcon.png`;
    }
    else if(weatherIconID>=701 && weatherIconID<=781){
        weather_image.src=`assets/images/AtmosphereIcon.png`;
    }
    else if(weatherIconID==800){
        weather_image.src=`assets/images/ClearSkyIcon.png`;
    }
    else if(weatherIconID>=801 && weatherIconID<=804){
        weather_imaged.src=`assets/images/CloudsIcon.png`;
    }
    cityInputBox.value="";
})