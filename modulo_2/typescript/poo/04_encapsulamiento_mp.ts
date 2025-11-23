console.log("POO - Concesionario (Encapsulamiento)");

class Usuario {
    private password: string = "12345"; 
    public username: string;

    constructor(username: string) {
        this.username = username;
    }

    autenticar(password: string): boolean {
        return password === this.password;
    }
}

const usuarioSistema = new Usuario("yandri");

const autenticacion = usuarioSistema.autenticar("12345");

if (autenticacion) {
    console.log(`Usuario ${usuarioSistema.username} exitosamente autenticado ✅`);
} else {
    console.log("Acceso denegado ❌");
}
