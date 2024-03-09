import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Sponser from "./Components/Sponser/Sponser";
import Timeline from "./Components/Timeline/Timeline";
import Timer from "./Components/Timer/Timer";
import Style from './Home.module.css'
const Home = () => {
    return ( 
        <div className={Style.main}>
            <Hero />
            <Timer />
            <Timeline />
            <Sponser />
            <Contact />     
        </div>
     );
}
 
export default Home;