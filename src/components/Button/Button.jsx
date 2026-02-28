import { LuMessageCircleHeart } from "react-icons/lu";
import styles from './Button.module.css'
import React from 'react'

const Button = (props) => {
  if(!props.text && !props.icon) return null;

  const {isOutline, icon, text} = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        
        {props.icon}
        {props.text}
    </button>
  );
};

export default Button;