"use client";

import { Button } from "../../components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./add_to_bag";

export default function CheckoutNow({currency, desctiption, image, name, price, price_id}: ProductCart){
    const { checkoutSingleItem } = useShoppingCart();

    function buyNow(priceId: string){
        checkoutSingleItem(priceId)
    }

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
            buyNow(product.price_id)
        }}>
            Add to Cart
        </Button>
    )
}