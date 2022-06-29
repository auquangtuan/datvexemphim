import { ThongTinDatVe } from "~/_core/models/ThongTinDatVe";
import { baseServices } from "./baseServices";

export class QuanLyDatVe extends baseServices {

    constructor(){
        super()
    }
    
    layThongTinVe = (maso) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maso}`);
    }

    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post('api/QuanLyDatVe/DatVe',thongTinDatVe)
    }
}

export const quanLyDatVe = new QuanLyDatVe();