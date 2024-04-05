import styles from './Component.module.css';
import lock from "../../../assets/lock-solid.svg";
import check from "../../../assets/check-solid.svg";
import lockopen from "../../../assets/lock-open-solid.svg";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionBox = ({ id, solved, unlocked }) => {
    const [image, setImage] = useState(lock); // Default to lock

    useEffect(() => {
        // Update the image based on solved and unlocked states
        if (solved) {
            setImage(check);
        } else if (unlocked) {
            setImage(lockopen); // Show as unlockable but not solved
        } else {
            setImage(lock); // Still locked
        }
    }, [solved, unlocked]); // Include unlocked in dependency array

    const handleClick = (e) => {
        // Prevent navigation if not solved and not unlocked
        if (!solved && !unlocked) {
            e.preventDefault();
        }
    };

    // Adjust class based on whether it's solved or unlocked
    const linkClass = solved ? styles.disabledBox : unlocked ? styles.box : styles.disabledBox;

    return (
        <>
            <Link to={solved ? '#' : unlocked ? `/ques/${id}` : '#'} onClick={handleClick} className={linkClass}>
                <div className={styles.box}>
                    <img src={image} alt="" />
                </div>
            </Link>
        </>
    );
}

export default QuestionBox;