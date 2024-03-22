import styles from './Signin.module.css'
import { useEffect,useState } from 'react';
import gsap from 'gsap';
import eclipse from '../../assets/eclipse.png'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../../Slices/authslice';
import { useLoginMutation } from '../../Slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useFetchTeamDetailsMutation } from '../../Slices/teamApiSlice';
import { setTeamInfo } from '../../Slices/teamSlice';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login , {isloading}] = useLoginMutation();
    const [teamDetails,{issloading}] = useFetchTeamDetailsMutation();
    
    const { userInfo } = useSelector((state) => state.auth);
    const { teamInfo } = useSelector((state) => state.team);



    useEffect(() => {
        const animateHeading = () => {
          const heading = document.querySelector(`.${styles.innermain} h1`);
          const text = heading.innerText;
          const duration = 0.5;
          const characters = text.split('');
          heading.innerText = '';
    
          characters.forEach((char, index) => {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            const tl = gsap.timeline({ delay: index * 0.3});
    
            tl.to({}, duration, { onUpdate: () => (heading.innerText += randomChar) });
            tl.to({}, duration, { onUpdate: () => (heading.innerText = text.substr(0, index + 1)) });
          });
        };
    
        animateHeading();
      }, []);

      useEffect(() => {
        if (userInfo) {
          if(teamInfo) {
            navigate('/team');
          } else{
          navigate('/create');
        }
        }
      }, [userInfo, navigate]);

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          if(res._id){
            console.log("hey there")
            console.log(res._id)
            const  res2 = await teamDetails({userId: res._id}).unwrap();
            dispatch(setTeamInfo({ ...res2 }));
            navigate('/team');
          }else
          navigate('/create');
        } catch (error) {
          toast.error(error?.data?.message || error?.message || error);
          
        }
      }
    return ( 
        <div className={styles.main}>
            <div>

            <img src={eclipse} alt="" />
            </div>
            <div className={styles.innermain}>
                <h1>
                    CRYPTIC HUNT
                </h1>
                <div className={styles.form}>
                    <form>
                    <label>
                        Email
                        <input type='email'
                        required={true}
                        placeholder='yourname@email.com'
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                        required={true}
                        type='password' 
                        placeholder='Your_Password'
                        value={password}
                        onChange={handlePasswordChange} />
                    </label>
                    <button onClick={submitHandler}>Login</button>
                    </form>
                    <Link to='/signup' style={{textDecoration:"none"}}>
                    <p>Haven't signed up yeh? Sign Up!</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Signin ;