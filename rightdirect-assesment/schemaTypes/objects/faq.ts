import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
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
      rows: 3,
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),

    defineField({
      name: 'items',
      title: 'FAQ Items',
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
              name: 'question',
              title: 'Question',
              type: 'string',
            }),

            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 5,
            }),

            defineField({
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            }),

            defineField({
              name: 'linkUrl',
              title: 'Link URL',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
  },
})
