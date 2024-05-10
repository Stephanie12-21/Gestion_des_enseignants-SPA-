import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";


// parent Card

const Card = (props) => {
  
  return (
    <AnimateSharedLayout>
      
        <CompactCard param={props} />
      
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param}) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    
    >
     
      <div className="detail">        
        <span style={{ fontSize: '20px', color:'#657166' }}>{param.title}</span>
        <br />
        <br />
        <span style={{ fontSize: '20px' }}>{param.value} Ar</span>
      </div>
    </motion.div>
  );
}



export default Card;
