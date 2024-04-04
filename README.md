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
2. Get the list of the products or Latest products added: Here we connect to the CMS (sanity) to display the product by Category and or Last Added
3. Add to Cart and Payment: Add to Cart and Checkout with Stripe Payment Gateway // but i got the error because i didn't use the stripe plan (not-free)

# Vercel

It's been 3 days I got a bug when deploy the app to vercel because of sanity problem, even I have use the .vercelignore it still got the error
