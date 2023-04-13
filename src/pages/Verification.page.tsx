import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const VerificationPageComponent = () => {
  const navigate = useNavigate();

  /**TODO: modularize inputs into a new VerificationInputComponent */
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);

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
      <>
        <input
          id='input1'
          ref={ref1}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input
          id='input2'
          ref={ref2}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input
          id='input3'
          ref={ref3}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input
          id='input4'
          ref={ref4}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input
          id='input5'
          ref={ref5}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input
          id='input6'
          ref={ref6}
          type='number'
          onChange={(e) => handleInputChange(e)}
        ></input>
      </>
    );
  };

  return (
    <div>
      <h1>Verification</h1>
      <p>Te acabamos de enviar un correo a </p>
      <strong>test@test.com.ar</strong>
      <p>Ingresa el código de 6 dígitos recibido</p>
      {renderVerificationDigits()}
    </div>
  );
};
