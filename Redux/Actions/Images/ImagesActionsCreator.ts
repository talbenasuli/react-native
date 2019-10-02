import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {ImageItem} from "../../Model/ImageItem";

export const getImages = (fromIndex: number, numberOfImagesToDisplay: number) => {
    if(numberOfImagesToDisplay < 0) {
        return {
            type: 'updateImages',
            images: [],
            currentIndex: fromIndex + 2*numberOfImagesToDisplay,
            numberOfImagesToDisplay: -numberOfImagesToDisplay
        }
    }
    return (dispatch: ThunkDispatch<{},{},AnyAction>) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${fromIndex}&_limit=${numberOfImagesToDisplay}`)
            .then((response) => response.json())
            .then((responseJson: ImageItem[]) => {
                if(responseJson.length === 0) {
                    return {
                        type: 'no action'
                    }
                }

                dispatch({
                    type: 'updateImages',
                    images: responseJson,
                    currentIndex: fromIndex,
                    numberOfImagesToDisplay
                })
            });
    }
};
