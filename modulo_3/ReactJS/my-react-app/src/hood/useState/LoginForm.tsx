import { useState, type FormEvent } from 'react';

// 1. Definimos la forma de los datos que vamos a enviar
interface LoginData {
  email: string;
  password: string;
}

// 2. Definimos las props, usando la interfaz anterior para mayor claridad
interface LoginFormProps {
  onLogin: (data: LoginData) => void;
}

export default function LoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 3. Tipamos el evento del formulario
  // FormEvent<HTMLFormElement> es el tipo estándar para onSubmit en un form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TS infiere el evento 'change' automáticamente al ser en línea */}
      <input 
        type="email" 
        value={email} // Buena práctica: controlar el input
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email"
      /><br/>
      
      <input 
        type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)} 
        placeholder="Contraseña"
      /><br/>
      
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}