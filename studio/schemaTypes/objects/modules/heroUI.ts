import {defineField} from 'sanity'

export default defineField({
  name: 'moduleHeroUI',
  title: 'Hero UI',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'cta',
      type: 'linkExternal',
      title: 'Call to action button',
    }),
  ],
})
