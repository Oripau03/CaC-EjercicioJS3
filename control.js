const username = document.getElementById("user");
const password = document.getElementById("password");
const btn = document.getElementById("userAccess");

const validarCampos = (user, pass) => {
    user.setCustomValidity('');
    pass.setCustomValidity('');

    if(user.value == ''){
        user.setCustomValidity('Complete el campo de usuario');
    } else if (pass.value == ''){
        pass.setCustomValidity('Ingrese una contraseña');
    } else if (!user.value.includes('@')){
        user.setCustomValidity('El usuario debe contener un @');
    } else {
        user.setCustomValidity('');
        pass.setCustomValidity('');
        alert('Registro exitoso')
        console.log('Registro exitoso');
    }
}

btn.addEventListener('click', (e) => {
    validarCampos(username,password);
});
