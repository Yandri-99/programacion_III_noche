import LoginForm from "./LoginForm";

// Definimos la estructura de los datos que esperamos recibir.
// NOTA: En un proyecto real, usualmente exportarías esta interfaz desde 
// el archivo 'LoginForm.tsx' para no tener que escribirla dos veces.
interface LoginData {
  email: string;
  password: string;
}

export default function ParentLoginForm() {
  
  // Tipamos el argumento 'data' con la interfaz
  const handleLogin = (data: LoginData) => {
    console.log("Login exitoso:", data);
    // Ahora puedes acceder a data.email con seguridad y autocompletado
  };

  return <LoginForm onLogin={handleLogin} />;
}