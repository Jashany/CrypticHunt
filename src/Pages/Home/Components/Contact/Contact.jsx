import styles from './Contact.module.css'
import photo from "../../../../assets/photo.png"
import rochak from "../../../../assets/rochak.png"
import discord from "../../../../assets/discord.png"
const Contact = () => {
    return ( 
        <div className={styles.main}>
            <h1>
                CONTACT US
            </h1>
            <div>
                <div>
                    <div style={{gap:"10px"}}>
                    <h3>Siddhant</h3>
                    <div style={{alignItems:"center",gap:"10px"}}>
                    <img style={{height:"100%"}} src={discord} alt="" />
                    <h5>wakeeuppsidd</h5>
                    </div>

                    </div>
                    <img src={photo} alt="" />
                </div>

                <p>
                X
                </p>
                
                <div >
                    <img src={rochak} alt="" />
                    <div style={{gap:"10px"}}>

                    <h3>Rochak</h3>
                    <div style={{alignItems:"center",gap:"10px"}}>

                    <h5>pyrosama07</h5>
                    <img style={{height:"100%"}} src={discord} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;