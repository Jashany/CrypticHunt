import React, { useRef,useState, useEffect } from "react"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './Timeline.module.css';
import { timeline } from "../../../../Data.mjs";

const Timeline = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-330vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          end: "2000 center",
          start: "130 center",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

    return ( 
        <div className={styles.main}> 

          <div className={styles.abs}></div>
            <div ref={triggerRef}>
                <div ref={sectionRef}>
                    <div className={styles.time_comp}>
                        {timeline.map((time,index)=>{
                        return(
                            <Timelinecomp key={index} prop={time}  />  
                        )
                        })}
                        
                    </div>
                </div>
            </div>
                      
        </div>
     );
}
 
export default Timeline;

const Timelinecomp = ({prop}) => {
    // Create an array with 10 elements using Array.from
    const lines = Array.from({ length: 60 }, (_, index) => (
        <Line key={index} isEven={index % 2 === 0} />
    ));

    return (
        <div className={styles.timemain}>
            <div>
                <div className={styles.linefive}>

                </div>
                <div style={{alignSelf:"center"}}>
                <h1>
                {prop.t1}
                </h1>
                <h1>
                    {prop.t2}
                </h1>
                <h1>
                    {prop.t3}
                </h1>
                </div>
            </div>
            <div className={styles.timeline}>{lines}</div>;
        </div>
    )
};

const Line = ({ isEven }) => {
    // Apply different styles based on whether the line is even or odd
    const lineStyle = isEven ? styles.lineEven : styles.lineOdd;

    return <div className={lineStyle}></div>;
};
