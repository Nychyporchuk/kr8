
document.addEventListener("DOMContentLoaded", function () {

    let fullNameInput = document.getElementById('fullname');
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('e-mail');
    let passwordInput = document.getElementById('password');
    let repeatPasswordInput = document.getElementById('repeat-password');
    let agreeCheckbox = document.getElementById('input-checkbox');
    let signUpForm = document.getElementById('registration-form');
    let modal = document.getElementById("myModal");
    let closeButton = document.getElementsByClassName("close")[0];
    let okButton = document.getElementById("okButton");
    let haveAccountLink = document.querySelector('.have-account a');

    function clearForm() {
        fullNameInput.value = '';
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        repeatPasswordInput.value = '';
        agreeCheckbox.checked = false;
    }



    function registerUser(event) {
        event.preventDefault();

        let fullNameValue = fullNameInput.value.trim();
        let usernameValue = usernameInput.value.trim();
        let emailValue = emailInput.value.trim();
        let passwordValue = passwordInput.value;
        let repeatPasswordValue = repeatPasswordInput.value;
        let agreeCheckboxChecked = agreeCheckbox.checked;

        if (fullNameValue === '') {
            alert('Заполните поле Full Name');
            return;
        }

        if (usernameValue === '') {
            alert('Заполните поле Your username');
            return;
        }

        if (emailValue === '') {
            alert('Заполните поле E-mail');
            return;
        }

        if (passwordInput.value === '' || repeatPasswordInput.value === '') {
            alert('Введите пароль и повторите его');
            return;
        }

        if (passwordValue.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (passwordValue !== repeatPasswordValue) {
            alert('Пароли не совпадают');
            return;
        }

        if (!agreeCheckboxChecked) {
            alert('Вы должны согласиться с условиями');
            return;
        }

        openModal();

    }

    function redirectToLoginPage() {
        fullNameInput.parentElement.remove();
        emailInput.parentElement.remove();
        repeatPasswordInput.parentElement.remove();
        document.querySelector('.input-checkbox').remove();
        haveAccountLink.remove();
        document.querySelector('.main-title').textContent = 'Log in to the system';
        document.getElementById('button').textContent = 'Sign In';

        // let signInButton = document.getElementById('button');
        // signInButton.addEventListener('click', signInButtonClickHandler);



        signUpForm.removeEventListener('submit', registerUser)
        signUpForm.addEventListener('submit', signInButtonClickHandler)
        clearForm();
    }

    function signInButtonClickHandler(event) {
        event.preventDefault();
        let usernameValue = document.getElementById('username').value.trim();
        let passwordValue = document.getElementById('password').value.trim();

        if (usernameValue === '' || passwordValue === '') {
            alert('Заполните все поля!');
            return;
        }

        alert('Добро пожаловать, ' + usernameValue + '!');
    }

    function openModal() {
        modal.style.display = "block";
    }

    // signUpForm.removeEventListener('submit', registerUser);
    signUpForm.addEventListener('submit', registerUser);

    okButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = "none";
        redirectToLoginPage();
    });

    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    haveAccountLink.addEventListener('click', function () {

        redirectToLoginPage();
    });

});



