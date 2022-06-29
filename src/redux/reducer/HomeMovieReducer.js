import { GET_HOME_MOVIES } from "../constants/HomePageType"

const stateDefault = {
    arrMovies : [
        {
            "maPhim": 10147,
            "tenPhim": "Doctor Strange 2019",
            "biDanh": "doctor-strange-2019",
            "trailer": "https://www.youtube.com/watch?v=kmXjPbN-rYU",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/doctor-strange-2019_gp01.jpg",
            "moTa": "Doctor Strange: Phù thủy tối thượng là một phim của điện ảnh Hoa Kỳ dựa trên nhân vật cùng tên của hãng Marvel Comics, sản xuất bởi Marvel Studios và phân phối bởi Walt Disney Studios Motion Pictures. Đây là bộ phim thứ 14 trong Marvel Cinematic Universe.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-03-04T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        }
    ]
}

export const HomeMovieReducer = (state = stateDefault, action ) => {
    switch (action.type) {
        case GET_HOME_MOVIES : {
            state.arrMovies = action.arrMovies
            return {...state}
        }
        default:
            return {...state}
    }
}