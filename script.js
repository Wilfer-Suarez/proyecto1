const enlaceCorreo = document.querySelector('.email-nav');
const propiedadesCorreo = document.querySelector('.desktop-menu');
const iconCarrito = document.querySelector('.carrito');
const barraLateralCarrito = document.querySelector('.cajaPrincipal');
const iconBarraLateral = document.querySelector('.imagen');
const barraLateral = document.querySelector('.barraLateral');
const irALogin = document.querySelector('.irALogin');
const irALogin1 = document.querySelector('.irALogin1');
const login = document.querySelector('.login-0');
const buttonSignUp = document.querySelector('.singUp');
const createAccount = document.querySelector('.createAccount-0');
const enlaceMyOrders = document.querySelector('.irAMyOrders');
const enlaceMyOrders1 = document.querySelector('.irAMyOrders1');
const myOrders = document.querySelector('.myOrders-0');
const enlaceDetallesCuenta = document.querySelector('.irAMyAccount');
const enlaceDetallesCuenta1 = document.querySelector('.irAMyAccount1');
const detallesCuenta = document.querySelector('.detallesCuenta-0');
const detallesProducto = document.querySelector('.cajaPrincipalDetalles');
const cerrarDetallesProducto = document.querySelector('.imagenx');

enlaceCorreo.addEventListener('click', toggleDesktopMenu);
iconBarraLateral.addEventListener('click', togglebarralateral);
iconCarrito.addEventListener('click', togglebarralateralcarrito);
irALogin.addEventListener('click', togglelogin);
irALogin1.addEventListener('click', togglelogin);
buttonSignUp.addEventListener('click', togglecreateAccount);
enlaceMyOrders.addEventListener('click', togglemyOrders);
enlaceMyOrders1.addEventListener('click', togglemyOrders);
enlaceDetallesCuenta.addEventListener('click', toggledetallesCuenta);
enlaceDetallesCuenta1.addEventListener('click', toggledetallesCuenta);
cerrarDetallesProducto.addEventListener('click', removedetallesProducto);

function toggleDesktopMenu() {
    const barraLateralCarritoAbierto = barraLateralCarrito.classList.contains('inactive');
    if (!barraLateralCarritoAbierto) {
        barraLateralCarrito.classList.add('inactive');
    }

    const detallesProductoAbierto = detallesProducto.classList.contains('inactive');
    if (!detallesProductoAbierto) {
        detallesProducto.classList.add('inactive');
    }

    propiedadesCorreo.classList.toggle('inactive');
}

function togglebarralateral() {
    const barraLateralCarritoAbierto = barraLateralCarrito.classList.contains('inactive');
    if (!barraLateralCarritoAbierto) {
        barraLateralCarrito.classList.add('inactive');
    }

    const detallesProductoAbierto = detallesProducto.classList.contains('inactive');
    if (!detallesProductoAbierto) {
        detallesProducto.classList.add('inactive');
    }

    barraLateral.classList.toggle('inactive');
}

function togglebarralateralcarrito() {
    const barraLateralAbierto = barraLateral.classList.contains('inactive');
    if (!barraLateralAbierto) {
        barraLateral.classList.add('inactive');
    }

    const propiedadesCorreoAbierto = propiedadesCorreo.classList.contains('inactive');
    if (!propiedadesCorreoAbierto) {
        propiedadesCorreo.classList.add('inactive');
    }

    const detallesProductoAbierto = detallesProducto.classList.contains('inactive');
    if (!detallesProductoAbierto) {
        detallesProducto.classList.add('inactive');
    }

    barraLateralCarrito.classList.toggle('inactive');
}

function togglelogin() {
    login.classList.toggle('inactive');
}

function togglecreateAccount() {
    createAccount.classList.toggle('inactive');
}

function togglemyOrders() {
    myOrders.classList.toggle('inactive');
}

function toggledetallesCuenta() {
    detallesCuenta.classList.toggle('inactive');
}

function opendetallesProducto() {
    const propiedadesCorreoAbierto = propiedadesCorreo.classList.contains('inactive');
    if (!propiedadesCorreoAbierto) {
        propiedadesCorreo.classList.add('inactive');
    }

    const carritoAbierto = barraLateralCarrito.classList.contains('inactive');
    if (!carritoAbierto) {
        barraLateralCarrito.classList.add('inactive');
    }

    detallesProducto.classList.remove('inactive');
}

function removedetallesProducto() {
    detallesProducto.classList.add('inactive');
}

function operacionNumeroCarrito() {
    let numeroCarritoSumar = parseInt(document.querySelector('.numeroCarrito').textContent);

    if (numeroCarritoSumar < 99) {
        numeroCarritoSumar += 1;
        document.querySelector('.numeroCarrito').textContent = numeroCarritoSumar;
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//<div class="cards-container">
//
//<div class="product-card">
//  <img
//    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//    alt="">
//  <div class="product-info">
//    <div>
//      <p>$120,00</p>
//      <p>Bike</p>
//    </div>
//    <figure>
//      <img src="./icons/bt_add_to_cart.svg" alt="">
//    </figure>
//  </div>
//</div>
//
//</div>

const cardsContainer = document.querySelector('.cards-container');
function renderProducts(arr) {
    for (product of arr) {
        // const principal cardsContainer
        const productCard = document.createElement('div'); // Se crea el elemento <div>
        productCard.classList.add('product-card');               // Se establece la clase 'product-card' ( <div class='product-card'> )

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img'); // Se crea el elemento <img>
        productImg.setAttribute('src', product.image);         // Se establece el atributo 'src' y la URL (product.image) del <img>
        productImg.addEventListener('click', opendetallesProducto);

        const productInfo = document.createElement('div'); // Se crea el elemento <div>
        productInfo.classList.add('product-info');               // Se establece la clase 'product-info' ( <div class='product-info'> )

        const productInfoDiv = document.createElement('div'); // Se crea el elemento <div>

        const productPrice = document.createElement('p'); // Se crea el elemento <p>
        productPrice.innerText = '$' + product.price;         // Se pone el valor $ y se concatena con product.price (numero:valor)
        const productName = document.createElement('p'); // Se crea el elemento <p>
        productName.innerText = product.name;         // Se establece el nombre product.name (nombre:producto)

        const productInfoFigure = document.createElement('figure');      // Se crea el elemento <figure>

        const productImgCart = document.createElement('img');      // Se crea el elemento <img>
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // Se establece el atributo 'src' del <img>
        productImgCart.addEventListener('click', operacionNumeroCarrito);

        cardsContainer.appendChild(productCard); // coje el const (cardsContainer) y establece al padre o hijo (productCard)

        productCard.appendChild(productImg); // el padre <div> añade al hijo <img>
        productCard.appendChild(productInfo); // el padre <div> añade al hijo <div> (productInfo)

        productInfo.appendChild(productInfoDiv); // el padre <div> añade al hijo <p>
        productInfo.appendChild(productInfoFigure); // el padre <div> añade al hijo <p>

        productInfoDiv.appendChild(productPrice); // el padre <div> añade al hijo <p>
        productInfoDiv.appendChild(productName); // el padre <div> añade al hijo <p>

        productInfoFigure.appendChild(productImgCart); // el padre <figure> añade al hijo <img>
    }
}
renderProducts(productList); // IMPORTANTE ponerlo para que aparezca
