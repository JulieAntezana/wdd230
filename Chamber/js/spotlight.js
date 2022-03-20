const directoryURL = "./json/data.json";

const list_maker = (number) => {
  //A function that creates and returnsa list that contains 3 random numbers

  let numList = [];

  while (numList.length < 3) {
    num = Math.trunc(Math.random() * number);
    !numList.includes(num) && numList.push(num);
  }

  return numList;
};

function make_spotlights(businesses) {
  //A function that creates and returns 3 business items

  let goldSIlverBusinesses = [];

  for (let i = 0; i < businesses.length; i++) {
    const bizItem = businesses[i];
    bizItem["membership"] === "gold" || bizItem["membership"] === "silver" ?
      goldSIlverBusinesses.push(bizItem) :
      {};
  }

  // pick a gold or silver member at random
  bizList = list_maker(goldSIlverBusinesses.length);

  const bizOne = goldSIlverBusinesses[bizList[0]];
  const bizTwo = goldSIlverBusinesses[bizList[1]];
  const bizThree = goldSIlverBusinesses[bizList[2]];

  return `<div class="spot1">
  <div class="contact1">
  <h2>${bizOne.businessname}</h2>
  <img src="${bizOne.logourl}" alt="${bizOne.businessname}" loading="lazy"/>
  <p><em>A Chamber Corporate Partner</em>
  <p class="contact">${bizOne.phone} | <a href="${bizOne.website}"  target="_blank">Website</a></p>
  </div>
  </div>
  <div class="spot2">
  <div class="contact2">
  <h2>${bizTwo.businessname}</h2>
  <img src="${bizTwo.logourl}" alt="${bizTwo.businessname}" loading="lazy"/>
  <p><em>Simply the Best in the Business</em>
  <p class="contact">${bizTwo.phone} | <a href="${bizTwo.website}"  target="_blank">Website</a></p>
  </div>
  </div>
  <div class="spot3">
  <div class="contact3">
  <h2>${bizThree.businessname}</h2>
  <img src="${bizThree.logourl}" alt="${bizThree.businessname}" loading="lazy"/>
  <p><em>We care about Spring Creek</em>
  <p class="contact">${bizThree.phone} | <a href="${bizThree.website}"  target="_blank">Website</a></p>
  </div>
  </div>`;
}

fetch(directoryURL)
  .then((response) => {
    return response.ok ? response.json() : console.log("error");
  })
  .then((data) => {
    let businesses = data["business"];

    const spotlights = make_spotlights(businesses);

    document.querySelector(".spotlights").innerHTML = spotlights;
  });