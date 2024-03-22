import Navbar from "../../components/Navbar/Navbar";
import styles from './TeamCreate.module.css';
import { setTeamInfo } from "../../Slices/teamSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import { useJoinTeamMutation } from "../../Slices/teamApiSlice";
import { useCreateTeamMutation } from "../../Slices/teamApiSlice";
import { toast } from "react-toastify";
const TeamCreate = () => {
    return ( 
        <div className={styles.main}>
            {/* <Navbar /> */}
            <div className={styles.innermain}>
                <JoinTeam />
                <div className={styles.line}></div>
                <CreateTeam />
            </div>
        </div>
     );
}
 
export default TeamCreate;

const JoinTeam = () => {
    const [teamId , setTeamCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleTeamCode = (e) => {
        setTeamCode(e.target.value);
    };
    const [join , {isloading}] = useJoinTeamMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
        try {
        console.log(userInfo._id)
          const res = await join({ teamId , userId: userInfo._id}).unwrap();
          dispatch(setTeamInfo({ ...res }));
          console.log(res.error.status)
        if (res.data.status === 200 || 201 ) {
            navigate('/team');
        }
        } catch (error) {
        toast.error(error?.data?.message || error?.message || error);
        }
        } catch (error) {
          toast.error(error?.data?.message || error?.message || error);
        }
      }
    
    
    return ( 
        <div className={styles.join}>
            <h3>Join a Team</h3>
            <p>Team up and beat the cryptic hunt with your team!</p>
            <input type="text" placeholder="Enter Team_Code" value={teamId} onChange={handleTeamCode} />
            <button onClick={submitHandler}>Join Team</button>
        </div>
     );
}
 


const CreateTeam = () => {
        const [showInput, setShowInput] = useState(false);
        const [teamName, setTeamName] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const handleButtonClick = () => {
            setShowInput(true);
        };
        const handleTeamName = (e) => {
            setTeamName(e.target.value);
            console.log(teamName);
        };

        const [create , {isloading}] = useCreateTeamMutation();
        const { userInfo } = useSelector((state) => state.auth);
        const submitHandler = async (e) => {
            e.preventDefault();
            try {
            try {
            console.log(userInfo._id)
            console.log(teamName)
              const res = await create({ teamName , userId: userInfo._id}).unwrap();
              dispatch(setTeamInfo({ ...res }));
            if (res.status === 200 || 201 ) {
                navigate('/team');
            }
            } catch (error) {
            toast.error(error?.data?.message || error?.message || error);
            }
            } catch (error) {
              toast.error(error?.data?.message || error?.message || error);
            }
        }


        return (
            <div className={styles.create}>
                <h3>Create a Team</h3>
                
                {!showInput && (
                    <div className={styles.createinn}>
                    <p>Team up or Go Solo!<br></br> 
                    Be the leader of your own team!</p>
                    <button onClick={handleButtonClick}>Create Team</button>
                    </div>
                )}
                {showInput && (
                    <div className={styles.createinner}>
                        <label>
                            Team Name
                        <input type="text" placeholder="Enter Team_Name" value={teamName} onChange={handleTeamName} />
                        </label>
                        <button onClick={submitHandler}>Confirm</button>
                    </div>
                )}
            </div>
        );
    }