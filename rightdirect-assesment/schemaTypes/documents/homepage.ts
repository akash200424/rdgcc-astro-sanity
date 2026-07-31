import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'statistics',
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'solutions',
    }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'process',
    }),
    defineField({
      name: 'successStories',
      title: 'Success Stories',
      type: 'successStories',
    }),
    defineField({
      name: 'trustedBrands',
      title: 'Trusted Brands',
      type: 'trustedBrands',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'testimonial',
    }),
    defineField({
      name: 'whoWeWorkWith',
      title: 'Who We Work With',
      type: 'whoWeWorkWith',
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'faq',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    }),
  ],
})
