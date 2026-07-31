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
  ],
})
