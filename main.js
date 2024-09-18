let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let limpiar = document.getElementById("limpiar");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {

    let numeroDigitado = parseInt (cantidad.value);

    if (cantidad < 6) {
        alert("La contraseña debe tener más 6 caracteres.")
    }

    let password = "";

    for (let i = 0; i < numeroDigitado; i++) {
        const caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio
    }
    
    contrasena.value = password;
}

function limpiar() {
    contrasena.value = ''; 
    cantidad.value = '';
  }