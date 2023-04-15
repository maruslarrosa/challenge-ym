import { useEffect } from 'react';
import { ActionsComponent, HomeBalanceComponent } from '../components';
import { MovementComponent } from '../components/Movement';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { movementType } from '../types/user.types';
import { headerType } from '../types/header.types';
import { actionSetHeader } from '../redux/headerSlice';

export const HomePageComponent = () => {
  const dispatch = useAppDispatch();
  const movements: movementType[] = useAppSelector(
    (state) => state.user.movements
  ).slice(0, 5);
  const userName: string = useAppSelector((state) => state.user.name);

  useEffect(() => {
    const headerData: headerType = {
      title: `¡Hola ${userName}!`,
      prev: '',
    };
    dispatch(actionSetHeader(headerData));
  }, []);

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
