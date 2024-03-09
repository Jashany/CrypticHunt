import styles from './Contact.module.css'
import photo from "../../../../assets/photo.png"
const Contact = () => {
    return ( 
        <div className={styles.main}>
            <h1>
                CONTACT US
            </h1>
            <div>
                <div>
                    <div>
                    <h3>Siddhant</h3>
                    <div>
                    <img src="" alt="" />
                    <h5>wakeeuppsidd</h5>
                    </div>

                    </div>
                    <img src={photo} alt="" />
                </div>

                <p>
                X
                </p>
                
                <div>
                    <img src={photo} alt="" />
                    <div>

                    <h3>Rochak</h3>
                    <div>

                    <h5>pyrosama07</h5>
                    <img src="" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;