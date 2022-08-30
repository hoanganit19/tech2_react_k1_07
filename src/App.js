import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import ToDo from './components/ToDo';
import Posts from './components/Posts';
import Theme from './components/Theme';
import ContextProvider from './context/ContextProvider';
import Home from './components/Home';
import About from './components/About';
import Counter2 from './components/Counter2';
import FormReducer from './reducer/FormReducer';
import CounterReducer from './reducer/CounterReducer';

function App() {
  return (
      <>
        {/* <FormReducer /> */}
        <CounterReducer start={1} step={2}/>
      </>
  );
}

export default App;
