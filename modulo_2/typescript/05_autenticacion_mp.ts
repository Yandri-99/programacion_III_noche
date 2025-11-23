console.log("LOGIN - Concesionario");

/*Definición de interfaz para Usuario*/
interface Usuario {
    id: number;
    username: string;
    password: string;
}

/*Usuario para login*/
const usuarioParaLogin: Usuario = {
    id: 1,
    username: "yandri",
    password: "12345"
};

/*Función de login*/
function login(usuario: Usuario): void {
    if (usuario.password === "12345" && usuario.username === "yandri") {
        console.log(`Usuario ${usuario.username} exitosamente autenticado ✅`);
        console.log("Usuario:", usuario.username, "exitosamente autenticado ✅");
        console.log("Usuario " + usuario.username + " exitosamente autenticado ✅");
    } else {
        console.log("Credenciales incorrectas ❌");
    }
}

/*Ejecutar login*/
login(usuarioParaLogin);
