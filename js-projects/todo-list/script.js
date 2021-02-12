// UI Elements
const searchInput = document.querySelector(".search-items input");
const item = document.querySelector(".item");
const itemList = document.querySelector(".item-box");
const checkbox = document.querySelector("#check-box");
const deleteItemIcon = document.querySelector(".fa-trash-alt");
const addItemButton = document.querySelector(".add-items button");
const itemDescription = document.querySelector(".add-items input");
const deleteItemsButton = document.querySelector(".clear-items button");


itemList.addEventListener("click", boxchecked);
itemList.addEventListener("click", deleteItem);
deleteItemsButton.addEventListener("click", deleteItems);
searchInput.addEventListener("input", searchItemList);
addItemButton.addEventListener("click", () => {
    addItem(itemDescription.value);
});

// Execute a function when the user releases a key on the keyboard
itemDescription.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addItemButton.click();
    }
});

function deleteItems() {
    itemList.innerHTML = "";
}


function searchItemList() {
    let currentItems = document.querySelectorAll(".item");
    let input = searchInput.value.trim().toLowerCase();
    if (input == "") {
        for (let item of currentItems) {
            item.style.display = "block";
        }
    } else {
        for (let item of currentItems) {
            let itemDesc = item.querySelector("label").innerText.toLowerCase();

            if (itemDesc.indexOf(input) == (-1)) {
                item.style.display = "none";
            }
        }
    }
}

function addItem(itemText) {
    if (itemDescription.value != "") {
        let newItem = item.cloneNode(true);
        newItem.style.display = "block";
        newItem.querySelector("label").innerText = itemText;
        newItem.querySelector("label").style.textDecoration = "none";
        newItem.querySelector("input").checked = false;
        itemList.append(newItem);
        itemDescription.value = "";
        removeError(itemDescription);
    } else {
        addError(itemDescription, "input cannot be empty!");
    }
}

function boxchecked(e) {
    if (e.target.nodeName === checkbox.nodeName) {
        if (e.target.checked)
            e.target.nextElementSibling.style.textDecoration = "line-through";
        else
            e.target.nextElementSibling.style.textDecoration = "none";
    }
}

function deleteItem(e) {
    if (e.target.nodeName == deleteItemIcon.nodeName) {
        e.target.parentElement.remove();
    }
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