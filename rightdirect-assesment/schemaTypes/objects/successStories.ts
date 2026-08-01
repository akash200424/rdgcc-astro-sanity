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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
              name: 'industry',
              title: 'Industry',
              type: 'string',
            }),

            defineField({
              name: 'country',
              title: 'Country',
              type: 'string',
            }),

            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            }),

            defineField({
              name: 'coverImage',
              title: 'Cover Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'projectTitle',
              title: 'Project Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
          ],

          preview: {
            select: {
              title: 'companyName',
              subtitle: 'industry',
              media: 'coverImage',
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
