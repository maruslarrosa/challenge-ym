import { useAppSelector } from '../redux/hooks';

export const HomeBalanceComponent = () => {
  const balance = useAppSelector((state) => state.user.balance);

  return (
    <>
      <p>
        Mi saldo: <strong>${balance}</strong>
      </p>
      <p>Mi Acción:</p>
      <select>
        <option>Cargar Saldo</option>
        <option>Enviar Premio</option>
        <option>Movimientos</option>
        <option>Ajustes</option>
      </select>
    </>
  );
};
