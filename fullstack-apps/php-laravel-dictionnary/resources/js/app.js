require('./bootstrap');

let createBtn = document.querySelector(".create-btn"); 
let createFrom = document.querySelector(".create-form"); 
createBtn.addEventListener("click", function(){
    createFrom.classList.remove("hidden"); 

})