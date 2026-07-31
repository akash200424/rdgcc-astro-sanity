import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'successStories',
  title: 'Success Stories',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'stories',
      title: 'Stories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Company Logo',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'button',
            }),
          ],
        },
      ],
    }),
  ],
})
