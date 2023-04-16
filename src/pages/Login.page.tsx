import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { actionSetHeader } from '../redux/headerSlice';
import { ButtonComponent } from '../components';
import { userType } from '../types/user.types';
import { headerType } from '../types/header.types';

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

      <ButtonComponent
        text='INICIAR SESIÓN'
        label='Pulsar para iniciar sesión'
        disabled={!inputValue}
        click={handleLogin}
      />
    </div>
  );
};
