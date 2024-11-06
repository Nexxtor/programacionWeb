// src/components/RegisterForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Llama al endpoint de registro
      await registerUser({ username, email, password });

      // Si el registro es exitoso, redirige a la página de inicio de sesión
      navigate('/login', { state: { registrationSuccess: true } });
    } catch (err) {
      console.log(err);
      setError('Error al registrar el usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  );
};

export default RegisterForm;
