const arcadeMachine = document.getElementById("arcadeMachine");

// Pide los objetos del Json

async function x() {
  const arr = await fetch("arcade.json");
  const atr = await arr.json();
  return atr;
}

// Genera los modelos de arcade con los datos obtenidos

function generarArcadeModels(arrArcade) {
  if (arcadeMachine) {
    arcadeMachine.innerHTML = ""; // Limpiar contenido previo si lo hubiera
    arrArcade.forEach((e, i) => {
      arcadeMachine.innerHTML += `
        <div onclick="cambiar('${e.url}', ${i})" class="arcadeModel"><p>${e.name}</p></div>
      `;
    });
  }
}

// Guarda el id que le manda el forEach a la localStorage

function guardarID(num) {
  let id = JSON.stringify(num);
  localStorage.setItem("id", id);
}

function navegar(url) {
  window.location.href = url;
}

// Iniciliza las funciones y les manda los parametros a las respectivas funciones

const cambiar = (url, num) => {
  guardarID(num);
  navegar(url);
};

// Funciones del index maquina

const detailGame = document.getElementById("DetailJuego");
const imgMachine = document.getElementById("arcadeMachineImg");

// Toma el id de local storage y lo compara con el indice del forEach para mostrar su info

const infoGame = (id, arrArcade) => {
  if (detailGame) {
    arrArcade.forEach((e, i) => {
      if (i === id) {
        detailGame.innerHTML = `<h1>${e.name}s</h1> <p>${e.description}</p>  <div class="containerButtons"><button class="buttonStart" onclick="navegationGame('${e.ruta}')">Start</button>  <button class="buttonHome" onclick="navegationGame('/index.html')">Home <img src="assets/imagenes/iconHome.svg"/></button></div> `;
        imgMachine.innerHTML = `<video loop muted autoplay src=${e.video}></video>`;
      }
    });
  }
};

// Al activar los botones antes de navegarte a la página en cuestión te activa una animación

const navegationGame = (param) => {
  imgMachine.classList.add("disolver");
  detailGame.classList.add("rojo");
  setTimeout(
    function (url) {
      window.location.href = url;
    },
    800,
    param
  );
  setTimeout(function () {
    imgMachine.classList.remove("disolver");
    detailGame.classList.remove("rojo");
  }, 900);
};

// Obtener los datos del archivo "arcade.json"

(async () => {
  try {
    const arcadeData = await x();
    const arrArcade = arcadeData;

    // Generar los modelos de arcade con los datos obtenidos

    generarArcadeModels(arrArcade);

    // Actualizar 'id' con el valor de localStorage y luego llamar a infoGame

    let id = localStorage.getItem("id");
    id = parseInt(id);
    infoGame(id, arrArcade);
  } catch (error) {
    console.error("Error al obtener los datos del archivo arcade.json", error);
  }
})();
