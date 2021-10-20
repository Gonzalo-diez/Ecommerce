window.onload = function () {
    let baseDatos = [{
        Id: 18,
        producto: "Pelota de Futbol",
        precio: 15000,
        imagen: '../img/pelota1.png'
    },
    {
        Id: 19,
        producto: "Pelota de futbol",
        precio: 15000,
        imagen: '../img/pelota2.png'
    },
    {
        Id: 20,
        producto: "Pelota de Futbol",
        precio: 15000,
        imagen: '../img/pelota3.png'
    },
    {
        Id: 21,
        producto: "Pelota de Futbol",
        precio: 15000,
        imagen: '../img/pelota5.png'
    }]

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMbotonComprar = document.querySelector('#boton-comprar');
    const miLocalStorage = window.localStorage;

    function renderizarProductos() {
        baseDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.producto;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info.precio + '$';
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.Id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
     * Evento para añadir un producto al carrito de la compra
     */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
     * Dibuja todos los productos guardados en el carrito
     */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.Id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('borrar');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].producto} - ${miItem[0].precio}$`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btnx');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    /**
     * Evento para borrar un elemento del carrito
     */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        carrito.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.Id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    /**
     * Varia el carrito y vuelve a dibujarlo
     */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
        // Borra LocalStorage
        localStorage.clear();
    }

    function comprarCarrito() {
        // Mensaje de compra de los productos del carrito
        alert("Su compra ha sido realizada");
    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    DOMbotonComprar.addEventListener('click',comprarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
};

// Ajax
const URLJSON = "../json/inventario5.json"

$("#carrito1").click(function() {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if(estado === "success") {
            let inventario = respuesta;
            for(const dato of inventario) {
                alert(dato.producto)
            }
        }
    });
});
