import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { useEffect, useRef, useState } from 'react';
import { actionSetNewBalance } from '../redux/userSlice';
import { movementType } from '../types/user.types';
import { headerType } from '../types/header.types';
import { actionSetHeader } from '../redux/headerSlice';

export const IncomePageComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const headerData: headerType = {
      title: '¿Cuánto querés ingresar?',
      prev: '/home',
    };
    dispatch(actionSetHeader(headerData));
  }, []);

  const handleAddIncome = () => {
    if (inputRef.current && amount) {
      const newMovement: movementType = {
        type: 'INCOME',
        amount: amount,
        date: new Date('2020-01-01T00:00:00.000Z'),
      };
      dispatch(actionSetNewBalance(newMovement));
      navigate('/home');
    }
  };

  const handleInputChange = () => {
    if (inputRef.current) {
      setAmount(Number(inputRef.current.value));
    }
  };

  return (
    <>
      <p>Saldo</p>
      <p>$</p>
      <input
        type='number'
        placeholder='0'
        min='0'
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button type='button' onClick={handleAddIncome} disabled={amount < 1}>
        CONTINUAR
      </button>
      {amount < 0 ? <p>Ingresá valores positivos</p> : null}
      <p></p>
    </>
  );
};
