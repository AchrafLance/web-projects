let createBtn = document.querySelector(".create-btn"); 
let createForm = document.querySelector(".create-post");
let closeForm = document.querySelector(".fa-times-circle"); 
let darkBackground = document.querySelector(".dark-backround"); 
let searchInput = document.querySelector("#searchInput"); 
let searchDropdown = document.querySelector(".search-dropdown");
let dictionaryLogo = document.querySelector("#dictionary-logo"); 

if(createBtn != null){
    createBtn.addEventListener("click", function(){
        createForm.style.opacity=1;
        createForm.style.visibility="visible"; 
        darkBackground.style.display="block"; 
        darkBackground.style.opacity=0.7; 
    }); 
}
else{
    console.error('create button not found'); 
}


closeForm.addEventListener("click", function(){
    createForm.style.opacity=0; 
    darkBackground.style.opacity=0; 
    darkBackground.style.display="none"; 
    createForm.style.visibility="hidden"; 
})

searchInput.addEventListener("input", function(){
    searchDropdown.classList.remove("hidden")
    let currentItems = document.querySelectorAll(".post"); 
    let input = searchInput.value.trim().toLowerCase(); 
        
    if(input == ""){ 
        searchDropdown.classList.add("hidden")
        for(let post of currentItems){
            post.style.display = "block"; 
        }
    }
    else{
        for(let post of currentItems){
            let postName = post.querySelector("strong").innerText.toLowerCase(); 
            if(postName.indexOf(input) == -1){
                post.style.display = "none"; 
            }
        }

    }
})

dictionaryLogo.addEventListener('onload', function(){
    dictionaryLogo.style.opacity=1; 
    dictionaryLogo.style.margin=0;
})
