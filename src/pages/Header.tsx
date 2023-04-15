import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export const HeaderComponent = () => {
  const { title, prev } = useAppSelector((state) => state.header);
  //const prev = useAppSelector(state => state.header.prev)
  const navigate = useNavigate();
  return (
    <div>
      {prev ? <button onClick={() => navigate(prev)}></button> : null}
      {title ? <p>{title}</p> : null}
    </div>
  );
};
