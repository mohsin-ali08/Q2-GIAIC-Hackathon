import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/products'
import { featuredProducts } from '../schemas/featuredProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, featuredProducts],
}
