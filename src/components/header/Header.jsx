import {useEffect} from 'react';
import './Header.css'; // Import CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { logout } from '../../redux/actions/AuthActions';

const Header = () => {
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  return (
    <header className={`${user?'space':''}`}>
    <div className="logoContainer">
        <Link to='/'><h1 className="logoText">Shows App</h1></Link>
      </div>
        <div className="controls">
        <nav className='menu'>
          <ul>
            <NavLink to='/dashborad'>DashBoard</NavLink>
            <NavLink to='/setup-profile'>Setup-profile</NavLink>
          </ul>
        </nav>
        <div className="log-out">
          {user&&<h3>hello {user.name.split(' ')[0]}</h3>}
          <AiOutlineLogout onClick={()=>logout(dispatch)} size={30}/>
        </div>
        </div>
    </header>
  );
};

export default Header;