import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
// Components
import {
  HeaderComponent,
  LoginPageComponent,
  VerificationPageComponent,
} from './pages/pageindex';

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginPageComponent />} />
          <Route path='/verification' element={<VerificationPageComponent />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
