import { quanLyLichChieu } from "~/services/QuanLyLichChieu"
import { GET_MOVIE_ACTION } from "../constants/HomePageType";

export const getMovieAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const resuilt = await quanLyLichChieu.layThongTinLichChieuPhim(maPhim);
            dispatch({
                type : GET_MOVIE_ACTION,
                infoMovie: resuilt.data.content
            })
        } catch (error) {
            console.log("Error Info Movie")
        }
    }
}