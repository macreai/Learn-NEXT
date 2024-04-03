import { Star, Truck } from "lucide-react";
import { Button } from "../../../components/ui/button";
import AddToBag from "../../components/add_to_bag";
import ImageGallery from "../../components/image_gallery";
import { fullProduct } from "../../interface";
import { client } from "../../lib/sanity";

async function getData(slug: string) {
    const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
        _id,
          images,
          price,
          name,
          desctiption,
          "slug": slug.current,
          price_id,
          "categoryName": category->name,
      }`;

    const data = await client.fetch(query);

    return data;
}

export default async function ProductPage({params}: {params: {slug: string}}){
    const data: fullProduct = await getData(params.slug)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images}/>

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span>
                                {data.categoryName}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                {data.name}
                            </h2>
                        </div>
                        <div className="mb-6 flex items-center gap-3 md:mb-10">
                            <Button className="rounded-full gap-x-2">
                                <span className="text-sm">4.2</span>
                                <Star className="h-5 w-5" />
                            </Button>

                            <span className="text-sm text-gray-500 transition duration-100">102 Ratings</span>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">${data.price}</span>
                                <span className="mb-0.5 text-red-500 line-through">${data.price + 30}</span>
                            </div>

                            <span className="text-sm text-gray-500">Free Shipping</span>
                        </div>

                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Truck className="w-6 h-6"/>
                            <span className="text-sm">3-4 Days Shipping</span>
                        </div>

                        <div className="flex gap-2.5">
                            <AddToBag currency="USD" desctiption={data.desctiption} image={data.images[0]} name={data.name} price={data.price} price_id={data.price_id} key={data._id}/>
                            <Button variant={"secondary"}>Checkout</Button>
                        </div>

                        {/* <p className="mt-12 text-base text-gray-500 tracking-wide">{data.desctiption}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}