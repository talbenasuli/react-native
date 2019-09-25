import {combineReducers} from "redux";
import {ImagesReducer, ImagesReducerState} from "./imagesReducer";

export interface GeneralState {
    imagesReducer: ImagesReducerState
}

export default combineReducers ({
    imagesReducer: ImagesReducer
})
