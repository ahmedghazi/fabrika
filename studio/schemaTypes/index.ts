import home from './singletons/home'
import pageModulaire from './documents/pageModulaire'
import project from './documents/project'
import infos from './singletons/infos'
import settings from './singletons/settings'

import localeString from './locale/localeString'
import localeBlockContent from './locale/localeBlockContent'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import linkModal from './objects/linkModal'
import seo from './objects/seo'
import figure from './objects/figure'

import moduleImages from './objects/modules/imagesUI'
import moduleTexts from './objects/modules/textsUI'
import moduleFeaturedPages from './objects/modules/featuredPagesUI'
import moduleMarqueeUI from './objects/modules/marqueeUI'
import moduleSliderUI from './objects/modules/sliderUI'
import modulestickersUI from './objects/modules/stickersUI'
import linkAnchor from './objects/linkAnchor'

export const schemaTypes = [
  home,

  infos,
  settings,
  pageModulaire,
  project,

  localeString,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  linkModal,
  linkAnchor,
  seo,
  figure,

  moduleImages,
  moduleTexts,
  moduleFeaturedPages,
  moduleMarqueeUI,
  moduleSliderUI,
  modulestickersUI,
]
export default schemaTypes
