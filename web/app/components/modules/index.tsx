"use client";
import "./index.scss";
import React from "react";
import MarqueeUI from "./MarqueeUI";
import SliderUI from "./SliderUI";
import FeaturedPagesUI from "./FeaturedPagesUI";
import StickersdUI from "./StickersdUI";

// const Tour = dynamic(() => import("./Tour"), { ssr: false });

const Modules = ({ input }: any) => {
  const _renderModules = () => {
    const _modules = input.map((module: any, i: number) => {
      console.log(module._type);
      switch (module._type) {
        // case "moduleImagesUI":
        //   return <ImagesUI key={module._key} input={module} />;
        // case "moduleTextsUI":
        //   return (
        //     <TextsUI key={module._key} input={module} pageTitle={pageTitle} />
        //   );
        case "moduleMarqueeUI":
          return <MarqueeUI key={module._key} input={module} />;
        case "moduleSliderUI":
          return <SliderUI key={module._key} input={module} />;
        case "moduleFeaturedPagesUI":
          return <FeaturedPagesUI key={module._key} input={module} />;
        case "moduleStickersUI":
          return <StickersdUI key={module._key} input={module} />;
        default:
          return null;
      }
    });
    return _modules;
  };

  return <div className='modules'>{_renderModules()}</div>;
};

export default Modules;
