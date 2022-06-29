import { baseServices } from "./baseServices";

export class QuanLyRegister extends baseServices {
    constructor(){
        super()
    }
    layThongTinDangKy = (values) => {
        return this.post('/api/QuanLyNguoiDung/DangKy',values)
    }
}

export const quanlyRegister = new QuanLyRegister();