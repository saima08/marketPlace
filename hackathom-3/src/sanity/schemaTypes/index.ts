import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import orderSchema from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , orderSchema],
}
