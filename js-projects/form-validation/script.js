let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordCheck = document.querySelector("#password-check");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    alert("Account Created")
});

function checkInputs() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordCheckValue = passwordCheck.value;

    // check username 
    if (usernameValue === "") {
        addErrorFor(username, "username cannot be empty!");
    } else {
        addSuccessFor(username);
    }

    // check email 
    if (emailValue === "") {
        addErrorFor(email, "email cannot be empty!");
    } else if (!isValidEmail(emailValue)) {
        addErrorFor(email, "please enter a valid email")
    } else {
        addSuccessFor(email);
    }

    // check password 
    if (passwordValue === "") {
        addErrorFor(password, "password cannot be empty!");
    } else {
        addSuccessFor(password);
    }

    // check password2 
    if (passwordCheckValue === "") {
        addErrorFor(passwordCheck, "password cannot be empty!");
    } else if (passwordCheckValue != passwordValue) {
        addErrorFor(passwordCheck, "passwords don t match");
    } else {
        addSuccessFor(passwordCheck);
    }
}

function addErrorFor(element, errorMsg) {
    let parentElement = element.parentElement;
    let small = parentElement.querySelector("small");
    small.innerText = errorMsg;
    parentElement.className = "form-control error";
}

function addSuccessFor(element) {
    let parentElement = element.parentElement;
    parentElement.className = "form-control success";
}

function isValidEmail(element) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(element);

}