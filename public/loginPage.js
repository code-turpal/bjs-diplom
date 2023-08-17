"use strics";

let userForm = new UserForm();

// Авторизация пользователя
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success === true) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage('Ошибка авторизации: ' + response.error);
        }
    });
};

// Регистрация пользователя
userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        if (response.success === true) {
            userForm.id = response.id;
            location.reload();
        } else {
            userForm.setRegisterErrorMessage('Ошибка регистрации: ' + response.error);
        }
    });
};

