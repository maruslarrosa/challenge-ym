import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetLogged } from '../redux/userSlice';
import { userType } from '../types/user.types';

export const VerificationPageComponent = () => {
  const user: userType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Verification</h1>
    </div>
  );
};
