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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
              name: 'clientName',
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
              name: 'clientImage',
              title: 'Client Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 5,
            }),
          ],

          preview: {
            select: {
              title: 'clientName',
              subtitle: 'company',
              media: 'clientImage',
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
