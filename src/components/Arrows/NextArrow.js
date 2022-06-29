import React from 'react'
import Slider from "react-slick";
export default function NextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: 'absolute', right : 0}}
      onClick={onClick}
    />
  )
}
