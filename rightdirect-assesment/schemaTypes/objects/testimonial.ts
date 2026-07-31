import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Client Appreciation',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
            }),
            defineField({
              name: 'name',
              title: 'Client Name',
              type: 'string',
            }),
            defineField({
              name: 'designation',
              title: 'Designation',
              type: 'string',
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Client Image',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
        },
      ],
    }),
  ],
})
