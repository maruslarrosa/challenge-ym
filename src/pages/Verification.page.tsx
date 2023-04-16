import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { actionSetHeader } from '../redux/headerSlice';
import { headerType } from '../types/header.types';
import styles from '../styles/verification.module.css';
import { ButtonComponent } from '../components';

export const VerificationPageComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const headerData: headerType = {
      title: 'Verificación',
      prev: '/',
    };
    dispatch(actionSetHeader(headerData));
  }, []);

  /**TODO: modularize inputs into a new VerificationInputComponent */
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'input1':
        if (ref1.current?.value) {
          ref2.current?.focus();
        }
        break;
      case 'input2':
        if (ref2.current?.value) {
          ref3.current?.focus();
        }
        break;
      case 'input3':
        if (ref3.current?.value) {
          ref4.current?.focus();
        }
        break;
      case 'input4':
        if (ref4.current?.value) {
          ref5.current?.focus();
        }
        break;
      case 'input5':
        if (ref5.current?.value) {
          ref6.current?.focus();
        }
        break;
      case 'input6':
        if (ref6.current?.value) {
          navigate('/home');
        }
        break;
      default:
        break;
    }
  };

  const renderVerificationDigits = () => {
    return (
      <div className={styles.verificationDigitsContainer}>
        <input
          id='input1'
          ref={ref1}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input2'
          ref={ref2}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input3'
          ref={ref3}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input4'
          ref={ref4}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input5'
          ref={ref5}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input6'
          ref={ref6}
          type='number'
          onChange={(e) => handleInputChange(e)}
          className={styles.verificationDigit}
        ></input>
      </div>
    );
  };

  const submitVerificationCode = () => {};

  return (
    <div className={styles.verificationContainer}>
      <div className={styles.verificationInformation}>
        <p className={styles.verificationText}>
          Te acabamos de enviar un correo a{' '}
        </p>
        <p className={styles.verificationEmail}>test@test.com.ar</p>
        <p className={styles.verificationText}>
          Ingresa el código de 6 dígitos recibido
        </p>
      </div>
      {renderVerificationDigits()}
      <ButtonComponent
        buttonRef={buttonRef}
        text='REENVIAR CÓDIGO'
        label='Botón para reenviar código de verificación'
        disabled={false}
        click={submitVerificationCode}
      />
    </div>
  );
};
