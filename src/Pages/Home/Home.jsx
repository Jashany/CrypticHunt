import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import ParticlesComponent from "./Components/Particle/Particle";
import Sponser from "./Components/Sponser/Sponser";
import Timeline from "./Components/Timeline/Timeline";
import Timer from "./Components/Timer/Timer";
import Style from './Home.module.css'
const Home = () => {
    const isMobile = window.innerWidth < 1000;

    return (
        <div className={Style.main}>
            <ParticlesComponent />
            <Hero />
            <Timer />
            {/* {!isMobile && <Timeline />} */}
            <Sponser />
            <Contact />     
        </div>
    );
}
 
export default Home;