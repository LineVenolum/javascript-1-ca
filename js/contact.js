const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    validateName(firstNameValue, firstNameError);
    validateLastName(lastNameValue, lastNameError);
    validateEmailInput(emailValue, emailError);

    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    if (checkInputLength(messageValue) && messageValue.length > 10) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkInputLength(value) {
    const trimmedValue = value.trim();
    return trimmedValue.length > 0;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function validateName(name, message) {
    if (checkInputLength(name)) {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

function validateLastName(name, message) {
    if (checkInputLength(name)) {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

function validateEmailInput(name, message) {
    if (checkInputLength(name)) {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}