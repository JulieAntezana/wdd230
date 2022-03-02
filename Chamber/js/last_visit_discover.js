const lastTime = Date.now();
let currentTime = Date.now();

let storageTime = localStorage.getItem("visited-last");

let timeBetween = currentTime - storageTime

localStorage.setItem("visited-last", lastTime);



const Factor = 1000 * 60 * 60 * 24;

const daysBetween = Math.round(Number(timeBetween / Factor));

if (daysBetween === 0) {
    document.getElementById('days').textContent = "Today is your first visit!";
}
else {
    document.getElementById('days').textContent = `It's been ${daysBetween} days since you last visited.`;
}