import { useAppSelector } from '../redux/hooks'
import styles from '../styles/home.module.css'

export const HomeBalanceComponent = (): JSX.Element => {
  const balance = useAppSelector((state) => state.user.balance)

  return (
    <div className={styles.balanceContainer}>
      <p>
        Mi saldo: <strong className={styles.balanceAmount}>${balance}</strong>
      </p>
      <div className={styles.actionSelectorContainer}>
        <p>Mi Acción:</p>
        <select className={styles.actionSelector}>
          <option className={styles.option}>Cargar Saldo</option>
          <option className={styles.option}>Enviar Premio</option>
          <option className={styles.option}>Movimientos</option>
          <option className={styles.option}>Ajustes</option>
        </select>
      </div>
    </div>
  )
}
