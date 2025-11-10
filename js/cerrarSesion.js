let usuarioActivo = localStorage.getItem("Usuario Activo")

let saludos = document.getElementById("saludos")
saludos.innerText = usuarioActivo.toUpperCase()

let botonVolverInicio = document.getElementById("volverAInicio")
botonVolverInicio.onclick = () => {
    location.href="../index.html"
}

let cerrarSesion = document.getElementById("cerrarSesion")
cerrarSesion.onclick = () => {
    localStorage.removeItem("Usuario Activo")
    location.href="../index.html"
}