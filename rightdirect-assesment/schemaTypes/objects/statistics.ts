import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'statistics',
  title: 'Statistics',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Statistics Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
