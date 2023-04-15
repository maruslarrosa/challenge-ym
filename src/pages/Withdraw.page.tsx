import uploadFile from '../assets/upload-file.svg';
import addAccount from '../assets/add-account.svg';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { accountType } from '../types/user.types';
import { AccountComponent } from '../components';
import { headerType } from '../types/header.types';
import { actionSetHeader } from '../redux/headerSlice';

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

  return (
    <>
      <p>Nuevas cuentas</p>
      <img src={addAccount} alt='Add Account icon' />
      <p>Agregar Cuenta</p>
      <img src={uploadFile} alt='Upload File icon' />
      <p>Subir Archivo</p>
      <input
        type='text'
        placeholder='Buscar por nombre o email'
        ref={inputRef}
        onChange={handleFilterChange}
      ></input>
      <p>Tus cuentas</p>
      {renderAccountList()}
    </>
  );
};
