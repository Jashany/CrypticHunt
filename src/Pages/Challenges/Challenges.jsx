import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import styles from './Challenges.module.css';
import QuestionBox from './Components/Questionbox';
import { atom, useAtom } from 'jotai';
const levelAtom = atom(1);

const Challenge = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <>
        <Navbar />
            <div className={styles.main}>
                {level === 1 && <Level1 />} {/* Render Level1 component based on the level state */}
                {level === 2 && <Level2 />} {/* Render Level2 component based on the level state */}
                {level === 3 && <Level3 />} {/* Render Level3 component based on the level state */}
                {level === 4 && <Level4 />} {/* Render Level4 component based on the level state */}
                {level === 5 && <Level5 />} {/* Render Level5 component based on the level state */}
            </div>
        </>
     );
}
const Level1 = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <div className={styles.level1}>
            <QuestionBox />
            <button onClick={()=> setLevel(2)}>Go up</button>
        <div className={styles.level1in}>
            <QuestionBox />
            <button onClick={()=> setLevel(3)}>Go Left</button>
            <QuestionBox />
            <button onClick={()=> setLevel(5)}>Go Right</button>
            <QuestionBox />
        </div>
            <button onClick={()=> setLevel(4)}>Go Down</button>
            <QuestionBox />
        </div>
     );
}

const Level2 = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <div className={styles.level2}>
            <div className={styles.level2in}>
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            </div>
            <button onClick={()=> setLevel(1)}>Go Down</button>
            <QuestionBox />
        </div>
     );
}


const Level3 = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <div className={styles.level3}>
        <div className={styles.level3in}>
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
        </div>
            <button onClick={()=> setLevel(1)}>Go Right</button>
            <QuestionBox />
        </div>
     );
}

const Level4 = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <div className={styles.level4}>
            <QuestionBox />
            <button onClick={()=> setLevel(1)}>Go Up</button>
            <div className={styles.level4in}>
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            </div>
        </div>
     );
}

const Level5 = () => {
    const [level, setLevel] = useAtom(levelAtom); 
    return ( 
        <div className={styles.level5}>
            <QuestionBox />
            <button onClick={()=> setLevel(1)}>Go Left</button>
        <div className={styles.level5in}>
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
            <QuestionBox />
        </div>
        </div>
     );
}

export default Challenge;



