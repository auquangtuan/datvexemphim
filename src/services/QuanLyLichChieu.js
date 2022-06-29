import { GROUPID } from "~/util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyLichChieu extends baseServices {
    constructor(){
        super()
    }
    layThongTinLichChieuHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
} 

export const quanLyLichChieu = new QuanLyLichChieu();