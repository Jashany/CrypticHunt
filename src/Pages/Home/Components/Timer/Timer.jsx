import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const calculateTimeRemaining = () => {
  const targetDate = new Date('April 5, 2024 18:00:00 GMT+00:00');
  const now = new Date();

  const timeRemaining = targetDate - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

const Timer = () => {
  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.timer}>
        <h1>THE CRYPTIC HUNT STARTS IN</h1>
        <div>
          <div>
            <h1>00</h1>
            <p>DAYS</p>
          </div>
          <div>
            <h1>00</h1>
            <p>HOURS</p>
          </div>
          <div>
            <h1>00</h1>
            <p>MINS</p>
          </div>
        </div>
      </div>
            <div className={styles.grid}>
                <div>
                    <h4>
                      Who are we??
                    </h4>
                    <p>
                    ACM Thapar is a tech enuthsiast's home. We believe in pushing boundaries by collaborating and searching innovative ideas to bring like minded tech savvy people together to creatre something big.
                    </p>
                </div>
                <div>
                    <h4>
                    What’s cryptic hunt??
                    </h4>
                    <p>
                    Cryptic Hunt is a puzzle-solving event where participants will have to solve rigorous cryptic clues to progress through a series of challenges with the goal of achieving the ultimate reward.
                    </p>
                </div>
                <div>
                    <h4>
                    What’s eclipse??
                    </h4>
                    <p>
                    Eclipse is ACM Thapar's flagship event consisting of Hacklipse ,Cryptic Hunt ,Enigma and Flamingo providing a enjoyable ride for all tech geeks.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Timer;
