const caja = document.getElementById("caja");

caja.addEventListener("mouseover", () => {
    caja.textContent = "Promoción: 10% en motos Yamaha";
    caja.style.background = "blue";
});

caja.addEventListener("mouseout", () => {
    caja.textContent = "Vehículo";
    caja.style.background = "green";
});

caja.addEventListener("click", () => {
    caja.textContent = "Auto - Toyota Corolla";
    caja.style.background = "brown";
});

caja.addEventListener("dblclick", () => {
    caja.textContent = "Moto - Honda CB500";
    caja.style.background = "red";
});
