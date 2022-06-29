import React, { Fragment, useEffect } from 'react'
import './Info.css'
import './cssCride.css'
import { Tabs, Rate } from 'antd';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieAction } from '~/redux/actions/GetMovieAction'
import { NavLink,useLocation } from 'react-router-dom'
export default function Info() {
  const {infoMovie} = useSelector(state => state.InfoMovieReducer)

  const { TabPane } = Tabs;
  const dispatch = useDispatch()
  const location = useLocation()
  const locationNumber = location.pathname.slice(6, 15)
  useEffect(()=>{
    dispatch(getMovieAction(locationNumber))
  },[])
  return (
    <Fragment>
      <div style={{ backgroundImage: `url(${infoMovie.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <CustomCard
          effectColor="#C780FF" // required
          color="#14AEFF" // default color is white
          blur={5} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
        >
          <div className='Info'>
              <img style={{ width: 220, height: 326 }} src={infoMovie.hinhAnh} alt='images_movies'></img>
              <div className='Info_des'><p className='info_name'>{infoMovie.tenPhim}</p>{infoMovie.moTa?.slice(0,323)+"..."}</div>
              <div className='Info_rating'>
                <div className={`c100 p${infoMovie.danhGia*10} green`}>
                  <span>{infoMovie.danhGia*10}đ</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
              </div>
          </div>
        </CustomCard>
      </div>
      <div className='Info_buy'>
      <Tabs defaultActiveKey='1' centered>
              <TabPane tab="Lịch Chiếu" key='1' style={{ 'minHeight': '300px' }}>
                <div>
                  <Tabs tabPosition='left' >
                    {infoMovie.heThongRapChieu?.length===0? <div className='font-bold text-2xl'>Chưa Có Thông Tin Chiếu</div>: infoMovie.heThongRapChieu?.map((htr, index) => {
                      return <TabPane tab={<div className='flex flex-row items-center justify-center'>
                        <img src={htr.logo} className='rounded-full w-full' style={{ width: 50 }} />
                        <div className='text-center ml-2'>
                          {htr.tenHeThongRap}
                        </div>
                      </div>}
                        key={index}>
                       {htr.cumRapChieu?.map((cumrap,index)=>{
                         return <div className='mt-5' key={index}>
                           <div className='flex flex-row'>
                             <img style={{width: 60, height: 60, 'borderRadius':'50%'}} src={'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png'} />
                              <div className='ml-2'>
                                <p style={{'fontSize': '20px', 'fontWeight':'bold', 'lineHeight': 1}}>{cumrap.tenCumRap}</p>
                                  <p className='text-gray-400 mt-0 ml-2'>{cumrap.tenCumRap}</p>
                              </div>
                           </div>
                           <div className='grid grid-cols-4'>
                             {cumrap.lichChieuPhim?.slice(0,12).map((lichchieu,index)=>{
                               return <NavLink to={`/checkout/${lichchieu.maLichChieu}`} className='col-span-1 text-green-800 font-bold' key={index}>
                                  {lichchieu.ngayChieuGioChieu?.slice(0,10)}
                               </NavLink>
                             })}

                           </div>
                         </div>
                       })}
                      </TabPane>
                    })}
                  </Tabs>
                </div>
              </TabPane>
              <TabPane tab='Thông Tin' key='2' style={{ 'minHeight': 300 }}>
              <p className='text-lg font-medium px-32 py-4 '>{infoMovie.moTa}</p>
              </TabPane>
              <TabPane tab='Thông Tin Về Phim' key='3' style={{ 'minHeight': 300 }}>
                Thông tin 3
              </TabPane>
            </Tabs>
      </div>
    </Fragment>
  )
}
