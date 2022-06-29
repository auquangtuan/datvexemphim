import { quanlyRegister } from "~/services/QuanLyRegister"

export const getRegisterAction = (values) => {
    return async (dispatch) => {
        try {
            const resuilt = await quanlyRegister.layThongTinDangKy(values)
        } catch (error) {
            console.log("Error Register")
        }
    }
}