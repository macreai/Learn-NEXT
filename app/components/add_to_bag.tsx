"use client";

import { Button } from "../../components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    desctiption: string;
    price: number;
    currency: string;
    image: any;
    price_id: string
}

export default function AddToBag({currency, desctiption, image, name, price, price_id}: ProductCart){
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        desctiption: desctiption,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    };

    return (
        <Button onClick={() => {
            addItem(product), handleCartClick();
        }}>
            Add to Cart
        </Button>
    )
}