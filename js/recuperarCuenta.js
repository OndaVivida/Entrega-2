let recuperarCuentaForm = document.getElementById("formularioRecuperarCuenta")
let recuperarCuentaBody = document.getElementById("recuperarCuentaBody")
const baseDeDatosDeUsuarios = JSON.parse(localStorage.getItem("Base de Datos de Usuarios Insegura"))


recuperarCuentaForm.onsubmit = (desactivarFormulario) => {
    desactivarFormulario.preventDefault();
    let correoIngresado = document.getElementById("email").value
    if (baseDeDatosDeUsuarios.some(usuarios => usuarios.correo == correoIngresado)) {
        existeElCorreo(baseDeDatosDeUsuarios.find(i => i.correo == correoIngresado))
    }else{
        noExisteElCorreo()
    }

}

existeElCorreo = (recuperado) => {
    let pieDePagina = document.getElementById("piePagina")
    let mensajeCorreo = document.getElementById("recuperado")

    if (!mensajeCorreo){
        let disclaimer = document.createElement("div")
        disclaimer.setAttribute("class", "cuerpo")
        disclaimer.setAttribute("id", "recuperado")
        disclaimer.innerHTML = `<p>no sé como hacer eso del correo así que acá estaría lo que se enviaría:</p>
                                <p>Se ha realizado una recuperación de la cuenta de "La Casa de los tornillos de Carloh" vinculada a este correo, estos son los datos:</p>
                                <p>Nombre de Ususario: ${recuperado.nombre}</p>
                                <p>Contraseña: ${recuperado.contraseña}</p>`
        recuperarCuentaBody.insertBefore(disclaimer, pieDePagina)
    }
}

noExisteElCorreo = () => {
    let pieboton = document.getElementById("posicionDelBoton")
    let existeError = document.getElementById("error")

    if (!existeError){
        let disclaimer = document.createElement("div")
        disclaimer.setAttribute("class", "error")
        disclaimer.setAttribute("id", "error")
        disclaimer.innerHTML = `<p>no existe una cuenta vinculada a ese correo</p>`
        recuperarCuentaForm.insertBefore(disclaimer, pieboton)
    }
}
