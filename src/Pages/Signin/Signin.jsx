import styles from './Signin.module.css'
import { useEffect } from 'react';
import gsap from 'gsap';
import eclipse from '../../assets/eclipse.png'
import { Link } from 'react-router-dom';
const Signin = () => {

    useEffect(() => {
        const animateHeading = () => {
          const heading = document.querySelector(`.${styles.innermain} h1`);
          const text = heading.innerText;
          const duration = 0.5;
    
          // Split the heading text into an array of characters
          const characters = text.split('');
    
          // Clear the heading content
          heading.innerText = '';
    
          // Use GSAP to animate each character
          characters.forEach((char, index) => {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    
            // Create a timeline for each character
            const tl = gsap.timeline({ delay: index * 0.3});
    
            // Randomize the character initially
            tl.to({}, duration, { onUpdate: () => (heading.innerText += randomChar) });
    
            // Transition to the actual character
            tl.to({}, duration, { onUpdate: () => (heading.innerText = text.substr(0, index + 1)) });
          });
        };
    
        animateHeading();
      }, []);
    return ( 
        <div className={styles.main}>
            <div>

            <img src={eclipse} alt="" />
            </div>
            <div className={styles.innermain}>
                <h1>
                    CRYPTIC HUNT
                </h1>
                <div className={styles.form}>
                    <label>
                        Email
                        <input type='email'
                        placeholder='yourname@email.com'></input>
                    </label>
                    <label>
                        Password
                        <input type='password' placeholder='Your_Password'></input>
                    </label>
                    <button>Login</button>
                    <Link to='/signup' style={{textDecoration:"none"}}>
                    <p>Haven't signed up yeh? Sign Up!</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Signin ;