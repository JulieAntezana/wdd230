//Spring Creek, Texas  4733624
//API key = 80f719b77880789a35971f1d4b25e585
const apiurl = "https://api.openweathermap.org/data/2.5/weather?id=4733624&units=imperial&APPID=80f719b77880789a35971f1d4b25e585";

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const temp = document.querySelector('#current-temp');
    const windspeed = document.querySelector('#windspeed');

    let ctemp = jsObject.main.temp;
    let wspeed = jsObject.wind.speed;




    temp.textContent = ctemp.toFixed(0);
    windspeed.textContent = wspeed.toFixed(0);


    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    //Used desc0 as temp API string

    const desc0 = jsObject.weather[0].description;

    //split the desc0 string into an array of strings

    //whenever a blank space is encountered

    const words = desc0.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    };

    //Join all the elements of the weather description array back into a string

    //using a blankspace as a separator

    //and name it “desc” for DOM placement

    const desc = words.join(" ");

    // const desc = jsObject.weather[0].description;
    //document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc; 
    //.textContent = speed; 
    if(ctemp <= 50 && wspeed > 3){
        let windchill = (35.74 + (0.6215 * ctemp))-(35.75 * Math.pow(wspeed,0.16)) + (0.4275*ctemp*Math.pow(wspeed,0.16));
        windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
        document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
    } else{
        document.querySelector("#windchill").innerHTML = "N/A"
    }

});




















// const temp = parseInt(document.querySelector("#temp").textContent);
// const speed = parseInt(document.querySelector("#speed").textContent);

// if(temp <= 50 && wind > 3){
//     let windchill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16));
//     windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
//     document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}`;
// } else{
//     document.querySelector("#windchill").innerHTML = "N/A"
// }
