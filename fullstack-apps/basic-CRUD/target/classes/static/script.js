// Get UI Elements
const titleDOM = document.querySelector(".title input");
const descriptionDOM = document.querySelector(".description textarea");
const createBtnDom = document.querySelector("#create");
const deleteAllDom = document.querySelector(".delete-all");
const cardSectionDOM = document.querySelector(".card-section");
const cardButtonsDOM = document.querySelector(".cardButttons");
const deteteButton = document.querySelector("#delete");
const updateButton = document.querySelector("#update");
const card = document.querySelector(".card");

let url = "http://localhost:8080/api/notes";

let displayCard = function(title, content, id) {
    return `
    <div class="card">
    <h1>${title}</h1>
    <p>${content}</p>
    <div class="buttons cardButttons" data-id='${id}'>
    <button class="delete-card note-btn" id="delete">Delete</button>
    <button class="edit-card note-btn" id="edit">Edit</button>
    </div>
    </div>
    `;
}

let cardInnerHTML = function(title, content, id) {
    return `
    <h1>${title}</h1>
    <p>${content}</p>
    <div class="buttons cardButttons" data-id='${id}'>
    <button class="delete-card note-btn" id="delete">Delete</button>
    <button class="edit-card note-btn" id="edit">Edit</button>
    </div>`;
}

//fetch existing cards
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            cardSectionDOM.innerHTML += displayCard(element.title, element.content, element.id)
        });
    })


//create card
createBtnDom.addEventListener("click", e => {
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: `${titleDOM.value}`,
                content: `${descriptionDOM.value}`
            })
        })
        .then(res => res.json())
        .then(data => {
            cardSectionDOM.innerHTML += displayCard(data.title, data.content, data.id);
            titleDOM.value = "";
            descriptionDOM.value = "";
        })
})



//Delete/Update Card
cardSectionDOM.addEventListener("click", e => {

    let cardID = e.target.parentElement.dataset.id;
    let card = e.target.closest(".card");

    // Delete Card
    if (e.target.id == "delete") {
        fetch(`${url}/${cardID}`, {
                method: "DELETE"
            })
            .then(e.target.closest(".card").remove())
    }

    //Update Card
    if (e.target.id == "edit") {

        titleDOM.value = e.target.closest(".card").querySelector("h1").innerText;
        descriptionDOM.value = e.target.closest(".card").querySelector("p").innerText;
        updateButton.addEventListener("click", e => {
            fetch(`${url}/${cardID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: `${titleDOM.value}`,
                        content: `${descriptionDOM.value}`
                    })
                })
                .then(res => res.json())
                .then(data => {
                    card.innerHTML = cardInnerHTML(data.title, data.content, data.id)
                    titleDOM.value = "";
                    descriptionDOM.value = "";
                })
        })
    }
})