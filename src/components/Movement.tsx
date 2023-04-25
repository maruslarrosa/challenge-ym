import income from '../assets/income.svg'
import withdraw from '../assets/withdraw.svg'
import { type movementType } from '../types/user.types'
import styles from '../styles/home.module.css'

export const MovementComponent = ({
  type,
  amount,
  date
}: movementType): JSX.Element => {
  return (
    <div className={styles.movementComponent}>
      <div className={styles.typeContainer}>
        <img
          src={type === 'INCOME' ? income : withdraw}
          alt={type === 'INCOME' ? 'Income icon' : 'Withdraw icon'}
        />
        <p>{type === 'INCOME' ? 'Carga de Saldo' : 'Envío de Premio'}</p>
      </div>
      <div className={styles.detailContainer}>
        <div>{`${(type === 'INCOME' ? '+$' : '-$')}${amount}`}</div>
        <div>{`${date.getDate()}/${date.getMonth()}`}</div>
      </div>
    </div>
  )
}
