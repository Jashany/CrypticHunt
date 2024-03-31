import Navbar from '../../components/Navbar/Navbar';
import styles from './Challenges.module.css';
import Challengebox from './components/challenge/challengebox';
import Gettingstart from './components/getting/gettingstart';
import Connectline from './components/connectline/connectline';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

const Challenge = () => {
    return ( 
        <>
        <Navbar />
        <div data-scroll-container className={styles.main}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Gettingstart />
                    <Gettingstart />
                    <Gettingstart />
                    <Gettingstart />
                </div>

                <div className={styles.section0}>
                    <div className={styles.section1}>
                        <Gettingstart />
                        <Gettingstart />
                        <Gettingstart />
                        <Gettingstart />
                    </div>

                    <div className={styles.section2}>
                        <Challengebox number='1.3'/>
                        {/* lineeeee */}
                        <div className={styles.subsection}>
                            <Challengebox number='1.3'/>
                            {/* lineee */}
                            <Challengebox number='1'/>
                            {/* lineee */}
                            <Challengebox number='1.3'/>
                        </div>
                        {/* lineeee */}
                        <Challengebox number='1.4'/>
                    </div>

                    <div className={styles.section1}>
                        <Gettingstart />
                        <Gettingstart />
                        <Gettingstart />
                        <Gettingstart />
                    </div>
                </div>

                <div className={styles.section}>
                    <Gettingstart />
                    <Gettingstart />
                    <Gettingstart />
                    <Gettingstart />
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Challenge;