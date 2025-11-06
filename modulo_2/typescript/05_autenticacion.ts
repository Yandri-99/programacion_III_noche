interface Usuario {
    id: number,
    username: string,
    password: string
}

const usuarioParaLogin: UsuarioLogin = {
    id: 1,
    username: 'yandri',
    password: '12345',
}

function login(usuario: UsuarioLogin): void{
    if (usuario.password=='12345' && usuario.username=='yandri'){
        console.log('usuario ${usuario.username} exitosamente autenticado');
        console.log('usuario, usuario.username, exitosamente autenticado');
        console.log('usuario' + usuario.username + 'exitosamente autenticado');
    }
}