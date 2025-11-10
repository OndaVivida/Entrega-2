let botones = document.getElementsByClassName("botonCompra")
    console.log(botones)
    for (let boton of botones) {
        boton.onclick = (bot) => {
            agregarAlCarrito(bot.currentTarget.id)
            console.log("botones")
        }
    }