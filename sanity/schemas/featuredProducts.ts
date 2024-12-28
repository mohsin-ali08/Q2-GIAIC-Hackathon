// schemas/product.ts
import { defineField, defineType } from "sanity";
export const featuredProducts = defineType({
  name : 'featuredProducts',
  title : 'featuredProducts',
  type : 'document',
  fields : [
    defineField({
      name : 'name',
      title : 'Name',
      type : 'string',
    
    }),
    {
      name : 'slug',
      title : 'slug',
      type : 'slug',
      options : {source:'name'}
    },
    {
      name : 'images',
      title : 'Images',
      type : 'array',
      of :[{type:'image'}]
    },
    {
      name : 'description',
      title : 'Description',
      type : 'string',
    
    },
    {
      name : 'price',
      title : 'Price',
      type : 'number',
    
    },

  ]
})