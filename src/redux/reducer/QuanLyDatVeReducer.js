import { ThongTinLichChieu } from "~/_core/models/ThongTinLichChieu"
import { DAT_GHE, GET_VE } from "../constants/HomePageType"

const stateDefault = {
    thongTinVe :  new ThongTinLichChieu(),
    danhSachGheDangDat : []
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_VE : {
            state.thongTinVe = action.thongTinVe
            return {...state}
        }
        case DAT_GHE : {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDat.maGhe)
            if(index !== -1) {
                danhSachGheCapNhat.splice(index,1)
            } else {
                danhSachGheCapNhat.push(action.gheDat)
            }
            return {...state, danhSachGheDangDat:danhSachGheCapNhat}
        }
        default:
            return {...state}
    }
}