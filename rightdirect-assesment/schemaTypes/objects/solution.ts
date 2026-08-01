import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'solutions',
  title: 'Solutions',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'items',
      title: 'Solution Cards',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Introduction',
              type: 'text',
              rows: 4,
            }),

            defineField({
              name: 'bulletPoints',
              title: 'Bullet Points',
              type: 'array',

              of: [
                {
                  type: 'string',
                },
              ],
            }),

            defineField({
              name: 'icon',
              title: 'Card Image',
              type: 'image',

              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'button',
              title: 'Button',
              type: 'button',
            }),
          ],

          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
    }),
  ],
})
