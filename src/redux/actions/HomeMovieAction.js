import { quanLyPhimServices } from "~/services/QuanLyPhimService"
import { GET_HOME_MOVIES } from "../constants/HomePageType";

export const getHomeMovieAction = () => {
    return async (dispatch) => {
        try {
            const resuilt = await quanLyPhimServices.layDanhSachPhim();
            dispatch({
                type: GET_HOME_MOVIES,
                arrMovies: resuilt.data.content
            }) 
        } catch (error) {
            console.log("Error Home Movies")
        }
    }
}