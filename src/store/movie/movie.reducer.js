import {ADD_MOVIE, DELETE_MOVIE, GET_MOVIE} from "./movie.types";

const initialState = {
    Movie: [],
    UserData: []
}


export const movieReducer = (state = initialState, action) => {

    switch (action.type){

        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }

        case DELETE_MOVIE:
            return {
                ...state,
                movie: []
            }

        case ADD_MOVIE:
            return {
                ...state,
                movie: action.payload
            }

        default:
            return state
    }
}




