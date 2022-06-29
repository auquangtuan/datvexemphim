
import { quanLyUser } from "~/services/QuanLyLogin"
import { history } from "~/util/history";
import { DANG_NHAP } from "../constants/HomePageType";

export const getUserAction =(values)=> {
    return async (dispatch) => {
        try {
            const resuilt = await quanLyUser.layThongTinDangNhap(values);
            if(resuilt.data.statusCode === 200) {

                dispatch({
                    type: DANG_NHAP,
                    values : resuilt.data.content
                })
                history.back()
            }

            
        } catch (error) {
            console.log("Login", error.response.data)
        }
    }
}