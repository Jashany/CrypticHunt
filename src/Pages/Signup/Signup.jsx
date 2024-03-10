import styles from './Signup.module.css'
import eclipse from '../../assets/eclipse.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {

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
                    <label>
                        Phone Number
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                    </label>
                    <label>
                        College
                        <input type='text' placeholder='Eg.Thapar University'></input>
                    </label>
                    <div style={{display:"flex",gap:"30px"}}>
                    <label>
                        Year of Graduation
                        <input type='number' placeholder='Eg. 2025, 2026'></input>
                    </label>
                    <label>
                        Branch
                        <input type='text' placeholder='Eg. COE'></input>
                    </label>
                    </div>
                    <button>Login</button>
                    <Link to="/signin" style={{textDecoration:"none"}}><p>Already onboard? Login!</p></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Signup ;