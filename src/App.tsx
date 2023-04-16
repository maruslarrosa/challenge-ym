import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
// Components
import {
  HeaderComponent,
  HomePageComponent,
  IncomePageComponent,
  LoginPageComponent,
  VerificationPageComponent,
  WithdrawPageComponent,
} from './pages/pageindex';

function App() {
  return (
    //TODO move style to separate css module
    <div style={{ height: '100vh' }}>
      <Provider store={store}>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPageComponent />} />
          <Route path='/verification' element={<VerificationPageComponent />} />
          <Route path='/home' element={<HomePageComponent />} />
          <Route path='/charge' element={<IncomePageComponent />} />
          <Route path='/withdraw' element={<WithdrawPageComponent />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
