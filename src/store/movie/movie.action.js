import {ADD_MOVIE, DELETE_MOVIE, GET_MOVIE, } from "./movie.types";



export const getMovie = ( list ) => {
    return{
        type: GET_MOVIE,
        payload: list
    }
}

export const deleteTodo = ( ) => {
    return{
        type: DELETE_MOVIE
    }
}

export const AddData = ( list ) => {
    return{
        type: ADD_MOVIE,
        payload: list
    }
}
