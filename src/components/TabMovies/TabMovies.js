import React, { Fragment, useEffect } from 'react'
import { Tabs } from 'antd';
import './TabMovies.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTabMoviesAction } from '~/redux/actions/TabMoviesAction';
import { Link } from 'react-router-dom';
export default function TabMovies() {
  const { TabPane } = Tabs;
  const { arrTabMovies } = useSelector(state => state.TabMovieReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTabMoviesAction())
  }, [])
  return (
    <div className='TabMovies'>
      <Tabs tabPosition='left'>
        {arrTabMovies.map((item, index) => {
          return (
            <TabPane tab={
              <img className='tabmovies_img' src={item.logo} alt={item.logo}></img>
            } key={index + 1}>
              <Tabs tabPosition='left'>
                {item.lstCumRap?.slice(0, 5).map((cum, index) => {
                  return (
                    <TabPane tab={
                      <div className='cumrap_container'>
                        <img className='cumrap_img' src={cum.hinhAnh} alt={cum.hinhAnh}></img>
                        <div className='cumrap_info'>
                          <h2 className='tenCumRap'>{cum.tenCumRap}</h2>
                          <p className='cumrap_diachi'>{cum.diaChi}</p>
                        </div>
                      </div>
                    } key={index + 1}>
                        {cum.danhSachPhim?.slice(0, 3).map((phim, index) => {
                          return (
                            <Fragment>
                              <div className='phim_container'>
                                <img className='phim_img' src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png' }}></img>
                                <div className='cumrap_info'>
                                  <h2 className='tenCumRap'>{phim.tenPhim}</h2>
                                  <p className='tenCumRap'>{phim.maPhim}</p>
                                </div>
                              </div>
                              <div className='lstLichChieuTheoPhim'>
                                {phim.lstLichChieuTheoPhim?.slice(0, 4).map((items, index) => {
                                  return (
                                    <div className='ngayChieuGioChieu_container' key={index}>
                                      <Link to={`/checkout/${items.maLichChieu}`} className='ngayChieuGioChieu'>{items.ngayChieuGioChieu.slice(0, 10)}</Link>
                                    </div>
                                  )
                                })}
                              </div>
                            </Fragment>
                          )
                        })} 
                    </TabPane>
                  )
                })}
              </Tabs>
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}
