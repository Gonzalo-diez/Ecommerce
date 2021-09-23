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