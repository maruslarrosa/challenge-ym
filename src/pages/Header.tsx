import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import chevronLeft from '../assets/chevron-left.png'
import styles from '../styles/header.module.css'

export const HeaderComponent = (): JSX.Element => {
  const { title, prev } = useAppSelector((state) => state.header)

  const navigate = useNavigate()
  return (
    <div className={styles.headerContainer}>
      {(prev !== '')
        ? (
        <img
          className={styles.goBackButton}
          src={chevronLeft}
          onClick={() => { navigate(prev) }}
        ></img>
          )
        : null}
      {(title !== '') ? <p className={styles.headerTitle}>{title}</p> : null}
    </div>
  )
}
