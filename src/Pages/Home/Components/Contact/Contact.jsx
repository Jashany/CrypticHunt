import styles from './Contact.module.css'
import photo from "../../../../assets/photo.png"
import rochak from "../../../../assets/rochak.png"
import discord from "../../../../assets/discord.png"
import shourya from "../../../../assets/shourya.jpg"
const Contact = () => {
    return ( 
        <div className={styles.main}>
            <h1>
                CONTACT US
            </h1>
            <div>
                <div>
                    <div style={{gap:"10px"}}>
                    <h3>Shourya</h3>
                    <div style={{alignItems:"center",gap:"10px"}}>
                    <img style={{height:"100%"}} src={discord} alt="" />
                    <h5>shouryade</h5>
                    </div>

                    </div>
                    <img style={{
                        borderRadius:"50%",
                        height:"110px",
                        width:"110px"
                    }} src={shourya} alt="" />
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