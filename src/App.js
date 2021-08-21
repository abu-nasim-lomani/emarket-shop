import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store';
import Details from './components/Details';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import Reset from './components/auth/Reset';
import Error404 from './components/error404/Error404';
import Checkout from './components/checkout/Checkout';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router className="">
      <Provider store={store}>
        <Nav />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/shop" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <PrivateRoute path="/checkout" exact>
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/profile" exact>
            <Profile />
          </PrivateRoute>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/registation" exact component={RegistrationPage} />
          <Route path="/reset" exact component={Reset} />
          <Route path="/details/:id" exact component={Details} />

          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
