import Navbar from "../../components/Navbar/Navbar";
import styles from './TeamCreate.module.css';
import { setTeamInfo } from "../../Slices/teamSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import { useJoinTeamMutation } from "../../Slices/teamApiSlice";
import { useCreateTeamMutation } from "../../Slices/teamApiSlice";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { solveQuestion } from "../../Slices/questionSlice";
const TeamCreate = () => {
    const navigate = useNavigate();
    const {teamInfo} = useSelector((state) => state.team);
    
    useEffect(() => {
        if(teamInfo){
            navigate('/team')
        }
    }, [teamInfo, navigate]);
    return ( 
        <>
            <Navbar />
        <div className={styles.main}>
            <div className={styles.innermain}>
                <JoinTeam />
                <div className={styles.line}></div>
                <CreateTeam />
            </div>
        </div>
        </>
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
    const [errors, setErrors] = useState('');
    const [join , {isloading}] = useJoinTeamMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const validate = Yup.object({
        teamId: Yup.string().required('Enter Team Code').min(5,'Team Code must be 5 characters long'),
    });
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await validate.validate({ teamId });
            try {
                try {
                    const res = await join({ teamId , userId: userInfo._id}).unwrap();
                    dispatch(setTeamInfo({ ...res }));
                    navigate('/team');
                    res.solvedQuestions.forEach(id => {
                        dispatch(solveQuestion({id}));
                    });
                } 
                catch (error) {
                    toast.error(error?.data?.message || error?.message || error);
                }
            } 
            catch (error) {
            toast.error(error?.data?.message || error?.message || error);
            }
        } catch (error) {
            
            setErrors(error.message);

        }
            
      }
    
    
    return ( 
        <div className={styles.join}>
            <h3>Join a Team</h3>
            <p>Team up and beat the cryptic hunt with your team!</p>
            <label>
            <input type="text" placeholder="Enter Team_Code" name="teamId" value={teamId} onChange={handleTeamCode} />
            {errors && <p className={styles.error}>{errors}</p>}
            </label>
            <button onClick={submitHandler}>Join Team</button>
        </div>
     );
}
 


const CreateTeam = () => {
        const [showInput, setShowInput] = useState(false);
        const [teamName, setTeamName] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [errors, setErrors] = useState('');
        const handleButtonClick = () => {
            setShowInput(true);
        };
        const handleTeamName = (e) => {
            setTeamName(e.target.value);
        };

        const validate = Yup.object({
            teamName: Yup.string().required('Enter Team Name'),
        });

        const [create , {isloading}] = useCreateTeamMutation();
        const { userInfo } = useSelector((state) => state.auth);
        const submitHandler = async (e) => {
            e.preventDefault();
            try {
                await validate.validate({ teamName });

                try {
                    try {
                        const res = await create({ teamName , userId: userInfo._id}).unwrap();
                        dispatch(setTeamInfo({ ...res }));
                        if (res.status === 200 || 201 ) {
                            navigate('/team');
                        }
                    } 
                    catch (error) {
                    toast.error(error?.data?.message || error?.message || error);
                    }
                } 
                catch (error) {
                      toast.error(error?.data?.message || error?.message || error);
                }
            } catch (error) {
                setErrors(error.message);
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
                        <input type="text" placeholder="Enter Team_Name" name="teamName" value={teamName} onChange={handleTeamName} />
                        {errors && <p className={styles.error}>{errors}</p>}
                        </label>
                        <button onClick={submitHandler}>Confirm</button>
                    </div>
                )}
            </div>
        );
    }