import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import eclipse from '../../../../assets/eclipse.png';
import logo from '../../../../assets/acmlogo.png';

const Hero = () => {
  useEffect(() => {
    const animateHeading = () => {
      const heading = document.querySelector(`.${styles.hero} h1`);
      const text = heading.innerText;
      const duration = 0.5;

      // Split the heading text into an array of characters
      const characters = text.split('');

      // Clear the heading content
      heading.innerText = '';

      // Use GSAP to animate each character
      characters.forEach((char, index) => {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        // Create a timeline for each character
        const tl = gsap.timeline({ delay: index * 0.3});

        // Randomize the character initially
        tl.to({}, duration, { onUpdate: () => (heading.innerText += randomChar) });

        // Transition to the actual character
        tl.to({}, duration, { onUpdate: () => (heading.innerText = text.substr(0, index + 1)) });
      });
    };

    animateHeading();
  }, []); // Run the effect only once on component mount

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <img src={eclipse} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className={styles.hero}>
        <h1>CRYPTIC HUNT</h1>
        <h3>GET STARTED</h3>
      </div>
    </div>
  );
};

export default Hero;
 