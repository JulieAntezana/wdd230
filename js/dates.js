
//const year = d.getFullYear();
const lastmod = document.querySelector('#lastmod');
//lastmod.textContent = `Last Update: ${document.lastModified}`;

//lastmod.innerHTML = `<strong>Last UPDATE</strong> last modified: ${document.lastModified}`;

// using querySelector
//document.querySelector('#currentyear').textContent = year;
document.querySelector('#lastmod').textContent += `Last Update: ${document.lastModified}`;