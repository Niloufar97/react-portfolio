import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function AnimatedButton({ text, color, className }) {
  return (
    <>
      <motion.button
        style = {{ backgroundColor: color }}
        className = {className}
        whileHover = {{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{duration: 0.2}}
      >
        {text}
      </motion.button>
    </>
  );
}

export default AnimatedButton;
