import { useNavigate } from 'react-router-dom';
import charge from '../assets/charge.svg';
import movements from '../assets/movements.svg';
import sendPrice from '../assets/send-prize.svg';
import settings from '../assets/settings.svg';

export const ActionsComponent = () => {
  const navigate = useNavigate();
  const handleActionClick = (url: string) => {
    navigate(url);
  };
  return (
    <>
      <img
        src={charge}
        alt='Charge icon'
        onClick={() => handleActionClick('/charge')}
      />
      <img
        src={movements}
        alt='Movements icon'
        onClick={() => handleActionClick('/movements')}
      />
      <img
        src={sendPrice}
        alt='Withdraw icon'
        onClick={() => handleActionClick('/withdraw')}
      />
      <img
        src={settings}
        alt='Settings icon'
        onClick={() => handleActionClick('/settings')}
      />
    </>
  );
};
