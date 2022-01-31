function toggleMenu () {
	document.getElementById("navBar").classList.toggle("open");
	document.getElementById("hamButton").classList.toggle("open");
}
const x = document.getElementById("hamButton");
x.onclick = toggleMenu