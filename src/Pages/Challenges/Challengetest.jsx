import QuestionBox from "./Components/Questionbox";
import styles from "./Challengetest.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector ,useDispatch } from "react-redux";
import RickRollbox from "./Components/BoxRickRoll";
import { useEffect, useState } from "react";
import { useFetchTeamDetailsMutation } from "../../Slices/teamApiSlice";

import { solveQuestion } from "../../Slices/questionSlice";

const Challenge = () => {
    const [isTimeReached, setIsTimeReached] = useState(false);

    useEffect(() => {
        const specificTime = new Date('2025-05-25T22:30:00'); // Change this to your specific time
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
            <h1>Challenge has ended</h1>
        </div>
        </>
    )
}



const ChallengeTest = () => {
    const { solvedQuestions } = useSelector((state) => state.question);
    const isQuestionSolved = (id) => {
        return solvedQuestions.some(question => question.id === id);
    };

    const dispatch = useDispatch();
    const [getTeam , {isloading}] = useFetchTeamDetailsMutation();

    const { userInfo } = useSelector((state) => state.auth);
    // const { teamInfo } = useSelector((state) => state.team)
    const userId = userInfo._id
    console.log(userId)
    
    useEffect(()=>{
       getteam();
    },[]);


    const getteam = async () => {
        try {
            const res = await getTeam({userId: userInfo._id}).unwrap();
            res.solvedQuestions.forEach(id => {
                dispatch(solveQuestion({id}));
            });
        } catch (error) {
            console.error("Failed to fetch team details: ", error);
        }
    }
    const isQuestionUnlocked = (key) =>{
        if (key === 2 || key === 3 || key === 4 || key === 5 ) {
            return isQuestionSolved('680bb2e712a2894cdd479f6c')
        }
        if (key === 6 || key === 7 || key === 8 || key === 9 ) {
            return isQuestionSolved('680bb84c12a2894cdd479f97')
        }
        if (  key === 12 || key === 11 || key === 10 || key === 13 ) {
            return isQuestionSolved('680bb42a12a2894cdd479f7f')
        }
        if (key === 14 || key === 15 || key === 16 || key === 17 ) { 
            return isQuestionSolved('680bb6a312a2894cdd479f8d')
        }
        if (key === 21 || key === 18 || key === 19 || key === 20 ) {
            return isQuestionSolved('680bb78312a2894cdd479f91')
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
                <QuestionBox key={6} unlocked={isQuestionUnlocked(6)} id={'680bbadf12a2894cdd479ff2'} solved={isQuestionSolved('680bbadf12a2894cdd479ff2')} />
                <QuestionBox key={7} unlocked={isQuestionUnlocked(7)} id={'680bbc5f12a2894cdd479ff6'} solved={isQuestionSolved('680bbc5f12a2894cdd479ff6')} />
                <RickRollbox />
                <QuestionBox key={8} unlocked={isQuestionUnlocked(8)} id={'680bbc8412a2894cdd479ff8'} solved={isQuestionSolved('680bbc8412a2894cdd479ff8')} />
                <QuestionBox key={9} unlocked={isQuestionUnlocked(9)} id={'680bbc9b12a2894cdd479ffb'} solved={isQuestionSolved('680bbc9b12a2894cdd479ffb')} />
                <RickRollbox />
                {/*  */}
                <QuestionBox  key={10} unlocked={isQuestionUnlocked(10)} id={'680bc41e12a2894cdd47a81f'} solved={isQuestionSolved('680bc41e12a2894cdd47a81f')} />
                <RickRollbox  />
                <RickRollbox />
                <RickRollbox  />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={14} unlocked={isQuestionUnlocked(14)} id={'680bbcda12a2894cdd47a001'} solved={isQuestionSolved('680bbcda12a2894cdd47a001')}/>
                {/*  */}
                <QuestionBox key={11} unlocked={isQuestionUnlocked(11)} id={'680bc52012a2894cdd47aa20'} solved={isQuestionSolved('680bc52012a2894cdd47aa20')}/>
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={4} unlocked={isQuestionUnlocked(4)} id={'680bb84c12a2894cdd479f97'} solved={isQuestionSolved('680bb84c12a2894cdd479f97')} />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={15} unlocked={isQuestionUnlocked(15)} id={'680bbd0512a2894cdd47a008'} solved={isQuestionSolved('680bbd0512a2894cdd47a008')} /> 
                {/*  */}
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={2} unlocked={isQuestionUnlocked(2)} id={'680bb42a12a2894cdd479f7f'} solved={isQuestionSolved('680bb42a12a2894cdd479f7f')} />
                <QuestionBox key={1} unlocked={true} id={'680bb2e712a2894cdd479f6c'} solved={isQuestionSolved('680bb2e712a2894cdd479f6c')}  />
                <QuestionBox key={3} unlocked={isQuestionUnlocked(3)} id={'680bb6a312a2894cdd479f8d'} solved={isQuestionSolved('680bb6a312a2894cdd479f8d')} />
                <RickRollbox />
                <RickRollbox />
                {/*  */}
                <QuestionBox key={12} unlocked={isQuestionUnlocked(12)} id={'680bcf8212a2894cdd47b891'} solved={isQuestionSolved('680bcf8212a2894cdd47b891')}/>
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={5} unlocked={isQuestionUnlocked(5)} id={'680bb78312a2894cdd479f91'} solved={isQuestionSolved('680bb78312a2894cdd479f91')} />
                <RickRollbox />
                <RickRollbox />     
                <QuestionBox key={16} unlocked={isQuestionUnlocked(16)} id={'680bbd4e12a2894cdd47a00a'} solved={isQuestionSolved('680bbd4e12a2894cdd47a00a')}/>
                {/*  */}
                <QuestionBox key={13} unlocked={isQuestionUnlocked(13)} id={'680be38312a2894cdd47cb26'} solved={isQuestionSolved('680be38312a2894cdd47cb26')}/>
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <RickRollbox />
                <QuestionBox key={17} unlocked={isQuestionUnlocked(17)} id={'680bbe2512a2894cdd47a036'} solved={isQuestionSolved('680bbe2512a2894cdd47a036')} />
                {/*  */}
                <RickRollbox />
                <QuestionBox key={18} unlocked={isQuestionUnlocked(18)} id={'680bbe4512a2894cdd47a047'} solved={isQuestionSolved('680bbe4512a2894cdd47a047')} />
                <QuestionBox key={19} unlocked={isQuestionUnlocked(19)} id={'680bbea512a2894cdd47a064'} solved={isQuestionSolved('680bbea512a2894cdd47a064')} />
                <RickRollbox />
                <QuestionBox key={20} unlocked={isQuestionUnlocked(20)} id={'680bc31512a2894cdd47a645'} solved={isQuestionSolved('680bc31512a2894cdd47a645')} />
                <QuestionBox key={21} unlocked={isQuestionUnlocked(21)} id={'680bc41e12a2894cdd47a81f'} solved={isQuestionSolved('680bc41e12a2894cdd47a81f')} />
                <RickRollbox />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Challenge ;
