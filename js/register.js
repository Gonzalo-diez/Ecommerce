document.querySelector(".dropdown").addEventListener("click",function() {
    document.querySelector(".dropdown ul").classList.add("show");
  })
  
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

const signUp = (e) => {
    let formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        contraseña: document.getElementById('password'),
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    
}