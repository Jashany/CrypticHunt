import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import eclipse from '../../../../assets/eclipse.png';
import logo from '../../../../assets/acmlogo.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const animateHeading = () => {
      const heading = document.querySelector(`.${styles.hero} h1`);
      const subheading = document.querySelector(`.${styles.hero} h3`);
      const text = heading.innerText;
      const duration = 0.5;

      const characters = text.split('');

      heading.innerText = '';

      characters.forEach((char, index) => {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        const tl = gsap.timeline({ delay: index * 0.3});
        const t1 = gsap.timeline({ delay: 4});
        t1.fromTo(subheading, 
          {
            opacity: 0, 
            ease: 'power4.out' },{
              opacity: 1,
            })
        tl.to({}, duration, { onUpdate: () => (heading.innerText += randomChar) });

        tl.to({}, duration, { onUpdate: () => (heading.innerText = text.substr(0, index + 1)) });
      });
    };

    animateHeading();
  }, []); 

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <img src={eclipse} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className={styles.hero}>
        <h1>CRYPTIC HUNT</h1>
        <Link to='/signin' style={{textDecoration:"none",color:"white"}}>
        <h3>GET STARTED</h3>
        </Link> 
      </div>
    </div>
  );
};

export default Hero;
 