console.log(` <> Trabajando con loops <> `);

// destinos -------------------<>

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Mazatlán");
ciudadesDisponibles.push("Santiago");
ciudadesDisponibles.push("Madrid");
ciudadesDisponibles.push("Lima");
// console.log(ciudadesDisponibles);


// edad / acompañado ------------------<>

// variables ***
const edadCliente = 15;
const estaAcompanado = false;
const tieneBoleto = true;
const ciudadDestino = "Mazatlán";
let i = 0;
let destinoDisponible = false;
let clienteAutorizado = false;
// console.log(ciudadesDisponibles);

clienteAutorizado = (edadCliente >= 18 || estaAcompanado);

// funciones ***

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
    console.log(`Revisión finalizada. El cliente dispone de boleto y edad suficiente. Gracias por viajar con Java Air. Feliz viaje.`)
  } else {
    console.log(`El cliente no dispone de boleto y/o edad suficiente. Embarque no autorizado.`)
  }
};



// while (i < ciudadesDisponibles.length) {
  //   if (ciudadesDisponibles[i] == ciudadDestino) {
    //     destinoDisponible = true;
    //     break;
    //   }
    //   i++;
    // };
    
    for(i = 0; i < ciudadesDisponibles.length; i++) {
      if (ciudadesDisponibles[i] == ciudadDestino) {
    destinoDisponible = true;
    break;
  }
};

if(clienteAutorizado && destinoDisponible) {

  console.log(`Venta autorizada. Cliente cumple requisitos.`);
  console.log(`Destino seleccionado: ` + ciudadesDisponibles[i] + ".");  
  console.log(`Destino disponible`, destinoDisponible);

} else if (clienteAutorizado) {
  console.log(`Venta no es posible. Cliente autorizado; destino no disponible.`);
} else {
  console.log(`Venta no autorizada.`);
};

abordaje();