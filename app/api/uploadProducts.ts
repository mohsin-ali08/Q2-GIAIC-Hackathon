// /pages/api/uploadProduct.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, price, originalPrice, description, imageUrl } = req.body;

    try {
      const newProduct = await client.create({
        _type: 'product',
        title,
        price,
        originalPrice,
        description,
        image: {
          _type: 'image',
          asset: {
            _ref: imageUrl, // You should upload an image first and get the asset reference
          },
        },
      });

      res.status(200).json({ message: 'Product uploaded successfully', product: newProduct });
    } catch (error) {
      res.status(500).json({ message: 'Error uploading product', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
