//Ajuste del menú para celulares
  
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
  
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
  
window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active'); 
}

function validar() {
    var username = $('#usuario').value;
    var password = $('#password').value;

    if (username == "gonzalo" && password == "10") {
        alert("Inicio de sesión exitoso");
        return false;
    }
    else {
        alert("Fracaso el inicio de sesión");
    }
}

const signUp = (e) => {
    let formData = {
        usuario: $('#usuario'),
        contraseña: $('#password'),
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'))
}