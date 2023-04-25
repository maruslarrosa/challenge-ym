import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { useEffect, useRef, useState } from 'react'
import { actionSetNewBalance } from '../redux/userSlice'
import { actionSetHeader } from '../redux/headerSlice'
import { type movementType } from '../types/user.types'
import { type headerType } from '../types/header.types'
import styles from '../styles/income.module.css'
import { ButtonComponent } from '../components'

export const IncomePageComponent = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [amount, setAmount] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const headerData: headerType = {
      title: '¿Cuánto querés ingresar?',
      prev: '/home'
    }
    dispatch(actionSetHeader(headerData))
  }, [])

  const handleAddIncome = (): void => {
    if ((inputRef.current != null) && (amount >= 0)) {
      const newMovement: movementType = {
        type: 'INCOME',
        amount,
        date: new Date('2020-01-01T00:00:00.000Z')
      }
      dispatch(actionSetNewBalance(newMovement))
      navigate('/home')
    }
  }

  const handleInputChange = (): void => {
    if (inputRef.current != null) {
      setAmount(Number(inputRef.current.value))
    }
  }

  return (
    <div className={styles.incomeContainer}>
      <p>Saldo</p>
      <div className={styles.amountContainer}>
        <div className={styles.addAmount}>
          <p className={styles.amountSign}>$</p>
          <input
            type='text'
            placeholder='0'
            min='0'
            ref={inputRef}
            onChange={handleInputChange}
            className={styles.inputAmount}
          />
        </div>
        <ButtonComponent
          text='CONTINUAR'
          label='Boton para ingresar dinero'
          click={handleAddIncome}
          disabled={amount < 1}
        />
        {amount < 0 ? <p>Ingresá valores positivos</p> : null}
      </div>
    </div>
  )
}
