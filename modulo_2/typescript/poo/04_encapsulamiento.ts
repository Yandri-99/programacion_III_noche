class Usuario{
    private password: string = '1245';
    public username: string;
    constructor(username:string){
        this.username=username
    }
    autenticar(password: string): boolean{
        return password==this.password;
    }
}
const user = new Usuario('yandri');
const autenticacion = user.autenticar('12345');
if (autenticacion){
    console.log('usuario existosamente autenticado');
} else{
    console.log('acceso denegado');
}
