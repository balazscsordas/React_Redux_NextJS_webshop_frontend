import { StaticImageData } from "next/image";

export interface PaymentOptionInterface {
    id: number,
    name: string, // Cash on delivery || Credit card
    image: StaticImageData
}