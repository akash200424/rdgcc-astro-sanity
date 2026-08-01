import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'whoWeWorkWith',
  title: 'Who We Work With',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      type: 'text',
    }),

    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              type: 'text',
            }),

            defineField({
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
})
