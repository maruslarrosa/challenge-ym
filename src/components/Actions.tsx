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
      <img src={charge} onClick={() => handleActionClick('/charge')} />
      <img src={movements} onClick={() => handleActionClick('/movements')} />
      <img src={sendPrice} onClick={() => handleActionClick('/sendprize')} />
      <img src={settings} onClick={() => handleActionClick('/settings')} />
    </>
  );
};
