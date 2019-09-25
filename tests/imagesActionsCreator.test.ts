import {getImages} from "../Redux/ImagesActionsCreator";
import {ImagesReducer, ImagesReducerState} from "../Redux/imagesReducer";
import * as data from './MockImages.json';

test('images actions creator back', () => {
    const imagesAction = getImages(20, -10)
    expect(imagesAction.images.length).toBe(0);
    expect(imagesAction.type).toBe('updateImages');
    expect(imagesAction.currentIndex).toBe(0);
});

test('images reducer test initial', () => {
    const initialState = ImagesReducer(null, {type: 'nonHandledType'})
    expect(initialState.allImages.length).toBe(0);
    expect(initialState.imagesToDisplay.length).toBe(0);
    expect(initialState.currentIndex).toBe(0);
});

