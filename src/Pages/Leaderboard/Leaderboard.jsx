import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Leaderboard.module.css';
import { useSelector } from 'react-redux';
const Leaderboard = () => {
  const { teamInfo } = useSelector((state) => state.team);
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    fetch('https://cryptic-api.acmtiet.com/api/users/leaderboard')
      .then((res) => res.json())
      .then((data) => {
        setLeaderboardData(data.reverse());
  })
      .catch((err) => console.log(err));
  }, []);
   
     
      return (
        <>
          <Navbar />
        <div className={styles.main}>
          <div className={styles.heading}>
          <h3 className={styles.teamscore}>Your Team_score: {teamInfo?.score}</h3>
          <h2>Leaderboard</h2>
          </div>
        
          <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData?.slice(0,9).map((team, index) => (
            <tr key={index}>
          <td>{team?.value}</td>
          <td>{Math.floor(team?.score)}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
          </>
      );
    }
 
export default Leaderboard;