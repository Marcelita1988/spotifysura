//DECLARANDO VARIABLES CON JS DESDE EL DOM

let usuarioBaseDatos="sura45"
let contrasenaBaseDatos="marcela1988"
let correoBaseDatos="may.2856@hotmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
  //1.capturamos la informacion del formulario
  let nombreUsuario=cajaFormularioNombre.value
  let correoUsuario=cajaFormularioEmail.value
  let contraseñaUsuario=cajaFormularioPassword.value

  //validando los datos del usuario

  if(usuarioBaseDatos==nombreUsuario && contrasenaBaseDatos==contraseñaUsuario && correoBaseDatos==correoUsuario){
    Swal.fire({
        title: "Bienvenido"+nombreUsuario,
        text: "Tus credenciales son correctas",
        icon: "success"
      })

      setTimeout(function(){
        sessionStorage.setItem("nombre" , nombreUsuario)
        sessionStorage.setItem("correo" , correoUsuario)
        sessionStorage.setItem("contraseña" , contraseñaUsuario)
        window.location.href="./src/views/home.html"
      },1000)
      

  }else{
    Swal.fire({
        icon: "error",
        title: "Oops..."+nombreUsuario,
        text: "Verifica tus credenciales",
        
      });
  }

})

/*cajaFormularioNombre.addEventListener("click",function(){
    alert("escribe tu nombre")
})

cajaFormularioEmail.addEventListener("click",function(){
    alert("escribe tu email")
})

cajaFormularioPassword.addEventListener("click",function(){
    alert("escribe tu contraseña")
})*/


