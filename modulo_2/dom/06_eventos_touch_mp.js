const arenaTouch = document.getElementById("arenaTouch");

arenaTouch.addEventListener("touchstart", () => {
    arenaTouch.textContent = "Bienvenido al catálogo de vehículos";
    arenaTouch.style.background = "blue";
});

arenaTouch.addEventListener("touchend", () => {
    arenaTouch.textContent = "Toca aquí";
    arenaTouch.style.background = "green";
});

arenaTouch.addEventListener("touchmove", () => {
    arenaTouch.textContent = "Promoción: 15% en autos Chevrolet";
    arenaTouch.style.background = "brown";
});

let lastTap = 0;
arenaTouch.addEventListener("touchend", () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
        arenaTouch.textContent = "Moto - Yamaha R3";
        arenaTouch.style.background = "red";
    }
    lastTap = currentTime;
});
