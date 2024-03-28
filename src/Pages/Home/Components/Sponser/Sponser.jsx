import styles from './Sponser.module.css'
import { titleSponser,associatesponsors,powerSponser } from '../../../../Data.mjs';
const Sponser = () => {
    return ( 
        <div className={styles.main}>
            <h1>
                OUR SPONSORS
            </h1>
            <div className={styles.titleSponser}>
                <h2>
                    TITLE SPONSOR
                </h2>
                <div className={styles.titleSponserImg}>
                    {titleSponser.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img} alt={item.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.powerSponser}>
                <h2>
                    POWER SPONSORS
                </h2>
                <div className={styles.powerSponserImg}>
                    {powerSponser.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img} alt={item.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.associatesponsors}>
                <h2>
                    ASSOCIATE SPONSORS
                </h2>
                <div className={styles.associatesponsorsImg}>
                    {associatesponsors.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img} alt={item.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Sponser;