import {ImageItem} from "../ImageItem";
import {ImagesActions} from "./ImagesActionsTypes";

export interface ImagesReducerState {
    allImages: ImageItem[]
    imagesToDisplay: ImageItem[]
    currentIndex: number
}

const initialState: ImagesReducerState = {
    allImages : [],
    imagesToDisplay: [],
    currentIndex: 0,
};

export const ImagesReducer = (state: ImagesReducerState = initialState, action: ImagesActions): ImagesReducerState => {

    switch (action.type) {

        case "updateImages":
            const allImages = state.allImages.concat(action.images)
            return {
                ...state,
                allImages,
                imagesToDisplay: allImages.slice(action.currentIndex, action.currentIndex + action.numberOfImagesToDisplay),
                currentIndex: action.currentIndex + action.numberOfImagesToDisplay
            };

        default:
            return state
    }
};
