// declarations
const d = new Date();
const year = d.getFullYear();
const lastmod = document.querySelector('#lastmod');
const datefieldUK = document.querySelector("#aside"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// using querySelector
document.querySelector('#currentyear').textContent = year;
document.querySelector('#lastmod').textContent += `Last Update: ${document.lastModified}`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;