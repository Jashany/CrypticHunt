import { toast } from 'react-toastify';
import styles from './TeamPage.module.css';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { useEffect } from 'react';
import { setTeamInfo } from '../../Slices/teamSlice.js';
import { useNavigate } from 'react-router';
import { useFetchTeamDetailsMutation } from '../../Slices/teamApiSlice.js';


const TeamPage = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { teamInfo } = useSelector((state) => state.team);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getTeam , {isloading}] = useFetchTeamDetailsMutation();

    const team = teamInfo;
    const handleCopyTeamCode = () => {
        if (team) {
            navigator.clipboard.writeText(team.teamId)
                .then(() => toast("Team Code copied to clipboard"))
                .catch((error) => console.error("Failed to copy Team Code: ", error));
        }
    };

    const getteam = async () => {
        try {
            const res = await getTeam({userId: userInfo._id}).unwrap();
            dispatch(setTeamInfo({ ...res }));
        } catch (error) {
            console.error("Failed to fetch team details: ", error);
        }
    }
    useEffect(() => {
        getteam();
    }, []);
    
    return (
        <>
            <Navbar />
            <div className={styles.main}>
            <div className={styles.innermain}>
                <div>
                <h1 style={{textDecoration:"underline"}}>{team?.teamName || teamInfo?.teamName}</h1>
                <h2 onClick={handleCopyTeamCode} style={{cursor:"pointer",marginTop:"20px"}}>Team_Id: {team?.teamId || teamInfo?.teamId}</h2>
                </div>
                
                <h3 style={{fontSize:"1.5rem",marginBottom:"2rem"}}>Team Members:</h3>
                <ul>
                    {(team?.members || teamInfo?.members)?.map((member,index) => (

                        <li key={index}>{member?.email}
                        <p>{member?.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.innermain}>
                <h3>Your Team_Code is:</h3>
                <h1 onClick={handleCopyTeamCode} style={{cursor:"pointer"}}>{team?.teamId || teamInfo?.teamId}</h1>
            </div>
        </div>
        </>
     );
}
 
export default TeamPage;