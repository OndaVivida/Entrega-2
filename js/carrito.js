const baseDeDatos = JSON.parse(localStorage.getItem("Base de Datos de Productos"))

borrarCarrito = document.getElementById("borrarCarrito")
borrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    listadoDeProductos("")
}

activarBotones = () => {
    let botones = ""
    botones = document.getElementsByClassName("agregarOtraCaja")
    for (let boton of botones) {
        boton.onclick = (bot) => {
            agregarOtraCaja(bot.currentTarget.id)
        }
    }
    botones = document.getElementsByClassName("quitarUnaCaja")
    for (let boton of botones) {
        boton.onclick = (bot) => {
            quitarUnaCaja(bot.currentTarget.id)
        }
    }
    botones = document.getElementsByClassName("quitarTodas")
    for (let boton of botones) {
        boton.onclick = (bot) => {
            quitarTodasCajas(bot.currentTarget.id)
        }
    }
}

agregarOtraCaja = (id) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    carrito.push(id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    listadoDeProductos(cargarCarritoGuardado(carrito))
}

quitarUnaCaja = (id) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    carrito.splice(carrito.indexOf(id), 1)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    listadoDeProductos(cargarCarritoGuardado(carrito))
}

quitarTodasCajas = (id) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    do {
        carrito.splice(carrito.indexOf(id), 1)
    }while (carrito.includes(id))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    listadoDeProductos(cargarCarritoGuardado(carrito))
}



class datosRepetidos{
    constructor(id, repeticiones){
        this.id = id
        this.repeticiones = repeticiones
    }
}

function cargarCarritoGuardado(carrito) {
    let datosPreProcesados = []
    let datosProcesados = []
    let repeticiones = 0
    let datoActual = 0
    carrito = carrito.sort((a, b) => a - b)
    while (carrito.length) {
        do {
            repeticiones++
            datoActual = carrito.shift()
        }while (datoActual == carrito[0])
            
        datosPreProcesados.push(new datosRepetidos(datoActual, repeticiones))
        repeticiones = 0
    }
    datosPreProcesados.forEach(dato => {
        let datosEnProcesamiento = baseDeDatos.find(i => i.id == dato.id)
        datosEnProcesamiento.duplicado = dato.repeticiones
        datosProcesados.push(datosEnProcesamiento)
    })
return datosProcesados
}

function listadoDeProductos(datosARenderizar) {
    let cantidadDeProductos = document.getElementById("numeroDeProductos")
    let precioTotal = document.getElementById("precioTotal")
    let precioTotalCalculado = 0
    let productos = document.getElementById("productosCarrito")
    productos.innerHTML = "";
    if (datosARenderizar.length != 0) {
        datosARenderizar.forEach(producto => {
            precioTotalCalculado = (Math.round((producto.precio * producto.duplicado + precioTotalCalculado)* 10)/10)
            let render = document.createElement("div")
            render.setAttribute("class", "productos")
            render.innerHTML = `<h3>${producto.titulo}</h3>
                                <div class="descripcionProducto">
                                <p><span class="negrita">${producto.duplicado}</span> Caja/s de <span class="negrita">${producto.cantidad}</span> unidades c/u.  Precio por unidad: <span class="negrita">$${producto.precio}</span></p>
                                <p class="precioCarrito">subtotal: $${Math.round(producto.precio * producto.duplicado * 10)/10}</p>
                                </div>
                                <button class="agregarOtraCaja" id="${producto.id}">Agrgar otra caja</button>
                                <button class="quitarUnaCaja" id="${producto.id}">Quitar una caja</button>
                                <button class="quitarTodas" id="${producto.id}">Quitar todo</button>`
            productos.appendChild(render)
        })
        precioTotal.innerText = `Total: $${precioTotalCalculado}`
        cantidadDeProductos.innerText = (JSON.parse(localStorage.getItem("carrito")).length + " Productos")
        activarBotones()
    }else{
        precioTotal.innerText = "Total: $0"
        cantidadDeProductos.innerText = "No hay productos"
        let render = document.createElement("h2")
        render.setAttribute("class", "vacio")
        render.innerText = "El Carrito está vacío."
        productos.appendChild(render)
    }
}

listadoDeProductos(cargarCarritoGuardado((JSON.parse(localStorage.getItem("carrito")) ?? "")))