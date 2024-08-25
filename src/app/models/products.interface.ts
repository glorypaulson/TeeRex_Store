export interface Products {
    id: number
    imageURL: string
    name: string
    type: string
    price: number
    currency: string
    color: string
    gender: string
    quantity: number
    currentQuantity?: number
    currentPrice?: number
    addedToCart?: boolean
}