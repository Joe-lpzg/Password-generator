let listaNombreGasto = [];
let listaValorGasto = [];
let listaDescripcionGastos = [];

function clickBoton(){

    let nombreGasto = document.getElementById ("nombreGasto").value;
    let valorGasto = document.getElementById ("valorGasto").value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if (nombreGasto === "" || valorGasto === "") {
        alert ("Por favor, llene la casilla");
        return;
    }

    listaNombreGasto.push (nombreGasto);
    listaValorGasto.push (valorGasto);
    listaDescripcionGastos.push(descripcionGasto);


    if (valorGasto >= 150) {
        alert ("El valor ingresado es mayor a US$150");
    }

    actualizarListaGastos();

    }

function actualizarListaGastos() {

    const listaElemento = document.getElementById ("listaDeGastos");
    const totalElementos = document.getElementById ("totalGastos");

    let htmlLista = "";
    let totalGasto = 0;


    listaNombreGasto.forEach((elemento,posicion) => {
        const valorGasto = Number (listaValorGasto [posicion]);
        const descripcionGasto = listaDescripcionGastos [posicion];

        console.log(descripcionGasto);

        htmlLista += `<li>
        
        <input type="checkbox" data-index="${posicion}">
        ${elemento} - US ${valorGasto.toFixed(2)} 
        <br>Descripción del gasto: ${descripcionGasto}
        <button onclick="eliminarElemento(${posicion})">Eliminar</button>
        <button onclick="mostrarFormularioEdicion(${posicion})">Editar</button>
        </li>`;
        totalGasto += Number (valorGasto);


    });

    listaElemento.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGasto.toFixed (2);

    limpiar();
}

function eliminarElemento (posicion) {
    listaNombreGasto.splice(posicion,1);
    listaValorGasto.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
}

function limpiar () {
    document.getElementById ("nombreGasto").value = "";
    document.getElementById ("valorGasto").value = "";
    document.getElementById('descripcionGasto').value = "";
}
