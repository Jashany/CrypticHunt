import { useEffect,useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useCheckAnswerMutation } from "../../Slices/questionApiSlice";
import { solveQuestion } from "../../Slices/questionSlice";
import styles from "./Question.module.css";
import { toast } from "react-toastify";
import arrow from '../../assets/arrow.png'
import { setTeamInfo } from "../../Slices/teamSlice";
const Question = () => {
    const [data , setdata] = useState({});
    const [message , setMessage] = useState('');
    const { id } = useParams();
    const [answer,setAnswer] = useState('');
    const [checkAnswer , {isloading}] = useCheckAnswerMutation();
    const { teamInfo } = useSelector((state) => state.team);
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://cryptic-api.acmtiet.com/api/challenge/getques/${id}`)
        .then(res => res.json())
        .then(data => {
            setdata(data);
        })
        .catch(err => console.log(err))
    },[])


    const handleSubmit = async() => {
        try {
            const res = await checkAnswer({ teamID: teamInfo.teamId , id , answer }).unwrap();
            if(res.status == 'success'  ){
                dispatch(solveQuestion({id}));
                toast.success("The Answer is correct")
                const updatedTeamInfo = { ...teamInfo, score: teamInfo.score + data?.score };
                dispatch(setTeamInfo(updatedTeamInfo));
                setTimeout(() => {
                    navigate('/challenge')
                }, 1000);
            }
            else{
                toast.error("The Answer is incorrect")
            }
            
        } catch (error) {
            toast.error(error?.data?.message || error?.message || error);
        }
    }
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handledebounce = () => {
        if (!isSubmitting) {
            setIsSubmitting(true);
            handleSubmit(); // Call your function here
            setTimeout(() => {
                setIsSubmitting(false);
            }, 4000); // Set timeout for 30 seconds
        }
    };

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }
    return ( 
        <div className={styles.main}>
            <img src={arrow} className={styles.arrow} onClick={() => navigate('/challenge')} />
            <h1 className={styles.question}>Score: {data?.score}</h1>
            <div className={styles.box}>
             {data?.question && <div className={styles.questio} dangerouslySetInnerHTML={{ __html: data?.question }} />}
             {data?.link  && <a href={data?.link} target="_blank">
              <button className={styles.button}>Go to Link</button>
            </a> 
            }
            
            <input type="text" name="answer" value={answer} onChange={handleChange} />
            <button onClick={handledebounce}>Submit Answer</button>
            </div>
        </div>
     );
}
 
export default Question;