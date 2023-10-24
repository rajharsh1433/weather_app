const apiKey = "fa987684cebf85688345e01ea882f313";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("searchbox");
const searchbtn = document.getElementById("sbtn");

async function checkWheather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }
      else{
      var data = await response.json();
      console.log(data);
      document.querySelector(".city-name").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";

      if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src = "clear.png"; 
      }
      else if(data.weather[0].main=="drizzle"){
        document.querySelector(".weather-icon").src = "drizzle.png";
      }
      else if(data.weather[0].main=="snow"){
        document.querySelector(".weather-icon").src = "snow.png";
      }
      else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src = "rain.png";
      }
      else if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src = "clouds.png";
      }
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
}

searchbtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
    
 
});


