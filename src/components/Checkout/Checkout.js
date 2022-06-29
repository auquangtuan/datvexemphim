import { Tabs } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getThongTinDatVe, getThongTinVe } from '~/redux/actions/DatVeAction';
import { DAT_GHE } from '~/redux/constants/HomePageType';
import { USER_LOGIN } from '~/util/setting/config';
import { ThongTinDatVe } from '~/_core/models/ThongTinDatVe';
import './Checkout.css';
function Checkout() {
  const USER = localStorage.getItem(USER_LOGIN)
  let navigate = useNavigate();
  const { thongTinVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
  const dispatch = useDispatch()
  const location = useLocation()
  const locationNumber = location.pathname.slice(10, 15)
  useEffect(() => {
    if(USER === null) {
      navigate('/login')
    }
    dispatch(getThongTinVe(locationNumber))
  }, [])
  const { thongTinPhim, danhSachGhe } = thongTinVe;
  const renderSeet = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = '';
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (indexGheDD !== -1) {
        classGheDangDat = 'gheDangDat'
      }

      return (
        <Fragment key={index}>
          <button onClick={() => {
            dispatch({
              type: DAT_GHE,
              gheDat: ghe
            })
          }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>
            {ghe.daDat ? "X" : ghe.stt}
          </button>
        </Fragment>
      )
    })
  }
  return (
    <div className='grid grid-cols-12 h-full w-full gap-2 overflow-hidden'>
      <div className="col-span-8 h-[100vh] border-r-2 border-r-full">
        <div className='h-full ml-16 webkitTabMovies'>
          <div className='border-b-2 flex flex-row'>
            <div className='pt-6 pb-2 flex flex-row gap-8 ml-16'>
              <img className='w-[44.35px] h-[44.35px]' src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="avatar" />
              <div className='flex flex-col text-base font-bold'>
                <p>{thongTinPhim?.tenCumRap}</p>
                <p>{thongTinPhim?.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.gioChieu}</p>
              </div>
            </div>
          </div>
          <div className='p-4'>
            {renderSeet()}
          </div>
        </div>
      </div>
      <div className="col-span-4 h-[100vh] webkitTabMovies">
        <div className='text-4xl font-bold p-4 text-center border-b-2 text-green-300 pb-[22px]'>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
          return tongTien += ghe.giaVe
        }, 0).toLocaleString()}</div>
        <div className="flex flex-col gap-2 font-semibold text-base p-4 border-b-2 pb-2">
          <div className='flex flex-row gap-4 items-center'>
            <p className='bg-orange-400 px-2 py-1 rounded-lg text-white'>{thongTinPhim?.maLichChieu}</p>
            <p>{thongTinPhim?.tenPhim}</p>
          </div>
          <div className='mb-2'>{thongTinPhim?.tenCumRap}</div>
          <div><span>{thongTinPhim?.ngayChieu}</span> -<span>{thongTinPhim?.gioChieu}</span> - <span>{thongTinPhim?.gioChieu}</span></div>
        </div>
        <div className="flex justify-between px-4 py-2 text-xl font-bold border-b-2 items-center">
          <div className='text-orange-500 mb-0 items-center flex flex-wrap gap-1'>Ghế:
            {danhSachGheDangDat.map((item, index) => {
              return <span className='text-green-500 text-xl px-1' key={index}>{item.stt}</span>
            })}
          </div>
          <p className='text-green-300 mb-0'>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe
          }, 0).toLocaleString()}</p>
        </div>
        <div className="w-full p-2 border-b-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Password
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Email" />
        </div>
        <div className="w-full p-2 border-b-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Số Điện Thoại
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Số Điện Thoại" />
        </div>
        <div className="p-2 border-b-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Mã Giảm Giá
          </label>
          <input className="w-[50%] appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nhập Tại Đây" />
        </div>
        <p className='p-4 text-center'>Vé đã mua không thể đổi hoặc hoàn tiền
          Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</p>
        <div className=''>
          <button onClick={() => {
            const thongTinDatVe = new ThongTinDatVe()
            thongTinDatVe.danhSachVe = danhSachGheDangDat
            dispatch(getThongTinDatVe(thongTinDatVe))
          }} className='w-full bg-orange-400 rounded-xl py-8 text-2xl font-bold uppercase text-white'>Đặt Vé Ngay</button>
        </div>
      </div>

    </div>
  )
}

export default function (props) {
  const { TabPane } = Tabs;
  return (
    <div className='p-5'>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Chọn Ghế, Thanh Toán" key="1">
          <Checkout />
        </TabPane>
        <TabPane tab="Kết Quả Đặt Vé" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  )
}
