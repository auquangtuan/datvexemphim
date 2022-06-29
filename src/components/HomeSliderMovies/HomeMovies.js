import React, { useEffect, useRef, useState } from 'react'
import ButtonPre from '../ButtonPrevNext/ButtonPre';
import ButtonNext from '../ButtonPrevNext/ButtonNext';
import './HomeMovies.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeMovieAction } from '~/redux/actions/HomeMovieAction';

export default function HomeMovies() {
  const {arrMovies} = useSelector(state => state.HomeMovieReducer)
  const dispatch = useDispatch();
  //Hàm này copy từ youtube, vẫn chưa hiểu lắm}0
  const [dragDown,setDragDown] = useState(0)
  const [dragMove,setDragMove] = useState(0)
  const [isDrag,setIsDrag] = useState(false)

  const SmoothHorizontalScrolling = (e, time, ama, str) => {
    const eAmt = ama/100;
    let curT = 0;
    let sct = 0;
    const y = window.scrollY;
    while(curT <= time){
        window.setTimeout(SHS_B,curT,e,sct,eAmt,str,y);
        curT += time/150;
        sct++;
    }
    window.scrollTo(0,y)
}
const SHS_B = (e,sc,eAmt,str,y) =>{
    e.scrollLeft = eAmt * sc + str;
}
const sliderRef = useRef();
const movieRef = useRef();
const handleScrollRight = () => {
    const maxSLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if(sliderRef.current.scrollLeft < maxSLeft) {
        SmoothHorizontalScrolling(sliderRef.current,100,movieRef.current.clientWidth * (4/3), sliderRef.current.scrollLeft)
    }
}
const handleScrollLeft = () => {
    if(sliderRef.current.scrollLeft > 0) {
        SmoothHorizontalScrolling(sliderRef.current,100,-movieRef.current.clientWidth * (4/3), sliderRef.current.scrollLeft)
    }
}
const onDragStart = e => {
  setIsDrag(true)
  setDragDown(e.screenX)
}
const onDragEnd = e => {
  setIsDrag(false)
}
const onDragEnter = e => {
  setDragMove(e.screenX)
}
useEffect(()=>{
  if(isDrag){
    if(dragMove < dragDown) handleScrollRight();
    if(dragMove > dragDown) handleScrollLeft();
  }
},[dragDown,dragMove,isDrag])
//hết đoạn copy}}
useEffect(()=>{
  dispatch(getHomeMovieAction())
},[])
return (
  <div className='Container_Card' draggable='false'>
            <div className='container_header'>
              <h2>Đang Chiếu</h2>
              <h2>Sắp Chiếu</h2>
            </div>
            <div onClick={handleScrollLeft}>
            <ButtonPre />
            </div>
            <div onClick={handleScrollRight}>
            <ButtonNext />
            </div>
            <div className='containerBig' ref={sliderRef} draggable='true' onDragStart={onDragStart} onDragEnd={onDragEnd} onDragEnter={onDragEnter}>
                {arrMovies.map((movie,index)=>{
                  return (
                    <div className='container'ref={movieRef} key={index} draggable='false'>
                    <div className='card' style={{ background: `url(${movie.hinhAnh})`,backgroundPosition: 'center', backgroundSize: 'cover'}} draggable='false'>
                        <div className="content" >
                            <p className='sao'>{movie.maNhom}</p>
                            <h2 className="title">{movie.tenPhim}</h2>
                            <p className='des'>{movie.moTa.slice(0,110)}</p>
                            <Link to={`/info/${movie.maPhim}`} className="btn">Xem Thêm</Link>
                        </div>
                    </div>
                </div>
                  )
                })}
            </div>
        </div>
  )
}
