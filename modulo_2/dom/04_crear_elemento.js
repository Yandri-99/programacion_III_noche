let parrafo=null;
const btnCrear=document.getElementById('crear');
const contenedor=document.getElementById('contenedor')
btnCrear.addEventListener('click',()=>
{
parrafo=document.createElement('p');
parrafo.textContent='Parrafo dinamico';
parrafo.classList.add('parrafo');
contenedor.appendChild(parrafo);
});

const btnEliminar=document.getElementById('eliminar');
btnEliminar.addEventListener('click',()=>
{
    if(parrafo) parrafo.remove();

    const parrafos = document
        .getElementsByClassName('parrafo');
    Array.from(parrafos)
        .forEach(parrafo => parrafo.remove());
});

const btnDobleClick = document
    .getElementById('dbclick', ()=>
    {
        alert("Hizo Doble Click");
    });

const inputText = document
    .getElementById('nombre');
inputText.addEventListener('input',(e)=>
{
    console.log('Escribiendo:', e.target.value);
});

const form = document
    .getElementById('formulario');
form.addEventListener('submit',(e) =>
{
    e.preventDefault();
    alert(Formulario enviado por ${inputText.value});
});

inputText.addEventListener('keydown', (e)=>
{
    console.log('Tecla presionada:', e.key);
});
window.addEventListener('scroll',()=>
{
    console.log('Scroll detectado');
});