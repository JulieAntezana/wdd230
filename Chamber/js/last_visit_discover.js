// Count number of visits or display message for first time visitors.
const numDisplay = document.querySelector(".numVisits");
const daysDisplay = document.querySelector(".dayVisits");
const daysDisplay2 = document.querySelector(".dayVisits2");

let numStorage = Number(window.localStorage.getItem("visitLS"));

if (numStorage !== 0) {
    numDisplay.textContent = `You have visited this page ${numStorage + 1} times.`;
    
} else {
    numDisplay.textContent = `Welcome, this is your first visit`;
}

numStorage++;
// store number of visits in localStorage
localStorage.setItem("visitLS", numStorage);
// time difference calculation
if (numStorage == 1) {
    let initTimestamp = new Date();
    localStorage.setItem("visitTS", initTimestamp);
    
} else if (numStorage > 1) {
    let curTimeStamp = new Date(); // timestamp for current visit
    const timeStore = new Date(localStorage.getItem("visitTS")); // timestamp of first visit from localstorage.
    let diffTime = parseInt(curTimeStamp.getTime() - timeStore.getTime()); // difference between visits in time
    let diffDays = parseInt(diffTime / (1000 * 3600 * 24)); // difference between visits in days
    if (diffDays < 1) {
        // create display for number of seconds since last visit information
        daysDisplay.innerHTML = `<br /> Welcome back. <br>It's been ${Math.round(diffTime / (1000 * 24 * 60))} minutes since your last visit.`;

    } else {
        // creat display for number of days since last visit information.
        daysDisplay.innerHTML = `<br /> Welcome back. <br>It's been ${Math.round(diffDays)} days since you last visited.`;        
    }
}




// const lastTime = Date.now();
// let currentTime = Date.now();

// let storageTime = localStorage.getItem("visited-last");

// let timeBetween = currentTime - storageTime

// localStorage.setItem("visited-last", lastTime);

// const Factor = 1000 * 60 * 60 * 24;

// const daysBetween = Math.round(Number(timeBetween / Factor));

// if (daysBetween === 0) {
//     document.getElementById('days').textContent = "Today is your first visit!";
// }
// else {
//     document.getElementById('days').textContent = `It's been ${daysBetween} days since you last visited.`;
// }