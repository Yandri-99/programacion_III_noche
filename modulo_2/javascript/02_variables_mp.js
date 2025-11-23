let auto = "Toyota Corolla";
let precioAuto = 18000;
let stockAuto = 5;

let moto = "Yamaha R3";
let precioMoto = 6800;
let stockMoto = 3;

const IVA = 0.15; 

console.log("Vehículo:", auto, "- Precio:", precioAuto, "- Stock:", stockAuto);
console.log("Vehículo:", moto, "- Precio:", precioMoto, "- Stock:", stockMoto);

let precioFinalAuto = precioAuto + (precioAuto * IVA);
let precioFinalMoto = precioMoto + (precioMoto * IVA);

console.log("Precio final Auto con IVA:", precioFinalAuto);
console.log("Precio final Moto con IVA:", precioFinalMoto);
