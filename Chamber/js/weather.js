const temp = parseInt(document.querySelector("#temp").textContent);
const speed = parseInt(document.querySelector("#speed").textContent);



if(temp <= 50 && speed > 3){
    let windchill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16));
    windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}`;
} else{
    document.querySelector("#windchill").innerHTML = "N/A"
}