export interface iProduct {
    id: number, 
    title: string,
    subTitle?: string,
    description?: string,
    price: number, 
    imgUrl?: string, 
    qty: number,
    rating: number,
    new?: boolean,
    feature?: boolean,
    sale: number
}