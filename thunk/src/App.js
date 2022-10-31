import './App.css';
import Header from './containers/Header';
import { Route, Switch } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import AddToCart from './containers/AddToCart';
import CheckOut from './containers/CheckOut';
import Registration from './containers/Registration';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Switch>
      <Route exact path={'/'}>
        <ProductListing/>
      </Route>

      <Route exact path={'/product/:productId'}>
        <ProductDetails/>
      </Route>

      <Route exact path={'/myCart/:productId'}>
        <AddToCart/>
      </Route>

      <Route exact path={'/register'}>
        <Registration/>
      </Route>      

      <Route exact path={'/checkout'}>
        <CheckOut/>
      </Route>
    </Switch>
    
    </div>
    
  );
}

export default App;
