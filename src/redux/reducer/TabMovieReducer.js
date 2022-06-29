import { GET_TAB_MOVIES } from "../constants/HomePageType"

const stateDefault = {
    arrTabMovies : [
        {}
    ]
}

export const TabMovieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_TAB_MOVIES : {
            state.arrTabMovies = action.arrTabMovies
            return {...state}
        }
        default:
            return {...state}
    }
}