import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import NavBar from '../navbar/navbar.component';
const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/">
            <img className="logo-container"src="https://i.etsystatic.com/isla/e7a1a1/40347398/isla_75x75.40347398_nvu4bmdm.jpg?version=0"/>
        </Link>
        <NavBar/>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option"to="/contact">CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signIn">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropDown/>}
    </div>
);

const mapStatetoProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);