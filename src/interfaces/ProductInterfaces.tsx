import { StaticImageData } from "next/image";

export interface ProductInCartInterface {
    id: number,
    name: string,
    quantity: number,
    imageURL: string,
    currentStock: number,
    unitPrice: number,
    size?: string,
    volume?: string,
};

// Categories page
export interface ProductListInterface {
    id: number,
    name: string,
    unitPrice: number,
    imageURL: StaticImageData,
}

// Product details page
export interface ProductDataInterface {
    id: number,
    name: string,
    imageURL: string,
    unitPrice: number,
    currentStock: number,
    description: string,
    size?: string,
    volume?: string,
}