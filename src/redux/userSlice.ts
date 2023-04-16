import { createSlice } from '@reduxjs/toolkit';
import { accountType, movementType, userType } from '../types/user.types';

const initialState: userType = {
  cuit: 1234567890,
  email: 'test@example.com',
  name: 'Test',
  balance: 10000,
  movements: [
    {
      type: 'WITHDRAW',
      amount: 800,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'INCOME',
      amount: 10000,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'WITHDRAW',
      amount: 2000,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'INCOME',
      amount: 1000,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'WITHDRAW',
      amount: 2500,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'WITHDRAW',
      amount: 2000,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'INCOME',
      amount: 1000,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
    {
      type: 'WITHDRAW',
      amount: 2500,
      date: new Date('2020-01-01T00:00:00.000Z'),
    },
  ],
  linkedAccounts: [
    {
      name: 'Test Name 1',
      email: 'testName1@example.com',
    },
    {
      name: 'Test Name 2',
      email: 'testName2@example.com',
    },
    {
      name: 'Test Name 3',
      email: 'testName3@example.com',
    },
    {
      name: 'Test Name 4',
      email: 'testName4@example.com',
    },
    {
      name: 'Test Name 5',
      email: 'testName5@example.com',
    },
  ],
  logged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionSetLogged: (state, action) => {
      state.logged = action.payload;
    },
    actionSetNewBalance: (state, action) => {
      let newMovement: movementType = action.payload;
      state.movements.unshift(newMovement);
      state.balance =
        action.payload.type === 'INCOME'
          ? state.balance + newMovement.amount
          : state.balance - newMovement.amount;
    },
  },
});
export const { actionSetLogged, actionSetNewBalance } = userSlice.actions;

export default userSlice.reducer;
