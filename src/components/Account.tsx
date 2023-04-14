import { ChangeEventHandler } from 'react';
import { accountType } from '../types/user.types';

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
    <div key={index}>
      <p>{account.name}</p>
      <p>{account.email}</p>
      <input type='radio' checked={checked} onChange={change}></input>
    </div>
  );
};
