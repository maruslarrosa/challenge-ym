import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { userType } from '../types/user.types';
import { useNavigate } from 'react-router-dom';

export const HomePageComponent = () => {
  const user: userType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(actionSetLogged(true));
    navigate('/verification');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input type='text' placeholder='CUIT o correo electronico' />

      <button onClick={handleLogin}>INICIAR SESIÓN</button>
    </div>
  );
};
