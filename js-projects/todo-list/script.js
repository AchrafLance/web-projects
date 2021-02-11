const searchItem = document.querySelector(".search-items input");
const item = document.querySelector(".item");
const itemBox = document.querySelector(".item-box");
const checkbox = document.querySelector("#check-box");
const deleteItem = document.querySelector(".fa-trash-alt");
const addButton = document.querySelector(".add-items button");
const newItemDesc = addButton.previousElementSibling;
const clearAllButton = document.querySelector(".clear-items button");




itemBox.addEventListener("click", e => {
    //checkbox
    if (e.target.nodeName === checkbox.nodeName) {
        if (e.target.checked)
            e.target.nextElementSibling.style.textDecoration = "line-through";
        else
            e.target.nextElementSibling.style.textDecoration = "none";
    }

    //delete-item
    else if (e.target.nodeName == deleteItem.nodeName) {
        e.target.parentElement.style.display = "none";

    } else {
        console.log("nothing clicked");
    }
});

//delete all items
clearAllButton.addEventListener("click", () => {
    let currentItems = document.querySelectorAll(".item");
    for (let i = 0; i < currentItems.length; i++) {
        currentItems[i].style.display = "none";
    }
});

//search-item
searchItem.addEventListener("input", () => {
    let currentItems = document.querySelectorAll(".item");
    let input = searchItem.value.trim();
    if (input == "") {
        for (let i = 0; i < currentItems.length; i++) {
            currentItems[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < currentItems.length; i++) {
            let itemDesc = currentItems[i].querySelector("label").innerText;

            if (itemDesc.indexOf(input) == (-1)) {
                currentItems[i].style.display = "none";
            }
        }
    }

});

addButton.addEventListener("click", () => {
    addItem(newItemDesc.value);
});

function addItem(itemText) {
    if (newItemDesc.value != "") {
        let newItem = item.cloneNode(true);
        newItem.style.display = "block";
        newItem.querySelector("label").innerText = itemText;
        newItem.querySelector("label").style.textDecoration = "none";
        newItem.querySelector("input").checked = false;
        itemBox.append(newItem);
        newItemDesc.value = "";
        removeError(newItemDesc);
    } else {
        addError(newItemDesc, "input cannot be empty!");
    }
}

function itemChecked() {

}








function addError(element, errorMsg) {
    let parent = element.parentElement;
    let errorElement = parent.querySelector("small");
    errorElement.innerText = errorMsg;
    parent.classList.add("error");
}

function removeError(element) {
    let parent = element.parentElement;
    parent.classList.remove("error");
}