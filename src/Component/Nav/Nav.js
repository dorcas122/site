import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import {AiOutlineHeart  } from 'react-icons/ai';
import {BsBagCheckFill } from 'react-icons/bs';
import {AiOutlineUser } from 'react-icons/ai';
import {BiSolidLogInCircle} from 'react-icons/bi';
import {BiSolidLogOutCircle} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css"
const Nav = () => {
  const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();
  return (
    <>
  <div className='free'>
    <div className='icon'>
    <FaTruckMoving/>   
    </div>

    <p>360MakeOvers</p>
  </div>
  <div className='main_header'>
     <div className='container'>
     <div className='logo'>
         <img src='./img/logo1.png'alt='logo' height="50px" width="100px"></img>
     </div>
     <div className='search_box'>
      <input type='text' value="" placeholder='Search your product...' autoComplete='off'></input>
      <button>Search</button>
     </div>
     <div className='icon'>
      {
       isAuthenticated &&
       (
        <div className='account'>
        <div className='user_icon'>
        <AiOutlineUser/>
        </div>
        <p>Hello,{user.name}</p>
      </div>
       ) 
      }
      
      <div className='second_icon'>
        <Link to="/" className='link'><AiOutlineHeart/></Link>
        <Link to="/cart"className='link'><BsBagCheckFill/></Link>
      </div>
     </div>
     </div>
  </div>
  <div className='header'>
    <div className='container'>
      <div className='nav'>
      <ul>
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>

          <li>
            <Link to='/product' className='link'>Product</Link>
          </li>

          <li>
            <Link to='/about' className='link'>About</Link>
          </li>
          
          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
         </ul>
         </div>
         <div className='auth'>
          {
           isAuthenticated ?
           <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>< BiSolidLogOutCircle/></button>:
           <button onClick={() => loginWithRedirect()}><BiSolidLogInCircle/></button>
          }
         
        
         </div>
    </div>
    </div>
    </>
  )
}

export default Nav