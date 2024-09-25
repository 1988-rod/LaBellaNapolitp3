const precios = {
    platos: {
        Canelones: 4500,
        Sorrentinos: 4400,
        Ravioles: 4000,
        Ñoquis: 3800,
        Tallarines: 3500
    },
    salsas: {
        Tuco: 2000,
        Crema: 3000,
        Mixta: 2700
    }
};


function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = ''; 

    let totalPrecio = 0; 

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.plato} - ${item.salsa}: $${item.precio}`;
        carritoList.appendChild(li);
        totalPrecio += item.precio; 
    });

    document.getElementById('total').textContent = `Total: $${totalPrecio}`;
}


document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const plato = document.getElementById('plato').value;
    const salsa = document.getElementById('salsa').value;

    
    if (!precios.platos[plato] || !precios.salsas[salsa]) {
        alert("Por favor, selecciona un plato y salsa válidos.");
        return;
    }

   
    const nuevoPedido = {
        plato: plato,
        salsa: salsa,
        precio: precios.platos[plato] + precios.salsas[salsa] 
    };

    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(nuevoPedido);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    document.getElementById('form').reset();

   
    cargarCarrito();
});

// Cargar el carrito al iniciar la página
cargarCarrito();
