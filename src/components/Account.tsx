import { ChangeEventHandler } from 'react';
import { accountType } from '../types/user.types';
import styles from '../styles/withdraw.module.css';

interface accountComponentType {
  account: accountType;
  index: string;
  checked: boolean;
  change: ChangeEventHandler;
}
export const AccountComponent = ({
  account,
  index,
  checked,
  change,
}: accountComponentType): JSX.Element => {
  return (
    <div className={styles.accountContainer} key={index}>
      <div className={styles.accountDataContainer}>
        <div className={styles.initials}>{account.name.at(0)}</div>
        <div className={styles.accountData}>
          <div>{account.name}</div>
          <div className={styles.email}>{account.email}</div>
        </div>
      </div>
      <input
        className={styles.radioButton}
        type='radio'
        checked={checked}
        onChange={change}
      ></input>
    </div>
  );
};
