// import supportedLanguages from "../locale/supportedLanguages";
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  title: 'Link Anchor',
  name: 'linkAnchor',
  type: 'object',
  preview: {
    select: {
      label: `label.${baseLanguage}`,
    },
    prepare(selection) {
      const {label} = selection
      return {
        title: label,
      }
    },
  },
  fields: [
    defineField({
      name: 'label',
      type: 'localeString',
    }),
    defineField({
      name: 'target',
      type: 'string',
      description: 'html anchor id',
      // to: [{type: 'pageModulaire'}],
    }),
  ],
})
