import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const calculateTimeRemaining = () => {
  const targetDate = new Date('April 5, 2024 00:00:00 GMT+00:00');
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
            <h1>{String(time.days).padStart(2, '0')}</h1>
            <p>DAYS</p>
          </div>
          <div>
            <h1>{String(time.hours).padStart(2, '0')}</h1>
            <p>HOURS</p>
          </div>
          <div>
            <h1>{String(time.minutes).padStart(2, '0')}</h1>
            <p>MINS</p>
          </div>
        </div>
      </div>
            <div className={styles.grid}>
                <div>
                    <h4>
                        Lorem, ipsum.????
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod rerum nam non! Sunt, quidem?Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div>
                    <h4>
                    Lorem, ipsum.????
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod rerum nam non! Sunt, quidem?Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div>
                    <h4>
                    Lorem, ipsum.????
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod rerum nam non! Sunt, quidem?Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Timer;