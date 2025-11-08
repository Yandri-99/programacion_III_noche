const arenaTouch = document.getElementById('arenaTouch');
arenaTouch.addEventListener(touchstart,() => {
    arenaTouch.style.background = 'deepskblue';
});

arenaTouch.addEventListener ('touchend', () => {
    arenaTouch.style.background = 'skyblue';
    alert("¡Touch Finalizado");
});

