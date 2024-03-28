import styles from './Navbar.module.css';
import { useState } from 'react';
import eclipse from '../../assets/eclipse.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { clearTeamInfo } from '../../Slices/teamSlice';
import { logout } from '../../Slices/authslice';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    const dispatch = useDispatch();
    const submitHandler = () => {
        dispatch(logout());
        dispatch(clearTeamInfo());
    }
    return ( 
    <div className={`${isOpen ? styles.responsive: ''}`}>
        <div className={styles.Navbar}>
            <Link to="/">
                <img src={eclipse} alt="" />
            </Link>
            <div>
                <ul className={styles.items}>
                    {location.pathname !== '/create' && (
                        <>
                            <NavLink to="/team">Your_Team</NavLink>
                            <NavLink to="/challenge">Challenges</NavLink>
                            <NavLink to="/leaderboard">Leaderboard</NavLink>
                        </>
                    )}
                    <button onClick={submitHandler}>Logout</button>
                </ul>

            </div>
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </div>
        </div>
    </div>
     );
}

const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to; // Check if current path matches link

    return (
        <Link to={to} className={isActive ? styles.active : ''}>
            {children}
        </Link>
    );
}
 
export default Navbar;