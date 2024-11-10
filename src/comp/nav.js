import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import {Link} from 'react-router-dom';
import './nav.css'
const Nav = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Бесплатная доставка от 10 000 руб</p>
            </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
             <Link className='logotip' to='/'> <p>ЭлектроСила</p></Link>
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='поиск' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button>
          </div>
          {
            isAuthenticated ? 
            
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Выйти</button>
              </div>
            </div>
          :
     
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Войти</button>
            </div>
          </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
  
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Пожалуйста войдите в систему</p>
              </div>
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              {/* <li><Link to='/' className='link'>Home</Link></li> */}
              <li><Link to='/shop' className='link'>Магазин</Link></li>
              <li><Link to='/cart' className='link'>Корзина</Link></li>
              <li><Link to='/about' className='link'>О нас</Link></li>
              <li><Link to='/contact' className='link'>Свяжитесь с нами</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>Кэшбэк 10% на все телефоны</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Nav