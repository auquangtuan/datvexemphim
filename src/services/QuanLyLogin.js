import { baseServices } from "./baseServices";

export class QuanLyUser extends baseServices {

    constructor(){
        super();
    }
    
    layThongTinDangNhap = (values) => {
        return this.post('/api/QuanLyNguoiDung/DangNhap',values)
    }
}

export const quanLyUser = new QuanLyUser();