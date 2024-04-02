import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineField({
  name: 'moduleFeaturedPagesUI',
  title: 'Featured Pages',
  type: 'object',
  icon: ThListIcon,
  // initialValue: {
  //   layout: 'mosaic',
  // },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'champs interne, pas visible en front',
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'pageModulaire'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Featured Pages',
      }
    },
  },
})
