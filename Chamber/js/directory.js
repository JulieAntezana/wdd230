const cardList = document.querySelector(".card-list");
// const requestURL = "https://julieantezana.github.io/wdd230/Chamber/json/data.json";
const directoryURL = "json/data.json";
const medium = window.matchMedia("(min-width:545px) and (max-width: 1079px)");

let width = window.innerWidth;

function make_cards(business) {
    //Create cards from each item of the fetched list
  return `<div class="card">
            <img src = ${business.logourl} alt = ${business.businessname} loading="lazy">
            <name>${business.businessname}</name>
            <p>${business.address} </p>
            <p>${business.phone}</p>
            <a href="${business.website}" target="_blank">${business.website}</a>
        </div>`;
}

function make_list(business) {
    //Create list items from each item of the fetched list

  return `
    <tr>
    <td>${business.businessname}</td>
    <td>${business.address}</td>
    <td>${business.phone}</td>
    <td><a href="${business.website}" target="_blank">${business.website}</a></td>
    </tr>`;
}

class setDefView {
    // initialzes with a def view then the method setView checks to set a default view on resize but prevent the chrome mobile
    // scroll resize from triggering the resize event

    const(medium, list){
        this.list = list;

        if (medium.matches) {
            // If media query matches
          listView(this.list);
        } else {
          gridView(this.list);
        }
    }

    setView(medium) {
        //checks the viewport and set the default view either grid or list
        if(window.innerWidth != width){
            if (medium.matches) {
                // If media query matches
                listView(this.list);
            } else {
                gridView(this.list);
            }
        }
    }
}

// Fetch the JSON data for the directory
fetch(directoryURL)
  .then((response) => {
    return response.ok ? response.json() : console.log("error");
  })
  .then((data) => {
    console.table(data);
    let business = data["business"];


    //A calls the funtion that sets the default view for medium screen as list and leaves the others as cards
    const defView = new setDefView(medium, business);
    defView.setView(medium);
    window.addEventListener("resize", () => defView.setView(medium));

    //event listener for button click
    document
      .querySelector("#grid-view")
      .addEventListener("click", () => gridView(business));
    document
      .querySelector("#list-view")
      .addEventListener("click", () => listView(business));
});

function gridView(business) {
// change button color to currently active
  let gridBtn = document.querySelector("#grid-view");
  let listBtn = document.querySelector("#list-view");

  gridBtn.style.backgroundColor = "#F7F7F7";
  listBtn.style.backgroundColor = "#6EB43F";

  //sends the grid view to the html page
  cardList.innerHTML = "";
  const card = business.map(make_cards);
  const cards = document.createElement("section");
  cards.innerHTML = card.join(" ");
  cards.className = "cards";
  cardList.appendChild(cards);
}

function listView(business) {

    // change button color to currently active
  let gridBtn = document.querySelector("#grid-view");
  let listBtn = document.querySelector("#list-view");

  gridBtn.style.backgroundColor = "#6EB43F";
  listBtn.style.backgroundColor = "#F7F7F7";
    //sends the list view to the html page

  cardList.innerHTML = "";

  const list = business.map(make_list);
  const items = document.createElement("table");
  items.innerHTML = list.join(" ");
  items.className = "list";
  cardList.appendChild(items);
}

