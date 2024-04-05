## Prequisite
Node JS Last Version,
use-shopping-cart,
sanity

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, run the sanity server:

go to sanity directory and run the following command

```bash
npm run dev
```
Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

1. Add the product: Since in this scenarion the e-commerce is single merchant, we can add the product by sanity (CMS)
```
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product'
        },
        {
     . . .
```
3. Get the list of the products or Latest products added: Here we connect to the CMS (sanity) to display the product by Category and or Last Added
   ```
   async function getData() {
    const query = `*[_type == 'product'][0..4] | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

    const data = await client.fetch(query)

    return data;
  }
```
5. Add to Cart and Payment: Add to Cart and Checkout with Stripe Payment Gateway // but i got the error because i didn't use the stripe plan (not-free)
```
export default function ShoppingCartModal(){
    const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart();

    async function handleCheckoutClick(event: any) {
        event.preventDefault()
        try {
            const result = await redirectToCheckout();
            if(result?.error) {
                console.log('result');
            }
        } catch (error) {
            console.log(error);
        }
    }
```

# Vercel

It's been 3 days I got a bug when deploy the app to vercel because of sanity problem, even I have use the .vercelignore it still got the error
