import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { useRef, useState } from 'react';
import { actionSetNewBalance } from '../redux/userSlice';
import { movementType } from '../types/user.types';

export const IncomePageComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddIncome = () => {
    if (inputRef.current && amount) {
      const newMovement: movementType = {
        type: 'INCOME',
        amount: amount,
        date: '2023-01-01',
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
