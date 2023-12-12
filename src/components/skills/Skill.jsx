import { easeIn } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./skill.css";

const skillVariant = {
  hidden: {
    width: 0,
  },
  visible: (percentage) => ({
    width: `${percentage}%`,
    transition: { duration: 1, ease: easeIn },
  }),
};

function Skill({ tech, percentage }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="skills-container">
      <h4>{tech}: {percentage}%</h4>
      <div className="skill-bar">
        <motion.div
          className="skill-percentage"
          variants={skillVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={percentage} 
          ref={ref}
        ></motion.div>
      </div>
    </div>
  );
}

export default Skill;
