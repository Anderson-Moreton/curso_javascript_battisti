let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.palmeiras.com.br';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));