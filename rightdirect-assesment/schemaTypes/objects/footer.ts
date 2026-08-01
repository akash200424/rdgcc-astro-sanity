import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',

  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'heading',
      title: 'CTA Heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'CTA Description',
      type: 'text',
    }),

    defineField({
      name: 'button',
      title: 'CTA Button',
      type: 'button',
    }),

    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
    }),

    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),

    // Addresses
    defineField({
      name: 'addresses',
      title: 'Office Addresses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Office Title',
              type: 'string',
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'about',
      title: 'Company Description',
      type: 'text',
    }),

    // Footer links
    defineField({
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
})
