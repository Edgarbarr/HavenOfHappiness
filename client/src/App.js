import React, { useEffect } from "react";
import { GlobalStyle } from './global.styles';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";
const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

 
  return (
    <div className="App">
      <GlobalStyle/>
      <div className="quick-announcement">
        <a>FREE SHIPPING ON ORDERS $35 AND OVER</a>
      </div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      <div className="footer">
        <div className="footer-category">
          <h4>Customer Service</h4>
          <ul className="footer-list">
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="footer-category">
          <h4>About Us</h4>
          <ul className="footer-list">
            <li>About Haven Of Happiness</li>
            <li>Careers</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>California Supply Chains Act</li>
          </ul>
        </div>
        <div className="footer-category">
          <h4>Find Us On</h4>
          <ul className="footer-list">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="copyright">
          © 2020 Haven Of Happiness, All rights reserved.
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
