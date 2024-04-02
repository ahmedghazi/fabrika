export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			}
		}
	},
	fr[]{
		...,
		_type == "image" => {
			asset->
		},
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,
			}
		}
	}
`;

export const pageCard = `
	_id,
  _type,
  slug,
  imageCover{
    ...,
    asset->
  },
	imageHero{
    ...,
    asset->
  },
  title,
	supTitle,
	subTitle,
	excerpt
`;

export const moduleTextsUI = `
	_type == 'moduleTextsUI' => {
		...
	}
`;
export const moduleImagesUI = `
	_type == 'moduleImagesUI' => {
		images[] {
			...,
			image {
				...,
				asset->
			}
		}
	}
`;

export const moduleSliderUI = `
	_type == 'moduleSliderUI' => {
		...,
		items[] {
			...,
			image {
				...,
				asset->
			}
		}
	}
`;

export const moduleFeaturedPagesUI = `
	_type == 'moduleFeaturedPagesUI' => {
		...,
		items[]-> {

			${pageCard}
		}
	}
`;

export const moduleMarqueeUI = `
	_type == 'moduleMarqueeUI' => {
		...
	}
`;

export const moduleStickersUI = `
	_type == 'moduleStickersUI' => {
		...,
		items[] {
			...,
			image {
				...,
				asset->
			}
		}
	}
`;

// // export const content = `
// // 	...,
// // 	items[]{
// // 		...,
// // 		image{
// // 			asset->
// // 		},

// // 	}
// // `;
