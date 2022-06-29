import { quanLyLichChieu } from "~/services/QuanLyLichChieu"
import { GET_TAB_MOVIES } from "../constants/HomePageType";

export const getTabMoviesAction = () => {
    return async (dispatch) => {
        try {
            const resuilt = await quanLyLichChieu.layThongTinLichChieuHeThongRap();
            if(resuilt.status === 200) {
                dispatch({
                    type: GET_TAB_MOVIES,
                    arrTabMovies: resuilt.data.content
                })
            }
        } catch (error) {
            console.log("Error Tab Movies")
        }
    }
}