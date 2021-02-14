const titleDOM = document.querySelector(".title input");
const descriptionDOM = document.querySelector(".description textarea");
const createBtnDom = document.querySelector(".create-button");
const deleteAllDom = document.querySelector(".delete-all");
const showAllDOM = document.querySelector(".show-all");
const cardSectionDOM = document.querySelector(".card-section");
let url = "http://localhost:8080/api/v1/cards";
let output = "";



showAllDOM.addEventListener("click", showAll);
createBtnDom.addEventListener("click", createCard)
deleteAllDom.addEventListener("click", deleteAll);

function showAll(e) {
    console.log("show all")
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                output += `
            <div class="card">
            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <button class="delete-card">Delete</button>
        </div>`;

            });
            cardSectionDOM.innerHTML = output;
        })
}

function createCard(e) {
    console.log("creat card", titleDOM.value, descriptionDOM.value);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: `${titleDOM.value}`,
            description: `${descriptionDOM.value}`
        })
    }).then(res => console.log(res))
}

function deleteAll(e) {
    fetch(url, {
            method: "DELETE"
        })
        .then(res => {
            console.log(res);
            cardSectionDOM.innerHTML = "";
        })
}