import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',

  fields: [
    defineField({
      name: 'headingLines',
      title: 'Heading Lines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'normalText',
              title: 'Normal Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'highlightText',
              title: 'Highlighted Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              normal: 'normalText',
              highlight: 'highlightText',
            },

            prepare({normal, highlight}) {
              return {
                title: `${normal} ${highlight}`,
              }
            },
          },
        },
      ],

      validation: (Rule) => Rule.min(1).required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Hero Section',
      }
    },
  },
})
