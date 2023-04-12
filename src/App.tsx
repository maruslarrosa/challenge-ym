import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HomePageComponent } from './pages/Home.page';

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePageComponent />
      </Provider>
    </>
  );
}

export default App;
