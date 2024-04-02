import {defineField} from 'sanity'
import {RiEmojiStickerLine} from 'react-icons/ri'

export default defineField({
  name: 'moduleStickersUI',
  title: 'Stickers',
  type: 'object',
  icon: RiEmojiStickerLine,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'items.0.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        subtitle: 'Stickers',
        media: media,
      }
    },
  },
})
