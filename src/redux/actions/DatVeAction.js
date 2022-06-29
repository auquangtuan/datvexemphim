import { quanLyDatVe } from "~/services/QuanLyDatVe"
import { ThongTinDatVe } from "~/_core/models/ThongTinDatVe"
import { GET_VE } from "../constants/HomePageType"

export const getThongTinVe = (maso) => {
    return async (dispatch) => {
      try {
        const resuilt = await quanLyDatVe.layThongTinVe(maso)
        if(resuilt.data.statusCode === 200 ){
          dispatch({
            type: GET_VE,
            thongTinVe: resuilt.data.content
          })
        }
      } catch (error) {
        console.log("Dat Ve")
      }
    } 
}

export const getThongTinDatVe =(thongTinDatVe = new ThongTinDatVe()) => {
  return async dispatch => {
    try {
      await quanLyDatVe.datVe(thongTinDatVe)
    } catch (error) {
      console.log("ThongTinDatVe",error)
    }
  }
}