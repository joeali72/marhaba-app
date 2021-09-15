import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductDetailsPage from "./Pages/ProductDetails";
import CartPage from './Pages/Cart';
import CheckOutPage from "./Pages/Checkout";
import ScrollToTop from './Components/Util/ScrollToTop';


// Import All Css Files Here:-
import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/main.scss";

export default function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetailsPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckOutPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      <Footer />
      <ScrollToTop />
    </>
  );
}
