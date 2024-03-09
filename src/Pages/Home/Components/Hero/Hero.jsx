import styles from './Hero.module.css'
import eclipse from '../../../../assets/eclipse.png'
import logo from '../../../../assets/acmlogo.png'
const Hero = () => {
    return ( 
        <div className={styles.main}>
            <div className={styles.nav}>
                <img src={eclipse} alt="" />
                <img src={logo} alt="" />
            </div>
            <div className={styles.hero}>
                <h1>
                    CRYPTIC HUNT
                </h1>
                <h3>
                    GET STARTED
                </h3>
            </div>
        </div>
     );
}
 
export default Hero;