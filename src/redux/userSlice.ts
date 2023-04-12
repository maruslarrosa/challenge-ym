import { createSlice } from '@reduxjs/toolkit';
import { accountType, movementType, userType } from '../types/user.types';

const initialState: userType = {
  cuit: 1234567890,
  email: 'test@example.com',
  balance: 10000,
  movements: [
    {
      type: 'EXCHANGE',
      ammount: 800,
      date: '2020-01-01T00:00:00.000Z',
    },
    {
      type: 'INCOME',
      ammount: 10000,
      date: '2020-01-01T00:00:00.000Z',
    },
    {
      type: 'EXCHANGE',
      ammount: 2000,
      date: '2020-01-01T00:00:00.000Z',
    },
    {
      type: 'INCOME',
      ammount: 1000,
      date: '2020-01-01T00:00:00.000Z',
    },
    {
      type: 'EXCHANGE',
      ammount: 2500,
      date: '2020-01-01T00:00:00.000Z',
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
      let newMovement: movementType = createNewMovement(action.payload);
      state.movements.push(newMovement);
      state.balance =
        action.payload.type === 'INCOME'
          ? state.balance + newMovement.ammount
          : state.balance - newMovement.ammount;
    },
  },
});

const createNewMovement = (data: any) => {
  return {
    type: data.type,
    ammount: data.ammount,
    date: data.date,
  };
};

export const { actionSetLogged, actionSetNewBalance } = userSlice.actions;

export default userSlice.reducer;
