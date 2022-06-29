import { GROUPID } from "~/util/setting/config"
import { baseServices } from "./baseServices";

export class QuanLyPhimServices extends baseServices {
    constructor() {
        super()
    }
    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyPhimServices = new QuanLyPhimServices();