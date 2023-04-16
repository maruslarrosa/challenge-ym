import uploadFile from '../assets/upload-file.svg';
import addAccount from '../assets/add-account.svg';
import lens from '../assets/lens.svg';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actionSetHeader } from '../redux/headerSlice';
import { accountType } from '../types/user.types';
import { headerType } from '../types/header.types';
import { AccountComponent, ButtonComponent } from '../components';
import styles from '../styles/withdraw.module.css';

export const WithdrawPageComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const linkedAccounts: accountType[] = useAppSelector(
    (state) => state.user.linkedAccounts
  );
  const [filter, setFilter] = useState<string>('');
  const [checked, setChecked] = useState<string>('');

  useEffect(() => {
    const headerData: headerType = {
      title: '¿A quién querés premiar?',
      prev: '/home',
    };
    dispatch(actionSetHeader(headerData));
  }, []);

  const handleFilterChange = () => {
    if (inputRef.current) {
      setFilter(inputRef.current?.value);
    }
  };

  const renderAccountList = () => {
    const accounts = linkedAccounts.filter((account) =>
      account.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (accounts.length) {
      return accounts.map((acc) => {
        return (
          <AccountComponent
            key={acc.email}
            account={acc}
            index={acc.email}
            checked={checked === acc.email}
            change={() => handleChange(acc.email)}
          />
        );
      });
    } else {
      return <p>No hay resultados que coincidan con tu búsqueda</p>;
    }
  };

  const handleChange = (index: string) => setChecked(index);

  const handleWithdrawalClick = () => {};

  return (
    <div className={styles.withdrawContainer}>
      <p className={styles.withdrawTitle}>Nuevas cuentas</p>
      <div className={styles.withdrawActionsContainer}>
        <div className={styles.withdrawAction}>
          <img src={addAccount} alt='Add Account icon' />
          <p>Agregar Cuenta</p>
        </div>
        <div className={styles.withdrawAction}>
          <img src={uploadFile} alt='Upload File icon' />
          <p>Subir Archivo</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <img src={lens} alt='Icono de lupa' />
        <input
          type='text'
          placeholder='Buscar por nombre o email.'
          ref={inputRef}
          onChange={handleFilterChange}
          className={styles.searchInput}
        ></input>
      </div>
      <p>Tus cuentas</p>
      {renderAccountList()}
      <div className={styles.withdrawButton}>
        <ButtonComponent
          text='CONTINUAR'
          label='Boton para enviar premio'
          disabled={!checked}
          click={handleWithdrawalClick}
        />
      </div>
    </div>
  );
};
