import React, { useContext } from 'react'
import Style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Categories from './../Categories/Categories';
import Products from './../Products/Products';
import Register from './../Register/Register';
import logo from '../../Assets/Images/freshcart-logo.svg';
import { UserContext } from '../../Context/UserContext';


export default function Navbar() {
  let Navigate = useNavigate(); 
  let {userToken, setUserToken}= useContext(UserContext);
  function logOut(){
    setUserToken(null);
    localStorage.removeItem('userToken');
    Navigate('/login');
  }
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={logo} alt="fresh cart logo" />
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userToken !==null ? <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to='/brands'>Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/wishlist'>Wishlist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/cart'>Cart</Link>
        </li>
        
      </ul>: ''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
          {userToken==null? <>
            <li className="nav-item">
          <Link className="nav-link active" to="/login">login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">register</Link>
        </li>
          </>:''}
        
       
        {userToken !==null? <li className="nav-item">
          <span onClick={()=>logOut()} className="nav-link cursor-pointer">Logout</span>
        </li>: ''}
       
        
      </ul>
    </div>
  </div>
</nav>
     </>
}
