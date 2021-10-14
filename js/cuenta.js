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

//Ajuste del dropdown para celulares
let submenu = document.querySelector('#submenu');
let pags = document.querySelector('.pags');

submenu.onclick = () => {
    submenu.classList.toggle('fa-times');
    pags.classList.toggle('active');
}

submenu.onscroll = () => {
    submenu.classList.remove('fa-times');
    submenu.classList.remove('active');
}

//Animaciones
$(document).ready(function() {
  $("#saludo").click(function() {
    $("#usuario").toggle(2500);
  });
});

$(document).ready(function() {
  $("#animar").click(function() {
    $("#caja").slideUp(2500);
    $("#caja").slideDown(5000);
    $("#caja").delay();
  });
});