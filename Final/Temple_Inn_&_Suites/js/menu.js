constmenuBtn=document.getElementById("ham");
constul=document.querySelector("#menu");

menuBtn.addEventListener("click",()=>{
  constdropDown=document.querySelector(".primary");

  if(!dropDown.classList.contains("open")){
    dropDown.classList.add("open");
    menuBtn.textContent="X";
    setTimeout(function(){
      ul.classList.remove("visuallyhidden");
    },20);
  }else{
    menuBtn.innerHTML="&#9776;";
    ul.classList.add("visuallyhidden");
    ul.addEventListener(
      "transitionend",
      function(e){
        dropDown.classList.remove("open");
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
  }
});

// set active

function active() {
  switch(document.title){
    case"Come & Stay":
      document.querySelector("#home").classList.add("active");
      break;

    case"Make A Reservation":
      document.querySelector("#reservation").classList.add("active");
      break;

    case"Our Services":
      document.querySelector("#services").classList.add("active");
      break;

    case"View Temples":
      document.querySelector("#temples").classList.add("active");
      break;
  }
}

active();
