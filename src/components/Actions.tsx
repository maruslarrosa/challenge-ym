import { useNavigate } from 'react-router-dom'
import charge from '../assets/charge.svg'
import movements from '../assets/movements.svg'
import sendPrice from '../assets/send-prize.svg'
import settings from '../assets/settings.svg'
import styles from '../styles/home.module.css'

export const ActionsComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const handleActionClick = (url: string): void => {
    navigate(url)
  }
  return (
    <>
      <p className={styles.actionTitle}>Acciones</p>
      <div className={styles.actionsContainer}>
        <div className={styles.action}>
          <img
            src={charge}
            alt='Charge icon'
            onClick={() => { handleActionClick('/charge') }}
          />
          <p>Cargar Saldo</p>
        </div>
        <div className={styles.action}>
          <img
            src={movements}
            alt='Movements icon'
            onClick={() => { handleActionClick('/movements') }}
          />
          <p>Movimientos</p>
        </div>
        <div className={styles.action}>
          <img
            src={sendPrice}
            alt='Withdraw icon'
            onClick={() => { handleActionClick('/withdraw') }}
          />
          <p>Enviar Premio</p>
        </div>
        <div className={styles.action}>
          <img
            src={settings}
            alt='Settings icon'
            onClick={() => { handleActionClick('/settings') }}
          />
          <p>Ajustes</p>
        </div>
      </div>
    </>
  )
}
