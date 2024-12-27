import { createClient } from '@sanity/client';


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-12-27', // Use a date-based version
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

async function fetchProductBySlug(slug: string) {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      description,
      price,
      image,
      slug
    }
  `;

  const params = { slug };

  try {
    const product = await client.fetch(query, params);
    console.log('Product Data:', product);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Usage example: Fetch a product by slug
fetchProductBySlug('apple-iphone-14-pro-max')
  .then(product => {
    if (product) {
      console.log(product);
    } else {
      console.log('Product not found');
    }
  })
  .catch(error => console.error(error));

export default client;
