import { client } from '@/sanity/lib/client';

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    originalPrice,
    description,
    "imageUrl": image.asset->url
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
