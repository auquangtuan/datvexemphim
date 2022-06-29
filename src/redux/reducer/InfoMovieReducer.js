import { GET_MOVIE_ACTION } from "../constants/HomePageType";

const stateDefault = {
    infoMovie: [{}]
}

export const InfoMovieReducer = (state = stateDefault, action ) => {
    switch (action.type) {
        case GET_MOVIE_ACTION: {
            state.infoMovie = action.infoMovie
            return {...state}
            break;
        }
        default:
            return {...state}
    }
}