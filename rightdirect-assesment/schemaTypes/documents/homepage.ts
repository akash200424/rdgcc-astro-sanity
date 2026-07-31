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
  ],
})
