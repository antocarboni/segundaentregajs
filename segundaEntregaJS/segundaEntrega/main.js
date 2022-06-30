let productos = [
    {
        "id":"1",
        "nombre":"Serum Glossier",
        "precio":7000,
        "img":"./assets/glossier.jpeg",
        "desc": "" 
    },

    {
        "id":"2",
        "nombre":"Pack de cremas GoTo",
        "precio":5500,
        "img":"./assets/goto1.jpg",
        "desc": "" 
    },

    {
        "id":"3",
        "nombre":"Pads labiales KNC",
        "precio":800,
        "img":"./assets/knc1.jpg",
        "desc": "" 
    },

    {
        "id":"4",
        "nombre":"Mascarillas Magic Stripes",
        "precio":3000,
        "img":"./assets/magicstripes1.jpg",
        "desc": "" 
    },

    {
        "id":"5",
        "nombre":"Set skincare Sturm",
        "precio":12000,
        "img":"./assets/sturm.jpg",
        "desc": "" 
    },

    {
        "id":"6",
        "nombre":"Serum hipoalergenico The Ordinary",
        "precio":8000,
        "img":"./assets/tobuy.jpg",
        "desc": "" 
    }
    
];

let carrito;

if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const { id, nombre, precio, img } = element
        const card = `
        <div class='card'>
            <p>${nombre}</p>
            <div>
                <img class='imgProducto' src=${img} alt=''/>
            </div>
            <div>
                <p>$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>AGREGAR AL CARRITO</button>
                
            </div>
        </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
}

desplegarProductos()

const btnAgregar = document.getElementsByClassName('btnAgregar')

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)
}


function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = productos.find(prod => prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    }
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.length



