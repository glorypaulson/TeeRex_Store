import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/models/products.interface";

export const addToCart = createAction('[Cart Component] Add To Cart',props<{ item : Products}>());

