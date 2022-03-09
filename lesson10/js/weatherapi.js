//FairBanks Alaska ID 5861897
//API key = 80f719b77880789a35971f1d4b25e585
const apiurl = "https://api.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&APPID=80f719b77880789a35971f1d4b25e585";

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // get the current temperature
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc; 
});
