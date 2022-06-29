import { configureStore } from "@reduxjs/toolkit";
import {HomeMovieReducer} from './reducer/HomeMovieReducer'
import {TabMovieReducer} from './reducer/TabMovieReducer'
import {InfoMovieReducer} from './reducer/InfoMovieReducer'
import {QuanLyNguoiDungReducer} from './reducer/QuanLyNguoiDungReducer'
import {QuanLyDatVeReducer} from './reducer/QuanLyDatVeReducer'
export const store = configureStore({
    reducer : {
        HomeMovieReducer,
        TabMovieReducer,
        InfoMovieReducer,
        QuanLyNguoiDungReducer,
        QuanLyDatVeReducer
    }
})