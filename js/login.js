function validar() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if (username == "gonzalo" && password == "10") {
        alert("Inicio de sesión exitoso");
        return false;
    }
    else {
        alert("Fracaso el inicio de sesión");
    }
}

const signUp = e => {
    let formData = {
        usuario: document.getElementById('usuario'),
        contraseña: document.getElementById('password'),
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'))
}