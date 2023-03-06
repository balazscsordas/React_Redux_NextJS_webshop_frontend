import { StaticImageData } from "next/image";

export interface CategoryInterface {
    id: number,
    name: string,
    image: string,
    filter1: string,
    filter2: string,
}

export interface CategoryListInterface {
    id: number,
    name: string,
    imageURL: string,
}