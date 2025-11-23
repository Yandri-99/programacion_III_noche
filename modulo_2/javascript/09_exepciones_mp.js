console.log("Manejo de Errores - Concesionario");

try {
    const vehiculo = JSON.parse('{"nombre":"Toyota Corolla", "precio":18000, edad:5}');
} catch (e) {
    console.log("Error detectado al cargar vehículo:", e.message);
}

try {
    console.log("Intentando abrir archivo de inventario...");
    throw new Error("Archivo de inventario no encontrado");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finalizó el intento de abrir archivo de inventario.");
}
