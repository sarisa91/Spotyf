//DECLARANDO VARIABLES CON JS DESDE EL DOM

let usarioBaseDatos="sura45"
let contrasenaBaseDatos="12345osito*"
let correoBaseDatos="savelo@gmail.com"

let botonFormulario=document.getElementById("botoIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("correo")
let cajaFormularioContraseña=document.getElementById("contraseña")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

evento.preventDefault()

    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value   
    let correoUsuario=cajaFormularioEmail.value
    let contraseñaUsuario=cajaFormularioContraseña.value

    //validando los datos del usuario
    if(usarioBaseDatos==nombreUsuario){
        Swal.fire({
            title: "Bienvenido",
            text: "Tus credenciales son correctas",
            icon: "success"
          })

          window.location.href="./src/views/home.html"
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops..." +nombreUsuario+"Tienes un problema",
            text: "Something went wrong!",
            
          })
    }
})
