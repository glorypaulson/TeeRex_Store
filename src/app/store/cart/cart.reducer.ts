import { createReducer, on } from "@ngrx/store";
import { Products } from "src/app/models/products.interface";
import { addToCart } from "./cart.actions";

export interface CartState {
    cartProducts: Products[];
}

export const initialState: CartState = {
    cartProducts: [],
};

export const cartReducer = createReducer(
    initialState,
    on(addToCart , (state, {item}) => ({
        ...state, 
        cartProducts: [...state.cartProducts , item]
        
    }))
    
)