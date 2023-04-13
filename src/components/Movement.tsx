import income from '../assets/income.svg';
import withdraw from '../assets/withdraw.svg';
import { movementType } from '../types/user.types';

export const MovementComponent = ({
  type,
  amount,
  date,
}: movementType): JSX.Element => {
  return (
    <>
      <img
        src={type === 'INCOME' ? income : withdraw}
        alt={type === 'INCOME' ? 'Income icon' : 'Withdraw icon'}
      />
      <p>{type === 'INCOME' ? 'Carga de Saldo' : 'Envío de Premio'}</p>
      <div>
        <p>{(type === 'INCOME' ? '+$' : '-$') + amount}</p>
        <p>{date}</p>
      </div>
    </>
  );
};
