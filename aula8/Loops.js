// guia --------------------<>

// console.log("mayor o igual que: ");
// console.log(edadCliente >= 18);
// console.log("mayor que: ");
// console.log(edadCliente > 18);
// console.log("menor o igual que: ");
// console.log(edadCliente <= 18);
// console.log("mayor que: ");
// console.log(edadCliente < 18);
// console.log("igual que: " /* un solo 'igual' sería darle un valor a 'edadCliente' */);
// console.log(edadCliente == 18);
// console.log("diferente de: ");
// console.log(edadCliente != 18);


console.log(` <> Trabajando con condiciones <> `);

// destinos -------------------<>

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");
ciudadesDisponibles.push("Madrid");
ciudadesDisponibles.push("Mazatlán");
console.log(ciudadesDisponibles);


// edad / acompañado ------------------<>

// variables ***
const edadCliente = 25;
const estaAcompanado = false;
const tieneBoleto = true;
const ciudadDestino = "Mazatlán";
let i = 0;

// funciones ***
console.log(ciudadesDisponibles);

function cliente() {
  if (edadCliente >= 18 || estaAcompanado) {
    console.log(`Venta de boletos autorizado,`);
    console.log(`Ciudades disponibles para viajar:`);
    console.log(ciudadesDisponibles + ". ");
    // console.log(`- Santiago. Buena elección.`)
  } else {
    console.log(`El comprador NO es mayor de edad y NO está acompañado.`);
    console.log(`NO es posible ofrecer viajes.`);
  };
};

cliente();


// proceso de abordaje -----------------<>

// funciones ***

function abordaje() {
  if (tieneBoleto && (edadCliente >= 18 || estaAcompanado)) {
    console.log(`El cliente dispone de boleto y edad suficiente. Feliz viaje.`)
  } else {
    console.log(`El cliente no dispone de boleto y/o edad suficiente. Embarque no autorizado.`)
  }
};

abordaje();


while (i < ciudadesDisponibles.length) {
  if (ciudadesDisponibles[i] == ciudadDestino) {
    console.log(`Destino disponible.`);
    console.log(`Destino seleccionado: ` + ciudadesDisponibles[i]);
  } else {
    console.log(`Destino NO disponible.`);
  }
  i++;
};