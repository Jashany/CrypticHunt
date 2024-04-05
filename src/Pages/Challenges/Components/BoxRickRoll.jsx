import style from './Component.module.css';
import lock from "../../../assets/lock-solid.svg";

const RickRollbox = () => {
    const videos = [
        "https://youtu.be/dQw4w9WgXcQ?si=vbpe9ciaxMJB0Wc3",
        "https://youtu.be/YG4iTGjuoKw?si=rTYASIP3r10f8jKI",
        "https://youtu.be/ts7oLiVqwb0?si=ptjjbyeTSrH6d1bN",
        "https://youtu.be/lOBEFvzxVGc?si=DUMRhJcPqplEYzKm",
        "https://youtu.be/2Ax_EIb1zks?si=utbcC_FYO4694Mlk",
        "https://youtu.be/LjtWoDFTNO8?si=EPnBKidHpiXVBAAw",
        // Add more YouTube video links here
    ];

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    return (
        <div className={style.rickroll}>
            <a href={randomVideo} target="_blank" rel="noopener noreferrer" style={{height:'100%',width:'100%'}}>
                <div style={{height:'100%',width:'100%'}}>

                </div>
            </a>
        </div>
    );
}
 
export default RickRollbox;