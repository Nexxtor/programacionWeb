"use strict";
window.onload = () => {
    app.init();
}

// import
/// Pasar a modules
class LoginForm {
    constructor(element, errors) {
        this.element = element;
        this.errors = errors;
    }
    onSubmit() {
        this.element.addEventListener("submit", (e) => {
            console.log("Capturin Form Submit of ", this.element);
            e.preventDefault();
            this.cleanErrors();

            var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            var validUser = /[a-z|A-Z]+/;

            var validate = this.validate("Invalid Username. You only can use words", validUser, this.element.username);
            validate = this.validate("The Password need ...", strongPassword, this.element.password) && validate;

            if (validate)
                this.element.submit();
        });
    }
    validate(message, regex, elm) {
        if (!regex.test(elm.value)) {
            this.addError(message);
            return false;
        }
        return true;
    }
    addError(message) {
        let error = document.createElement("li");
        error.innerText = message;
        this.errors.append(error);
    }
    cleanErrors() {
        this.errors.innerHTML = "";
    }
}


var app = {
    init() {
        let loginForm = new LoginForm(document.loginForm, document.getElementsByClassName("errors")[0]);
        loginForm.onSubmit();
    }
}