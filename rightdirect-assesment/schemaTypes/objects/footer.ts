import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
    }),
    defineField({
      name: 'button',
      title: 'CTA Button',
      type: 'button',
    }),

    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'deliveryOffice',
      title: 'Delivery Office',
      type: 'text',
    }),

    defineField({
      name: 'registeredOffice',
      title: 'Registered Office',
      type: 'text',
    }),

    defineField({
      name: 'aboutCompany',
      title: 'About Company',
      type: 'text',
    }),

    defineField({
      name: 'privacyPolicyUrl',
      title: 'Privacy Policy URL',
      type: 'url',
    }),

    defineField({
      name: 'termsConditionsUrl',
      title: 'Terms & Conditions URL',
      type: 'url',
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
})
