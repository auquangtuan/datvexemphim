import { TOKEN, USER_LOGIN } from "~/util/setting/config";
import { DANG_NHAP } from "../constants/HomePageType";

let user = {}

const stateDefault = {
    userLogin: user
}

if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
};

export const QuanLyNguoiDungReducer = ( state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            const {values} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(values));
            localStorage.setItem(TOKEN,values.accessToken)
            return {...state,userLogin:values}
        }
    
        default:
            return {...state}
    }
}