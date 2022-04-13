console.log(`Trabajando con condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");
console.log(ciudadesDisponibles);

const edadCliente = 18;

function cliente() {
  if (edadCliente >= 18) {
    console.log(`El comprador es mayor de edad.`);
    console.log(`Ciudades disponibles para viajar: `);
    console.log(ciudadesDisponibles);
  } else {
  console.log(`El comprador NO es mayor de edad.`);
  console.log(`Elección no autorizada.`);
  console.log(`No es posible ofrecer viajes.`);
  };
};

cliente();

console.log("mayor o igual que: ");
console.log(edadCliente >= 18);
console.log("mayor que: ");
console.log(edadCliente > 18);
console.log("menor o igual que: ");
console.log(edadCliente <= 18);
console.log("mayor que: ");
console.log(edadCliente < 18);
console.log("igual que: " /* un solo 'igual' sería darle un valor a 'edadCliente' */);
console.log(edadCliente == 18);
console.log("diferente de: ");
console.log(edadCliente != 18);