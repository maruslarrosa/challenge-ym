import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { userType } from '../types/user.types';
import { useNavigate } from 'react-router-dom';

export const HomePageComponent = () => {
  const user: userType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    dispatch(actionSetLogged(true));
    navigate('/verification');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='CUIT o correo electronico'
      />

      <button onClick={handleLogin} disabled={!inputValue}>
        INICIAR SESIÓN
      </button>
    </div>
  );
};
