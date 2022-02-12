function toggleMenu() {
  var para = document.getElementById("hamButton");
  para.classList.toggle("rotate-icon");
  document.getElementById("navBar").classList.toggle("open");
  document.getElementById("hamButton").classList.toggle("open");
}
