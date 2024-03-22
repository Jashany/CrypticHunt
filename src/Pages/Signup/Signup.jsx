import React, { useEffect, useState } from 'react';
import styles from './Signup.module.css';
import eclipse from '../../assets/eclipse.png';
import gsap from 'gsap';
import { Link,useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../Slices/usersApiSlice';
import { setCredentials } from '../../Slices/authslice';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';

const Signup = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        phone: '',
        college: '',
        gradution: '',
        Branch: '',
    });
    const [signup, { isLoading }] = useSignupMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();


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
    };
    const handleSubmit = async(e) => {

        e.preventDefault();
        try {
            const res = await signup(formValues).unwrap();
            dispatch(setCredentials(res));
            navigate('/signin');
        } catch (error) {
            toast.error(error?.data?.message || error?.message || error);
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
                        <label>
                            Email
                            <input type='email' name='email' placeholder='yourname@email.com' value={formValues.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Password
                            <input type='password' name='password' placeholder='Your_Password' value={formValues.password} onChange={handleChange}  required />
                        </label>
                        <label>
                            Phone Number
                            <input type="tel" name='phone' pattern="[0-9]{10}" value={formValues.phone}   onChange={handleChange}  required />
                        </label>
                        <label>
                            College
                            <input type='text' name='college' placeholder='Eg. Thapar University' value={formValues.college} onChange={handleChange}  required />
                        </label>
                        <div style={{ display: "flex", gap: "30px" }}>
                            <label>
                                Year of Graduation
                                <input type='number' name='gradution' placeholder='Eg. 2025, 2026' value={formValues.gradution} onChange={handleChange}  required />
                            </label>
                            <label>
                                Branch
                                <input type='text' name='Branch' placeholder='Eg. COE' value={formValues.Branch} onChange={handleChange} required />
                              
                            </label>
                        </div>
                        <button  onClick={handleSubmit} >Sign Up</button>
                        <Link to="/signin" style={{ textDecoration: "none" }}><p>Already onboard? Login!</p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
