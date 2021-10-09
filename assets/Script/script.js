var whatsForDinner = document.querySelector('#whatsForDinner');
var passwordGenerator = document.querySelector("#passwordGenerator");

whatsForDinner.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'https://jdesgarennes.github.io/whatsForDinner/';
});

passwordGenerator.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = "https://evol1e.github.io/Password-Generator/index.html";
});