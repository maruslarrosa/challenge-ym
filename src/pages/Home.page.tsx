import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { actionSetHeader } from '../redux/headerSlice'
import { useEffect } from 'react'
import {
  ActionsComponent,
  HomeBalanceComponent,
  MovementComponent
} from '../components'
import { type movementType } from '../types/user.types'
import { type headerType } from '../types/header.types'
import styles from '../styles/home.module.css'

export const HomePageComponent = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const movements: movementType[] = useAppSelector(
    (state) => state.user.movements
  ).slice(0, 5)
  const userName: string = useAppSelector((state) => state.user.name)

  useEffect(() => {
    const headerData: headerType = {
      title: `¡Hola ${userName}!`,
      prev: ''
    }
    dispatch(actionSetHeader(headerData))
  }, [])

  return (
    <div className={styles.homeContainer}>
      <HomeBalanceComponent />
      <ActionsComponent />
      <div className={styles.movementsContainer}>
        <p className={styles.movementsTitle}>Últimos Movimientos</p>
        {movements.map((movement, index) => (
          <MovementComponent
            type={movement.type}
            amount={movement.amount}
            date={movement.date}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
