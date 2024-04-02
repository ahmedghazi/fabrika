import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<ModuleImagesUI>
    | SanityKeyed<ModuleTextsUI>
    | SanityKeyed<ModuleSliderUI>
    | SanityKeyed<ModuleFeaturedPagesUI>
    | SanityKeyed<ModuleMarqueeUI>
    | SanityKeyed<ModuleStickersUI>
  >;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Chapo — `localeBlockContent`
   *
   *
   */
  chapo?: LocaleBlockContent;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<
    | SanityKeyed<LinkInternal>
    | SanityKeyed<LinkExternal>
    | SanityKeyed<LinkAnchor>
  >;

  /**
   * Footer items — `array`
   *
   * contact, links, credits
   */
  footerItems?: Array<SanityKeyed<LocaleBlockContent>>;

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Surtitre — `localeString`
   *
   *
   */
  supTitle?: LocaleString;

  /**
   * Titre — `localeString`
   *
   * Le nom de la page
   */
  title?: LocaleString;

  /**
   * Soustitre — `localeString`
   *
   *
   */
  subTitle?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, page cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image Hero — `image`
   *
   * Visible on single page before the title
   */
  imageHero?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Extrait — `localeString`
   *
   *
   */
  excerpt?: LocaleString;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Soustitre — `string`
   *
   *
   */
  subTitle?: string;

  /**
   * Année — `string`
   *
   *
   */
  year?: string;

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Chapo — `localeBlockContent`
   *
   *
   */
  chapo?: LocaleBlockContent;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<ModuleImagesUI>
    | SanityKeyed<ModuleTextsUI>
    | SanityKeyed<ModuleSliderUI>
    | SanityKeyed<ModuleFeaturedPagesUI>
    | SanityKeyed<ModuleMarqueeUI>
    | SanityKeyed<ModuleStickersUI>
  >;
}

export type LocaleString = {
  _type: "localeString";
  /**
   * Français — `string`
   *
   *
   */
  fr?: string;

  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type LocaleBlockContent = {
  _type: "localeBlockContent";
  /**
   * Français — `blockContent`
   *
   *
   */
  fr?: BlockContent;

  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;
};

export type BlockContent = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Figure>
>;

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<PageModulaire | Home>;
};

export type LinkModal = {
  _type: "linkModal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * target — `string`
   *
   *
   */
  target?: "modal-works";
};

export type LinkAnchor = {
  _type: "linkAnchor";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * target — `string`
   *
   * html anchor id
   */
  target?: string;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Figure = {
  _type: "figure";
  /**
   * Image — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Description — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type ModuleImagesUI = {
  _type: "moduleImagesUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;
};

export type ModuleTextsUI = {
  _type: "moduleTextsUI";
  /**
   * title — `string`
   *
   * Module titre (visible uniquement dans l'admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<LocaleBlockContent>>;
};

export type ModuleFeaturedPagesUI = {
  _type: "moduleFeaturedPagesUI";
  /**
   * title — `string`
   *
   * champs interne, pas visible en front
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<PageModulaire>>;
};

export type ModuleMarqueeUI = {
  _type: "moduleMarqueeUI";
  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<LinkExternal>>;

  /**
   * foregroundColor — `string`
   *
   * format hex : #123321
   */
  foregroundColor?: string;

  /**
   * backgroundColor — `string`
   *
   * format hex : #123321
   */
  backgroundColor?: string;
};

export type ModuleSliderUI = {
  _type: "moduleSliderUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;

  /**
   * Call to action button — `linkExternal`
   *
   *
   */
  cta?: LinkExternal;
};

export type ModuleStickersUI = {
  _type: "moduleStickersUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;
};

export type Documents = Home | Infos | Settings | PageModulaire | Project;
