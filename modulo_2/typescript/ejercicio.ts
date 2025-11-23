interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  contraseña: string;
}

const usuarios: Usuario[] = [
  { id: 1, nombre: 'Pedro', correo: 'pedro@gmail.com', contraseña: '1234' },
  { id: 2, nombre: 'Yandri', correo: 'yan@gmail.com', contraseña: 'abcd' }
];

function verificarUsuario(nombre: string, contraseña: string): string {
  const usuarioEncontrado = usuarios.find(u => u.nombre === nombre);
  if (!usuarioEncontrado) {
    return 'Usuario no encontrado';
  }
  if (usuarioEncontrado.contraseña === contraseña) {
    return 'Contraseña correcta. Acceso concedido';
  } else {
    return 'Contraseña incorrecta';
  }
}

console.log(verificarUsuario('Pedro', '1234')); 
console.log(verificarUsuario('Yandri', '1234'));   
console.log(verificarUsuario('Luis', 'xyz'));  
