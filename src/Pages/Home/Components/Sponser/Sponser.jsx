import styles from './Sponser.module.css'
import { sponsors } from '../../../../Data.mjs';
const Sponser = () => {
    return ( 
        <div className={styles.main}>
            <h1>
                OUR SPONSERS
            </h1>
            <div className={styles.grid}>
                {sponsors.map((sponser,index)=>{
                    return(
                        <div key={index} className={styles.sponser}>
                            <img src={sponser.img} alt="" />
                        </div>
                    )
                })}
            </div>

        </div>
     );
}
 
export default Sponser;