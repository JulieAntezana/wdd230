// store resource URL in a const
const requestURL = "https://julieantezana.github.io/wdd230/Chamber/json/data.json";
const cards = document.querySelector(".cards");
const lists = document.querySelector(".lists");

// fetch data and return in json format
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    // validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const directoryList = jsonData["directory"];
        // display default view
        directoryList.forEach(displayList);
    });

const cardView = document.querySelector(".cardButton");
const listView = document.querySelector(".listButton");

// display listView     
listView.addEventListener("click", toggleList);
        
// display cardView
cardView.addEventListener("click", toggleCard);


function displayDir(directory) {
    // create elements to add to the document
    let card = document.createElement("section");
    card.className = "cardSection";
    let businessname = document.createElement("h2");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    // add the directory data to the HTML 
    businessname.textContent = directory.businessname;
    address.innerHTML = directory.address;
    phone.innerHTML = directory.phone;
    logo.setAttribute('src', directory.logourl);
    logo.setAttribute('alt', `${directory.businessname} logo`);
    logo.setAttribute('loading', 'lazy');
    website.setAttribute('class', 'link');
    website.innerHTML = "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
    card.appendChild(logo);
    card.appendChild(businessname);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cards.appendChild(card);
}

function displayList(directory) {
    let tr = document.createElement("tr");
    let website = document.createElement("p");
    tr.innerHTML = `<td>${directory.businessname} </td> <td>${directory.phone}</td> <td>${directory.address}</td> `;
    website.setAttribute('class', 'link');
    website.innerHTML = "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
    tr.appendChild(website);
    // append the list view
    lists.appendChild(tr);
}

function toggleCard() {
    document.getElementById("cardToggle").style.display = "grid";
    document.getElementById("listToggle").style.display = "none";
}

function toggleList() {
    document.getElementById("listToggle").style.display = "block";
    document.getElementById("cardToggle").style.display = "none";
}