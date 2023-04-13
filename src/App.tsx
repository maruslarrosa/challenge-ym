import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
// Components
import {
  HeaderComponent,
  HomePageComponent,
  VerificationPageComponent,
} from './pages/pageindex';

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/verification' element={<VerificationPageComponent />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
