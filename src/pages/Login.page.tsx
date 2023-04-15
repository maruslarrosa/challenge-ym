import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { userType } from '../types/user.types';
import { useNavigate } from 'react-router-dom';
import { headerType } from '../types/header.types';
import { actionSetHeader } from '../redux/headerSlice';

export const LoginPageComponent = () => {
  const user: userType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const headerData: headerType = {
      title: '',
      prev: '',
    };
    dispatch(actionSetHeader(headerData));
  }, []);

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
