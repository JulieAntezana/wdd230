// store resource URL in a const
// const requestURL = 'https://julieantezana.github.io/wdd230/Chamber/json/data.json';
const requestURL = "data.json"
const cards = document.querySelector('div.cards');
// const lists = document.querySelector('.lists');
const listButton = document.querySelector('#list-btn');
const cardButton = document.querySelector('#card-btn');


// fetch data and return in json format
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

// validate data received
    .then(function (jsonObject) {
        // console.table(jsonData);
        const directory = jsonObject['directory'];
        // display default view
        directory.forEach(displayDir);
    });

fetch(requestURL)
  .then(function (response) {
  return response.json();
})
  .then(function (jsonObject) {
  const businesses = jsonObject['businesses'];
// console.table(jsonObject);
  businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = business.imgfile;
  image.setAttribute('alt', business.name);
  card.appendChild(image);

  //h2 name
  let h3 = document.createElement('h3');
  h3.textContent = business.name;
  card.appendChild(h3);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = business.phone;
  card.appendChild(p2);

  //p website
  let p3 = document.createElement('p');
  p3.textContent = business.website;
  card.appendChild(p3);

  cards.appendChild(card);

}

// function displayDir(directory) {

//     // create elements to add to the document
//     let card = document.createElement('section');
//     card.className = 'cardSection';
//     let businessname = document.createElement('h2');
//     let logo = document.createElement('img');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let website = document.createElement('p');

// // add the directory data to the HTML 
//     businessname.textContent = directory.businessname;
//     address.innerHTML = directory.address;
//     phone.innerHTML = directory.phone;
//     website.innerHTML = '<a href=" + `${directory.website}` + ">' + `${directory.website}`;
//     logo.setAttribute('src', directory.logourl);
//     logo.setAttribute('alt', `${directory.businessname} logo`);
//     logo.setAttribute('loading', 'lazy');
//     website.setAttribute('class','link'); 
    
//     card.appendChild(logo);
//     card.appendChild(businessname);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);
//     cards.appendChild(card);
// }

// function displayList(directory) {
//     let tr = document.createElement('tr');
//     let website = document.createElement('p');
//     tr.innerHTML = `<td>${directory.businessname} </td> <td>${directory.phone}</td> <td>${directory.address}</td> `;
//     website.setAttribute('class','link'); 
//     website.innerHTML = '<a href=' + `${directory.website}` + '>' + `${directory.website}`;
//     tr.appendChild(website);
//     // append the list view
//     lists.appendChild(tr);  
// }

listButton.addEventListener("click", ()=> {
  cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
  cards.classList.replace("list-view", "card-view")
});

// classList.forEach(displayDir);
// classList.forEach(displayList);
// const button = document.querySelectorAll('.tab-button');
// const about = document.querySelector('.about');
// const articles = document.querySelectorAll('.content');

// about.addEventListener('click', function(e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // when a button is clicked, remove active status from all buttons
//     button.forEach(function (button) {
//       button.classList.remove('active');
//       // add active status only to the button which has been clicked.
//       e.target.classList.add('active');
//     });
//     // hide all articles when button is clicked
//     articles.forEach(function(article) {
//       article.classList.remove('active');  
//     })
//     // when a button is clicked, the article with the corresponding
//     // id will become visible
//     const element = document.getElementById(id);
//     element.classList.add('active');
//   }
// });

// {/* <section class="dirBox">
// <article>
// <h1 id="discover">Spring Creek Business Directory</h1>
// </article>
// <article>
// <div class="button-container">
//   <button class="tab-button active" data-id="cardButton"> &#10998;&#10998;&#10998; </button>
//   <button class="tab-button" data-id="listButton"> &#10998;&#9776;</button>
// </div>
// </article>
// <article>
// <div class="cards" class="content" id="cardButton"></div>
// <div class="lists" class="content" id="listButton">
//   <div class="lists" class="content"></div>
// </div>
// </article>
// </section> */}

          // <section class="directory">
          //   <div class="list-view-btn">
          //     <button id="list-btn"> <img src="images/list-view.svg" alt="list view button" width="50"></button>
          //     <button id="card-btn"> <img src="images/card-view.svg" alt="list view button" width="50"></button>
          //   </div>
          //   <div class="cards list-view">


          //   </div>
          // </section>