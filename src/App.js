import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddUser/>
      </div>
  </Provider>
  );
}

export default App;
