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

function App() {
  return (
    <ContextProvider>
        <Home />
        <About />
    </ContextProvider>
  );
}

export default App;
