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
import * as Yup from "yup";



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login , {isloading}] = useLoginMutation();
    const [teamDetails,{issloading}] = useFetchTeamDetailsMutation();
    
    const { userInfo } = useSelector((state) => state.auth);
    const { teamInfo } = useSelector((state) => state.team);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        password: Yup.string().required('Enter Password').min(8),

    });

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
          await validationSchema.validate({ email, password }, { abortEarly: false });
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
        } catch (error) {
          const newErrors = {};
          error.inner.forEach((e) => {
            newErrors[e.path] = e.message;
          });
          setErrors(newErrors);
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
                        <input 
                        type='email'
                        name='email'
                        required={true}
                        placeholder='yourname@email.com'
                        value={email}
                        onChange={handleEmailChange}
                        />
                         {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </label>
                    <label>
                        Password
                        <input 
                        required={true}
                        type='password' 
                        name='password'
                        placeholder='Your_Password'
                        value={password}
                        onChange={handlePasswordChange} />
                          {errors.password && <p className={styles.error}>{errors.password}</p>}
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