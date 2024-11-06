import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const location = useLocation();
  const registrationSuccess = location.state?.registrationSuccess || false;

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {registrationSuccess && <p style={{ color: 'green' }}>Registro exitoso. Por favor, inicia sesión.</p>}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
