import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { userType } from '../types/user.types';

export const HomePageComponent = () => {
  const user: userType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <input type='text' placeholder='CUIT o correo electronico' />

      <button onClick={() => dispatch(actionSetLogged(true))}>
        INICIAR SESIÓN
      </button>
    </div>
  );
};
