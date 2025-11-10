const baseDeDatosDeUsuarios = JSON.parse(localStorage.getItem("Base de Datos de Usuarios Insegura"))
let formularioIniciarSesion = document.getElementById("formularioIniciarSesion")

if (localStorage.getItem("Usuario Activo")){
    location.href="../index.html"
}

formularioIniciarSesion.onsubmit = (desactivarFormulario) => {
    desactivarFormulario.preventDefault();
    let nombreIngresado = (document.getElementById("usuario").value).toLowerCase()
    let contraseñaIngresada = document.getElementById("contraseña").value

    if (baseDeDatosDeUsuarios.some(usuarios => usuarios.nombre == nombreIngresado) && baseDeDatosDeUsuarios.some(usuarios => usuarios.contraseña == contraseñaIngresada)){
        localStorage.setItem("Usuario Activo", nombreIngresado)
        location.href="../index.html"
    }else{
        let existeError = document.getElementById("error")

        if (!existeError){
            let pieBoton = document.getElementById("pieBoton")
            let errorDeInicio = document.createElement("div")
            errorDeInicio.setAttribute("class", "error")
            errorDeInicio.setAttribute("id", "error")
            errorDeInicio.innerHTML = `<p>Nombre de Usuario o Contraseña Incorrectas</p>`
            formularioIniciarSesion.insertBefore(errorDeInicio, pieBoton)
        }
    }
}