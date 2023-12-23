let intervalId;
const nombres = ["Adri", "Irene", "Olga", "Paula", "Itziar", "Diana", "Clara", "Rachel", "Andrea", "Silvia"];
const divCartones = document.getElementById('cartones');
const btnCartones = document.getElementById('btnCartones');
const btnJugar = document.getElementById('btnJugar');
const btnPausa = document.getElementById('btnPausa');
const btnReanudar = document.getElementById('btnReanudar');
const btnReinicio = document.getElementById('btnReinicio');


btnPausa.hidden= true;
btnReanudar.hidden=true;
btnReinicio.hidden=true;

let empezada = false;


function generarCarton(nombre) {
    const carton = [];
    while (carton.length < 15) {
        const numero = Math.floor(Math.random() * 100) + 1;
        if (!carton.includes(numero)) {
            carton.push(numero);
        }
    }
    return { nombre, numeros: carton };
}

function mostrarCartones() {
    const cartonesContainer = document.getElementById('cartones');
    cartonesContainer.innerHTML = '';

    nombres.forEach((nombre, index) => {
        const carton = generarCarton(nombre);
        const cartonTable = document.createElement('table');

        const titleRow = cartonTable.insertRow(0);
        const titleCell = titleRow.insertCell(0);
        titleCell.colSpan = 5;
        titleCell.textContent = `Cartón de ${carton.nombre}`;

        for (let j = 0; j < 3; j++) {
            const row = cartonTable.insertRow(j + 1);

            for (let k = 0; k < 5; k++) {
                const cell = row.insertCell(k);
                const numero = carton.numeros[j * 5 + k];
                cell.textContent = numero;
            }
        }

        cartonesContainer.appendChild(cartonTable);
    });
}

function generarCartones() {
     // Detiene el intervalo
     clearInterval(intervalId);
    // Genera y muestra los cartones
    mostrarCartones();
}

function iniciarLlamados() {
    // Llama a los números cada 5 segundos
    divCartones.innerHTML='';
    empezada=true;
    btnJugar.hidden=true;
    btnCartones.hidden=true;
    btnPausa.hidden=false;
    btnReinicio.hidden=false;
    intervalId = setInterval(llamarNumero, 2200);
}

function llamarNumero() {
    const nuevoNumero = Math.floor(Math.random() * 100) + 1;
    // Muestra el número llamado en la sección correspondiente
    const numerosLlamadosContainer = document.getElementById('numerosLlamados');
    numerosLlamadosContainer.innerHTML += `${nuevoNumero}   `;
}

function salirDelJuego() {
    // Detiene el intervalo
    clearInterval(intervalId);
    // Recarga la página para reiniciar todo
    location.reload();
}

const pausarJuego = () => {
    btnReanudar.hidden=false;
      // Detiene el intervalo
      clearInterval(intervalId);
}

const reanudarJuego = () => {
    btnReanudar.hidden=true;
    //Volvemos a iniciar el intervalo
    setInterval(llamarNumero, 2200);
}