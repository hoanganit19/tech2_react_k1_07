import logo from './logo.svg';
import './App.css';
//import Counter from './components/Counter';
//import Form from './components/Form';
import ToDo from './components/ToDo';
import Posts from './components/Posts';
import Theme from './components/Theme';
import ContextProvider from './context/ContextProvider';
import Home from './components/Home';
import About from './components/About';
import Counter2 from './components/Counter2';
import FormReducer from './reducer/FormReducer';
import CounterReducer from './reducer/CounterReducer';
import Validation from './reducer/Validation';
import Ref01 from './ref/Ref01';
import Ref02 from './ref/Ref02';
import Counter from './memo/Counter';
//import Products from './memo/Products';
import Contact from './callback/Contact';
import Form from './hook18/Form';
import SearchStudent from './hook18/SearchStudent';
import Products from './components/Products';
import Clock from './components/Clock';
import SearchProducts from './components/SearchProducts';
import Login from './auth/Login';
import ProductApi from './api/ProductApi';

function App() {
  return (
      <>
        {/* <FormReducer /> */}
        {/* <CounterReducer start={1} step={2}/> */}
        {/* <Validation /> */}
        {/* <Counter /> */}
        {/* <SearchStudent /> */}
        {/* <Products /> */}
        {/* <SearchProducts /> */}
        <ProductApi />
      </>
  );
}

export default App;
