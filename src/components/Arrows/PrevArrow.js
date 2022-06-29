import React from 'react'
import Slider from "react-slick";
export default function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:'absolute', left: 0, zIndex: 1, width: 20 }}
      onClick={onClick}
    />
  )
}
