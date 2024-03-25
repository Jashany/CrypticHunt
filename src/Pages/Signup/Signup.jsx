import React, { useEffect, useState } from 'react';
import styles from './Signup.module.css';
import eclipse from '../../assets/eclipse.png';
import gsap from 'gsap';
import { Link,useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../Slices/usersApiSlice';
import { setCredentials } from '../../Slices/authslice';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import * as Yup from "yup";

const Signup = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        college: '',
        gradution: '',
        Branch: '',
    });
    const [signup, { isLoading }] = useSignupMutation();
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        password: Yup.string().required('Enter Password').min(8),
    });

    const validationSchematwo = Yup.object({
        name: Yup.string().required('Enter Name'),
        phone: Yup.number('Enter Number Only')
        .min(10)
        .required('Enter Phone Number'),
        college: Yup.string().required('Enter College Name'),
        gradution: Yup.string().required('Enter Year of Graduation'),
        Branch: Yup.string().required('Enter Branch Name'),
    });

    

    useEffect(() => {
        animateHeading();
    }, []);

    const animateHeading = () => {
        const heading = document.querySelector(`.${styles.innermain} h1`);
        const text = heading.innerText;
        const duration = 0.5;

        const characters = text.split('');
        heading.innerText = '';

        characters.forEach((char, index) => {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            const tl = gsap.timeline({ delay: index * 0.3 });

            tl.to({}, duration, { onUpdate: () => (heading.innerText += randomChar) });
            tl.to({}, duration, { onUpdate: () => (heading.innerText = text.substr(0, index + 1)) });
        });
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(step === 1) {
            handleNextStep(e);
            return;
        }
        try {
            await validationSchematwo.validate(formValues, { abortEarly: false });
            try {
                const res = await signup(formValues).unwrap();
                dispatch(setCredentials(res));
                navigate('/signin');
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
        
    };


    const handleNextStep = async(e) => {
        try {
            await validationSchema.validate(formValues, { abortEarly: false });
            e.preventDefault();
            setStep(step + 1);
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((e) => {
              newErrors[e.path] = e.message;
            });
            setErrors(newErrors); 
        }
        
    };

    return (
        <div className={styles.main}>
        <div>
            <img src={eclipse} alt="" />
        </div>
        <div className={styles.innermain}>
            <h1>CRYPTIC HUNT</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    {/* First Step: Email and Password */}
                    {step === 1 && (
                        <div className={styles.forminn}>
                            <label>
                                Email
                                <input type='email' name='email' placeholder='yourname@email.com' value={formValues.email} onChange={handleChange} required />
                                {errors.email && <p className={styles.error}>{errors.email}</p> }
                            </label>
                            <label>
                                Password
                                <input type='password' name='password' placeholder='Your_Password' value={formValues.password} onChange={handleChange} required />
                                {errors.password && <p className={styles.error}>{errors.password}</p> }
                            </label>
                            <Link to="/signin" style={{ textDecoration: "none" }}><p>Already onboard? Login!</p></Link>
                            <button onClick={handleNextStep}>Next</button>
                        </div>
                    )}
                    {/* Second Step: Additional Information */}
                    {step === 2 && (
                        <div className={styles.forminn}>
                            <label>
                                Name
                                <input type='text' name='name' placeholder='Your Name' value={formValues.name} onChange={handleChange} required />
                                {errors.name && <p className={styles.error}>{errors.name}</p> }
                            </label>
                            <label>
                                Phone Number
                                <input type="tel" name='phone' pattern="[0-9]{10}" value={formValues.phone} onChange={handleChange} required />
                                {errors.phone && <p className={styles.error}>{errors.phone}</p> }
                            </label>

                            <label>
                                College
                                <input type='text' name='college' placeholder='Eg. Thapar University' value={formValues.college} onChange={handleChange} required />
                                {errors.college && <p className={styles.error}>{errors.college}</p> }
                            </label>
                            <div  style={{ display: "flex", gap: "30px" }}>
                                <label>
                                    Year of Graduation
                                <input type='number' name='gradution' placeholder='Eg. 2025, 2026' value={formValues.gradution} onChange={handleChange} required />
                                {errors.gradution && <p className={styles.error}>{errors.gradution}</p> }
                                </label>
                                <label>
                                    Branch
                                    <input type='text' name='Branch' placeholder='Eg. COE' value={formValues.Branch} onChange={handleChange} required />
                                    {errors.branch && <p className={styles.error}>{errors.branch}</p> }
                                </label>
                            </div>
                            <button onClick={handleSubmit}>Sign Up</button>
                            <p onClick={()=> setStep(1)}>Go Back</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
    );
};

export default Signup;
