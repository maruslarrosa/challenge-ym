import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { actionSetHeader } from '../redux/headerSlice';
import { ButtonComponent } from '../components';
import { userType } from '../types/user.types';
import { headerType } from '../types/header.types';
import styles from '../styles/login.module.css';

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
    <div className={styles.loginContainer}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='CUIT o Correo Electrónico'
        className={styles.loginInput}
      />

      <ButtonComponent
        text='INICIAR SESIÓN'
        label='Pulsar para iniciar sesión'
        disabled={!inputValue}
        click={handleLogin}
      />
      <button className={styles.createAccount}>Aún no tengo cuenta</button>
    </div>
  );
};
