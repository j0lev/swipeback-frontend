//import requires additional installation to work on, run "npm install framer-motion" if u want to fire up locally
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useState} from 'react';

const QuestionCard = ({ text, onSwipe, animate }) => {
  const x = useMotionValue(0);
  
  // Dynamic styling based on drag distance
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacityLeft = useTransform(x, [-150, -50], [1, 0]);
  const opacityRight = useTransform(x, [50, 150], [0, 1]);
  const background = useTransform(
    x,
    [-150, 0, 150],
    ["#ffcccc", "#ffffff", "#ccffcc"]
  );
  

  const handleDragEnd = (e, info) => {
    const threshold = 120;
    if (info.offset.x > threshold) {
      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, background, ...cardStyle }}
      onDragEnd={handleDragEnd}
      animate = {animate}
      whileDrag={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div style={{ ...indicatorStyle, border: "4px solid red", color: "red", left: 20, opacity: opacityLeft }}>
        NO!
      </motion.div>
      <motion.div style={{ ...indicatorStyle, border: "4px solid green", color: "green", right: 20, opacity: opacityRight }}>
        YES!
      </motion.div>
      
      <h3 style={{ pointerEvents: "none", userSelect: "none" }}>{text}</h3>
    </motion.div>
  );
};

const cardStyle = {
  width: "700px",
  height: "550px",
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  textAlign: "center",
  cursor: "grab",
  position: "relative",
  overflow: "hidden"
};

const indicatorStyle = {
  position: "absolute",
  top: "40px",
  padding: "10px 20px",
  borderRadius: "12px",
  fontWeight: "900",
  fontSize: "1.5rem"
};

export default QuestionCard;