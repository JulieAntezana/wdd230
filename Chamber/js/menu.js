function toggleMenu() {
    document.getElementById("navBar").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}
const bar = document.getElementById("hamButton");
bar.onclick = toggleMenu
