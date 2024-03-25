import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import styles from './Forget.module.css';
const ForgetPass = () => {
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is Required'),
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate({ email });
            axios.post('/api/users/forgetpassword', { email })
                .then((res) => {
                    toast(res.data || res.data.message || res);
                    console.log(res.data || res.data.message || res);
                    setEmail("");
                })
                .catch((error) => {
                    toast(error.response.data);
                });
        } catch (error) {
            toast(error.message);
        }
    }


    return ( 
        <div className={styles.form}>
            <h1>Forget Password</h1>
            <form>
                <label>
                Enter Your Email
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                </label>
                <button type="submit" onClick={submitHandler}>Send Mail</button>
            </form>
        </div>
     );
}
 
export default ForgetPass;