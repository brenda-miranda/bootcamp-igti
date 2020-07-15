// exemplo de seletor de TAG
var title = document.querySelector('h1');
title.textContent = 'Mudei';


// exemplo de seletor de ID
var title = document.querySelector('#city');
title.textContent = 'Rio de Janeiro';


// exemplo de seletor de CLASS
var title = document.querySelector('.idade');
title.textContent = '49 anos';


// exemplo de selector all para selecionar todos os elementos com a mesma class
var personalData = document.querySelectorAll('.personal-data');
console.log(personalData);