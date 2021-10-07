//Ajustes del dropdown

document.querySelector(".dropdown").click(function() {
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
        nombre: $('#nombre').value,
        apellido: $('#apellido').value,
        email: $('#email').value,
        contraseña: $('#password'),
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    
}