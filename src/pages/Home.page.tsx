import { ActionsComponent, HomeBalanceComponent } from '../components';
import { MovementComponent } from '../components/Movement';
import { useAppSelector } from '../redux/hooks';
import { movementType } from '../types/user.types';

export const HomePageComponent = () => {
  const movements: movementType[] = useAppSelector(
    (state) => state.user.movements
  ).slice(0, 5);
  return (
    <>
      <HomeBalanceComponent />;
      <ActionsComponent />
      {movements.map((movement) => (
        <MovementComponent
          type={movement.type}
          amount={movement.amount}
          date={movement.date}
        />
      ))}
    </>
  );
};
