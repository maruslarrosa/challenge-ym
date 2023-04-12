import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
// Components
import {
  HomePageComponent,
  VerificationPageComponent,
} from './pages/pageindex';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/verification' element={<VerificationPageComponent />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
