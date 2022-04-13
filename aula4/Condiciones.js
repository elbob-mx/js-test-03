console.log(`Trabajando con condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");
console.log(ciudadesDisponibles);

const edadCliente = 30;

function cliente() {
  if (edadCliente >= 18) {
    console.log(`El comprador es mayor de edad`);
  } else {
  console.log(`El comprador NO es mayor de edad`);
  };
};

cliente();