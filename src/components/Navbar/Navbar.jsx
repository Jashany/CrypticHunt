import styles from './Navbar.module.css';
import { useState } from 'react';
import eclipse from '../../assets/eclipse.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { clearTeamInfo } from '../../Slices/teamSlice';
import { logout } from '../../Slices/authslice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    const dispatch = useDispatch();
    const submitHandler = () => {
        console.log("hello");
        dispatch(logout());
        dispatch(clearTeamInfo());
    }
    return ( 
    <div className={`${isOpen ? styles.responsive: ''}`}>
        <div className={styles.Navbar}>
            <img src={eclipse} alt="" />
            <div>
                <ul className={styles.items}>
                    <li>Your_Team</li>
                    <li>Challenges</li>
                    <li>Leaderboard</li>
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
 
export default Navbar;