//Bienvenida al proyecto

var nombre;
nombre = prompt("Ingrese su nombre")
alert("Hola " + nombre + " ,bienvenido a mi proyecto Ecommerce")

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

//Función de los botones del slide

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

//Sección de productos destacados

document.querySelectorAll('.imagen-destacada-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.imagen-destacada-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.imagen-destacada-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});  

class mercancia {
  constructor(producto, cantidad, precio){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}
let mercancia1 = new mercancia ("Nike rojas", 50, "$16000");
console.log(mercancia1);
let mercancia2 = new mercancia ("Nike azules", 7, "$16000");
console.log(mercancia2);
let mercancia3 = new mercancia ("Nike amarillas", 40, "$16000");
console.log(mercancia3)

const mercancias = [{id: 1, producto: "Nike rojas", cantidad: 50, precio: "$16000"},
                   {id: 2, producto: "Nike azules", cantidad: 7, precio: "$16000"},
                   {id: 3, producto: "Nike amarillas", cantidad: 40, precio: "$16000"}];

for(const mercancia of mercancias) {
  console.log(mercancia.id)
  console.log(mercancia.producto)
  console.log(mercancia.cantidad)
  console.log(mercancia.precio)
}