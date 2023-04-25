import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { actionSetHeader } from '../redux/headerSlice'
import { type headerType } from '../types/header.types'
import styles from '../styles/verification.module.css'
import { ButtonComponent } from '../components'

export const VerificationPageComponent = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const headerData: headerType = {
      title: 'Verificación',
      prev: '/'
    }
    dispatch(actionSetHeader(headerData))
  }, [])

  /** TODO: modularize inputs into a new VerificationInputComponent
   *
   * Don’t call Hooks inside loops, conditions, or nested functions.
   * Instead, always use Hooks at the top level of your React function.
   * By following this rule, you ensure that Hooks are called in the same order each time a component renders.
   */

  const ref1 = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)
  const ref3 = useRef<HTMLInputElement>(null)
  const ref4 = useRef<HTMLInputElement>(null)
  const ref5 = useRef<HTMLInputElement>(null)
  const ref6 = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case 'input1':
        if ((ref1.current?.value) != null) {
          ref2.current?.focus()
        }
        break
      case 'input2':
        if ((ref2.current?.value) != null) {
          ref3.current?.focus()
        }
        break
      case 'input3':
        if ((ref3.current?.value) != null) {
          ref4.current?.focus()
        }
        break
      case 'input4':
        if ((ref4.current?.value) != null) {
          ref5.current?.focus()
        }
        break
      case 'input5':
        if ((ref5.current?.value) != null) {
          ref6.current?.focus()
        }
        break
      case 'input6':
        if ((ref6.current?.value) != null) {
          navigate('/home')
        }
        break
      default:
        break
    }
  }

  const renderVerificationDigits = (): JSX.Element => {
    return (
      <div className={styles.verificationDigitsContainer}>
        <input
          id='input1'
          ref={ref1}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input2'
          ref={ref2}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input3'
          ref={ref3}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input4'
          ref={ref4}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input5'
          ref={ref5}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
        <input
          id='input6'
          ref={ref6}
          type='text'
          inputMode='numeric'
          onChange={(e) => { handleInputChange(e) }}
          className={styles.verificationDigit}
        ></input>
      </div>
    )
  }

  const submitVerificationCode = (): void => {}

  return (
    <div className={styles.verificationContainer}>
      <div className={styles.verificationInformation}>
        <p className={styles.verificationText}>
          Te acabamos de enviar un correo a{' '}
        </p>
        <p className={styles.verificationEmail}>test@test.com.ar</p>
        <p className={styles.verificationText}>
          Ingresa el código de 6 dígitos recibido
        </p>
      </div>
      {renderVerificationDigits()}
      <ButtonComponent
        text='REENVIAR CÓDIGO'
        label='Botón para reenviar código de verificación'
        disabled={false}
        click={submitVerificationCode}
      />
    </div>
  )
}
