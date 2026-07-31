import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'url',
    }),
  ],
})
