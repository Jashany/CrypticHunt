import QuestionBox from "./Components/Questionbox";
import styles from "./Challengetest.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import RickRollbox from "./Components/BoxRickRoll";
import { useEffect, useState } from "react";

const Challenge = () => {
    const [isTimeReached, setIsTimeReached] = useState(false);

    useEffect(() => {
        const specificTime = new Date('2024-04-05T18:00:00'); // Change this to your specific time
        const currentTime = new Date();
        
        if (currentTime >= specificTime) {
            setIsTimeReached(true);
        }
    }, []); // Run
    return(
        <div>
            {isTimeReached ? <ChallengeTest /> : <Coming />}
        </div>
    )
}

const Coming = () => {
    return(
        <>
        <Navbar />
        <div className={styles.coming} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",height:'85vh'}}>
            <h1>Challenge will start on 5th April 2024 at 7:00 PM</h1>
        </div>
        </>
    )
}



const ChallengeTest = () => {
    const { solvedQuestions } = useSelector((state) => state.question);
    const isQuestionSolved = (id) => {
        return solvedQuestions.some(question => question.id === id);
    };

    const isQuestionUnlocked = (key) =>{
        if (key === 2 || key === 3 || key === 4 || key === 5 ) {
            return isQuestionSolved('660fd8c120a133a80d4d294f')
        }
        if (key === 6 || key === 7 || key === 8 || key === 9 ) {
            return isQuestionSolved('660fd9745adc6cfeea7febe9')
        }
        if (key === 10 || key === 11 || key === 12 || key === 13 ) {
            return isQuestionSolved('660fd8df20a133a80d4d2951')
        }
        if (key === 14 || key === 15 || key === 16 || key === 17 ) {
            return isQuestionSolved('660fd9095adc6cfeea7febe7')
        }
        if (key === 18 || key === 19 || key === 20 || key === 21 ) {
            return isQuestionSolved('660fd9aa5adc6cfeea7febeb')
        }
    }
    return ( 
        <>
        <div className={styles.main}>
        <Navbar />

            <div className={styles.div}>
                <div className={styles.div2}>
                {/*  */}
                <RickRollbox />
                <QuestionBox key={6} unlocked={isQuestionUnlocked(6)} id={'660fdb815adc6cfeea7febff'} solved={isQuestionSolved('660fdb815adc6cfeea7febff')} />
                <QuestionBox key={7} unlocked={isQuestionUnlocked(7)} id={'660fdb9f5adc6cfeea7fec01'} solved={isQuestionSolved('660fdb9f5adc6cfeea7fec01')} />
                <RickRollbox />
                <QuestionBox key={8} unlocked={isQuestionUnlocked(8)} id={'660fdbd45adc6cfeea7fec03'} solved={isQuestionSolved('660fdbd45adc6cfeea7fec03')} />
                <QuestionBox key={9} unlocked={isQuestionUnlocked(9)} id={'660fe22c5adc6cfeea7fec0f'} solved={isQuestionSolved('660fe22c5adc6cfeea7fec0f')} />
                <RickRollbox />
                {/*  */}
                <QuestionBox  key={10} unlocked={isQuestionUnlocked(10)} id={'660fd9da5adc6cfeea7febed'} solved={isQuestionSolved('660fd9da5adc6cfeea7febed')} />
                <RickRollbox  />
                <RickRollbox />
                <RickRollbox  />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={14} unlocked={isQuestionUnlocked(14)} id={'660fdac75adc6cfeea7febf5'} solved={isQuestionSolved('660fdac75adc6cfeea7febf5')}/>
                {/*  */}
                <QuestionBox key={11} unlocked={isQuestionUnlocked(11)} id={'660fda135adc6cfeea7febef'} solved={isQuestionSolved('660fda135adc6cfeea7febef')}/>
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={4} unlocked={isQuestionUnlocked(4)} id={'660fd9745adc6cfeea7febe9'} solved={isQuestionSolved('660fd9745adc6cfeea7febe9')} />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={15} unlocked={isQuestionUnlocked(15)} id={'660fdae85adc6cfeea7febf7'} solved={isQuestionSolved('660fdae85adc6cfeea7febf7')} /> 
                {/*  */}
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={2} unlocked={isQuestionUnlocked(2)} id={'660fd8df20a133a80d4d2951'} solved={isQuestionSolved('660fd8df20a133a80d4d2951')} />
                <QuestionBox key={1} unlocked={true} id={'660fd8c120a133a80d4d294f'} solved={isQuestionSolved('660fd8c120a133a80d4d294f')}  />
                <QuestionBox key={3} unlocked={isQuestionUnlocked(3)} id={'660fd9095adc6cfeea7febe7'} solved={isQuestionSolved('660fd9095adc6cfeea7febe7')} />
                <RickRollbox />
                <RickRollbox />
                {/*  */}
                <QuestionBox key={12} unlocked={isQuestionUnlocked(12)} id={'660fda325adc6cfeea7febf1'} solved={isQuestionSolved('660fda325adc6cfeea7febf1')}/>
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={5} unlocked={isQuestionUnlocked(5)} id={'660fd9aa5adc6cfeea7febeb'} solved={isQuestionSolved('660fd9aa5adc6cfeea7febeb')} />
                <RickRollbox />
                <RickRollbox />     
                <QuestionBox key={16} unlocked={isQuestionUnlocked(16)} id={'660fdb025adc6cfeea7febf9'} solved={isQuestionSolved('660fdb025adc6cfeea7febf9')}/>
                {/*  */}
                <QuestionBox key={13} unlocked={isQuestionUnlocked(13)} id={'660fda655adc6cfeea7febf3'} solved={isQuestionSolved('660fda655adc6cfeea7febf3')}/>
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={17} unlocked={isQuestionUnlocked(17)} id={'660fdb4b5adc6cfeea7febfd'} solved={isQuestionSolved('660fdb4b5adc6cfeea7febfd')} />
                {/*  */}
                <RickRollbox />
                <QuestionBox key={18} unlocked={isQuestionUnlocked(18)} id={'660fe2625adc6cfeea7fec11'} solved={isQuestionSolved('660fe2625adc6cfeea7fec11')} />
                <QuestionBox key={19} unlocked={isQuestionUnlocked(19)} id={'660fe2a15adc6cfeea7fec15'} solved={isQuestionSolved('660fe2a15adc6cfeea7fec15')} />
                <RickRollbox />
                <QuestionBox key={20} unlocked={isQuestionUnlocked(20)} id={'660ffcc3be4d14f26cc5aeb6'} solved={isQuestionSolved('660ffcc3be4d14f26cc5aeb6')} />
                <QuestionBox key={21} unlocked={isQuestionUnlocked(21)} id={'660fe2ba5adc6cfeea7fec1b'} solved={isQuestionSolved('660fe2ba5adc6cfeea7fec1b')} />
                <RickRollbox />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Challenge ;