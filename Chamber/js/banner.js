const banner = document.getElementById("banner");
let today = new Date();
day = today.getDay();

const showBanner = () => {
    banner.style.display = "block";
};

if (day == 1) {
    showBanner();
} 
else if (day == 2); {
    showBanner();
}
