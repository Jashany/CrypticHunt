import { useState } from "react";
import styles from './Forget.module.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import * as Yup from "yup";

const ResetPass = () => {
    const { id, token } = useParams();
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const validate = Yup.object({
        password: Yup.string().required('Enter Password').min(8),
    });
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await validate.validate({ password });
            try {
            axios.post(`/api/users/resetpassword/${id}/${token}`, { password })
                .then((res) => {
                    console.log(res.data || res.data.message || res);
                    navigate('/signin');
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
            } catch (error) {
            console.log(error)
            }  
        } catch (error) {
            setErrors(error.message);
        }
    }

    return ( 
        <div className={styles.form}>
            <form>
                <h1>Reset Password</h1>
                <label>
                Enter Your New Password
                <input type="password" placeholder="New Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors && <p className={styles.error}>{errors}</p>}
                </label>
                <button type="submit" onClick={submitHandler}>Reset</button>
            </form>
        </div>
     );
}
 
export default ResetPass;