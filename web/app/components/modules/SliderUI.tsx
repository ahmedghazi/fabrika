import { ModuleSliderUI } from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import React from "react";
import Slider from "../ui/Slider";

type Props = {
  input: ModuleSliderUI;
};

const SliderUI = ({ input }: Props) => {
  return (
    <section className='module module--slider-ui'>
      <Slider>
        {input.items &&
          input.items.map((item, i) => (
            <div className='slide' key={i}>
              {item.image && item.image.asset && item?.image.asset.metadata && (
                <Image
                  src={urlFor(item.image?.asset)}
                  width={item?.image.asset.metadata?.dimensions.width}
                  height={item?.image.asset.metadata?.dimensions.height}
                  alt={"alt"}
                  sizes='100vw'
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight:
                      "calc(var(--vh, 1vh) * 100 - var(--header-height))",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                  blurDataURL={item?.image.asset.metadata?.lqip} //automatically provided
                  placeholder='blur' // Optional blur-up while loading
                />
              )}
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default SliderUI;
