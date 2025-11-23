try{
    const user = JSON.parse('{"name":"pedro", edad:25}');
}catch(e){
console.log("Error Detectado:", e.message);
}

/*otro Metodo*/
try{
    console.log("Intentando abrir archivo ...");
    throw new Error('Archivo No Encontrado');
}catch(error){
    console.log("Error:", error.message); //esta linea es opcional
}finally{
    console.log("Finalizo El Intento De Abrir Archivo");
}