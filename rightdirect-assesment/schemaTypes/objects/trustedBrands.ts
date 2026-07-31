import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'trustedBrands',
  title: 'Trusted Brands',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'logo',
              title: 'Brand Logo',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
        },
      ],
    }),
  ],
})
