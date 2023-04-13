import uploadFile from '../assets/upload-file.svg';
import addAccount from '../assets/add-account.svg';
import { useRef, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { accountType } from '../types/user.types';

export const WithdrawPageComponent = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const linkedAccounts: accountType[] = useAppSelector(
    (state) => state.user.linkedAccounts
  );
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = () => {
    if (inputRef.current) {
      setFilter(inputRef.current?.value);
    }
  };

  const renderFilteredAccounts = () => {
    const filteredAccounts = linkedAccounts.filter((account) =>
      account.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredAccounts.map((acc) => {
      return (
        <>
          <p key={acc.email}>{acc.name}</p>
          <p>{acc.email}</p>
        </>
      );
    });
  };

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
      {!filter
        ? linkedAccounts.map((acc) => {
            return (
              <>
                <p key={acc.email}>{acc.name}</p>
                <p>{acc.email}</p>
              </>
            );
          })
        : renderFilteredAccounts()}
    </>
  );
};
