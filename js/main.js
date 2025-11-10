// Variables globales
const baseDeDatos = JSON.parse(localStorage.getItem("Base de Datos de Productos"))

filtrarBaseDeDatos = () => {
    let filtroListaPrecio = document.getElementById("filtroListaPrecio")
    let filtroListaTipo = document.getElementById("filtroListaTipo")
    let ordenarLista = document.getElementById("ordenarLista")
    let baseDeDatosEditada = baseDeDatos

    switch (ordenarLista.value) {
        case "ordenarPorMayorPrecio":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => b.precio - a.precio)
            break
        case "ordenarPorMenorPrecio":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => a.precio - b.precio)
            break
        case "ordenarPorMayorCantidad":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => b.cantidad - a.cantidad)
            break
        case "ordenarPorMenorCantidad":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => a.cantidad - b.cantidad)
            break
        case "ordenarPorTipoAZ":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => a.tipo.localeCompare(b.tipo))
            break
        case "ordenarPorTipoZA":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => b.tipo.localeCompare(a.tipo))
            break
        case "":
            baseDeDatosEditada = baseDeDatosEditada.sort((a, b) => a.id - b.id)
            break
    }

    if (filtroListaPrecio.value == 0){
        sessionStorage.setItem("filtroPrecio", "")
    }else{
        sessionStorage.setItem("filtroPrecio", filtroListaPrecio.value)
    }

    sessionStorage.setItem("orden", ordenarLista.value)
    sessionStorage.setItem("filtroTipo", filtroListaTipo.value)

    if (filtroListaPrecio.value != "" && filtroListaPrecio.value != 0){
        baseDeDatosEditada = baseDeDatosEditada.filter(elemento => elemento.precio <= filtroListaPrecio.value)
    }
    if (filtroListaTipo.value != "") {
        baseDeDatosEditada = baseDeDatosEditada.filter(elemento => elemento.tipo == filtroListaTipo.value)
    }

    listadoDeProductos(baseDeDatosEditada)
}

let ordenarLista = document.getElementById("ordenarLista")
ordenarLista.onchange = () => filtrarBaseDeDatos()

let filtroListaPrecio = document.getElementById("filtroListaPrecio")
filtroListaPrecio.onchange = () => filtrarBaseDeDatos()

let filtroListaTipo = document.getElementById("filtroListaTipo")
filtroListaTipo.onchange = () => filtrarBaseDeDatos()

actualizarIcono = () => {
    let carritoIcono = document.getElementById("carrito")
    carritoIcono.innerText = `Carrito ${JSON.parse(localStorage.getItem("carrito")).length}`
}
actualizarIcono()


activarCarrito = () => {
    let botones = document.getElementsByClassName("botonCompra")
    for (let boton of botones) {
        boton.onclick = (bot) => {
            agregarAlCarrito(bot.currentTarget.id)
        }
    }
}

agregarAlCarrito = (id) =>{
    let carrito = (JSON.parse(localStorage.getItem("carrito")) ?? [])
    carrito.push(id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarIcono()
}


// Renderizador de la página
document.getElementById("filtroListaPrecio").value = sessionStorage.getItem("filtroPrecio")
document.getElementById("filtroListaTipo").value = (sessionStorage.getItem("filtroTipo") ?? "")
document.getElementById("ordenarLista").value = (sessionStorage.getItem("orden") ?? "")
filtrarBaseDeDatos()

function listadoDeProductos(datosARenderizar) {
    let productos = document.getElementById("productos")
    productos.innerHTML = "";
    if (datosARenderizar.length != 0) {
        datosARenderizar.forEach(producto => {
            let render = document.createElement("div")
            render.setAttribute("class", "producto")
            render.innerHTML = `<h3>${producto.titulo}</h3>
                                <p>${producto.descripcion}</p>
                                <p>Caja de <span class="negrita">${producto.cantidad}</span> unidades para <span class="negrita">${producto.tipo}</span>.<span class="precio">$${producto.precio}</span></p>
                                <button class="botonCompra" id="${producto.id}">Añadir al Carrito</button>`
            productos.appendChild(render)
        })
        activarCarrito()
    }else{
        let render = document.createElement("h2")
        render.setAttribute("class", "vacio")
        render.innerText = "En este momento no tenemos productos que coincidan con sus filtros de búsqueda."
        productos.appendChild(render)
    }
}