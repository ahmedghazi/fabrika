import { groq } from "next-sanity";
import { client } from "./sanity-client";
import { Home, Infos, Project, Settings } from "../types/schema";
import { cache } from "react";
import {
  blockContent,
  moduleFeaturedPagesUI,
  moduleImagesUI,
  moduleMarqueeUI,
  moduleSliderUI,
  moduleStickersUI,
  moduleTextsUI,
  seo,
} from "./fragments";
// import { cache } from "react";

// const clientFetch = cache(client.fetch.bind(client));
export const cachedClient = cache(client.fetch.bind(client));

export async function getSettings(): Promise<Settings> {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      ...,

      navPrimary[]{
        ...,
        _type == 'linkAnchor' => {
          _type,
          target
        },
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug
          }
        }
      },
      footerItems[]{
        ${blockContent}
      }
    }`
  );
}

/**
 * HOME
 */

export const homeQuery = groq`*[_type == "home"][0]{

  modules[]{
    ${moduleImagesUI},
    ${moduleTextsUI},
    ${moduleSliderUI},
    ${moduleMarqueeUI},
    ${moduleStickersUI},
    ${moduleFeaturedPagesUI}
  }
}
`;
/*
${moduleImagesUI},
    ${moduleTextsUI},
    ${moduleSliderUI},
    ${moduleMarqueeUI},
    ${moduleStickersUI}
*/
export async function getHome(): Promise<Home> {
  // console.log(homeQuery);
  return cachedClient(homeQuery, {});
  // return client.fetch(homeQuery, {});
}
