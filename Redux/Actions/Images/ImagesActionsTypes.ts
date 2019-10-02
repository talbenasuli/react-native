import {ImageItem} from "../../Model/ImageItem";

interface UpdateImagesAction {
    type: 'updateImages'
    images: ImageItem[]
    currentIndex: number
    numberOfImagesToDisplay: number
}

export type ImagesActions = UpdateImagesAction
