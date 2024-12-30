import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-12-27',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

async function fetchProductBySlug(schema: string, slug: string) {
  const query = `
    *[_type == $schema && slug.current == $slug][0] {
      _id,
      name,
      description,
      price,
      image,
      slug
    }
  `;

  const params = { schema, slug };

  try {
    const product = await client.fetch(query, params);
    console.log('Product Data:', product);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export { fetchProductBySlug };
