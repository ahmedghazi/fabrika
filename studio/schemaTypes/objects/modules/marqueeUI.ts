import {TbArrowNarrowLeft} from 'react-icons/tb'
import {defineField} from 'sanity'

export default defineField({
  name: 'moduleMarqueeUI',
  title: 'Marquee',
  description: 'text défilant',
  type: 'object',
  icon: TbArrowNarrowLeft,
  fields: [
    // { name: 'text', type: 'string' },

    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'linkExternal',
        },
      ],
    }),
    {
      name: 'foregroundColor',
      type: 'string',
      description: 'format hex : #123321',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      description: 'format hex : #123321',
    },
  ],
  preview: {
    select: {
      items: 'items.0.label',
    },
    prepare(selection) {
      const {items} = selection
      return {
        // title: title,
        title: items,
      }
    },
  },
})
