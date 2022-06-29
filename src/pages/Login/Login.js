import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logo from '~/assets/img/LogoTix.png'
import { getUserAction } from '~/redux/actions/LoginAction'

export default function Login() {
    
    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            dispatch(getUserAction(values))
        }
    })

  return (
        <section onSubmit={(e)=>{
            e.preventDefault()
            formik.handleSubmit(e)
        }} className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full mx-auto">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div className="text-center">
                                            <img className="mx-auto w-36" src={Logo} alt="logo" />
                                            <h4 className="text-2xl font-semibold mt-1 mb-12 pb-1">ĐĂNG NHẬP</h4>
                                        </div>
                                        <form onSubmit={(e)=>{
                                            formik.handleSubmit(e)
                                        }}>
                                            <p className="mb-4">Vui lòng nhập thông tin đăng nhập</p>
                                            <div className="mb-4">
                                                <input name='taiKhoan' onChange={formik.handleChange} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Tài Khoản" />
                                            </div>
                                            <div className="mb-4">
                                                <input name='matKhau' onChange={formik.handleChange} type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Mật Khẩu" />
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <button className="border-2 border-blue-700 inline-block px-6 py-2.5 text-back font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light" style={{background: 'linear-gradient(to right #ee7724,#d8363a,#dd3675,#b44593)'}}>
                                                Đăng Nhập
                                            </button>
                                            <a className="text-gray-500" href="#!">Quên Mật Khẩu?</a>
                                    </div>
                                    <div className="flex items-center justify-between pb-6">
                                        <p className="mb-0 mr-2">Bạn không có tài khoản?</p>
                                        <NavLink to='/register' type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            Đăng Kí
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none" style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                            <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                <h4 className="text-xl font-semibold mb-6">Trang Web Đặt Vé Xem Phim</h4>
                                <p className="text-sm">
                                Ứng Dụng Tiện Lợi Dành Cho Người Yêu Điện Ảnh
Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div >
</section>

  )
}
