console.log(`Trabajando con listas`);

const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";

console.log(Bogota, Lima, Santiago, BuenosAires);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");
console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];

ciudadesMasVendidas.push("Sao Paulo");
ciudadesMasVendidas.push("Buenos Aires");

console.log(ciudadesMasVendidas);

console.log("Ciudades disponibles: " + ciudadesDisponibles[2]);
console.log(ciudadesMasVendidas[0]);

const cantidadCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadCiudades} ciudades disponibles.`);

ciudadesDisponibles.splice(1,1);
console.log(ciudadesDisponibles);