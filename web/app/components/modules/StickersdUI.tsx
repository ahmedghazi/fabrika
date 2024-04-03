import { ModuleSliderUI, SanityImageAsset } from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import { _getDocSize, _minMax } from "@/app/utils/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

type StickerIProps = {
  asset: SanityImageAsset | undefined;
};

const defaultPosition = { x: 0, y: 0 };
const Sticker = ({ asset }: StickerIProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(defaultPosition);
  const [ready, setReady] = useState<boolean>(false);
  const rotateMax = 20;

  useEffect(() => {
    _placeRandomly();
    setReady(true);
  }, []);

  const _placeRandomly = () => {
    const docSize = _getDocSize();
    const x = Math.random() * docSize.w;
    const y = Math.random() * docSize.h;
    // console.log(x, y);
    setPos({ x: x, y: y });
  };

  if (!ready) return null;
  return (
    <Draggable defaultPosition={pos} nodeRef={nodeRef}>
      <div className='sticker pointer-events-none-' ref={nodeRef}>
        {asset && asset.metadata && (
          <Image
            src={urlFor(asset)}
            width={asset.metadata?.dimensions.width}
            height={asset.metadata?.dimensions.height}
            alt={"alt"}
            sizes='100vw'
            className='pointer-events-none '
            style={{
              transform: `rotate(${_minMax(-rotateMax, rotateMax)}deg)`,
              // width: "100%",
              // height: "auto",
              // maxHeight: "calc(var(--vh, 1vh) * 100 - var(--header-height))",
            }}
            blurDataURL={asset.metadata?.lqip} //automatically provided
            placeholder='blur' // Optional blur-up while loading
          />
        )}
      </div>
    </Draggable>
  );
};

type StickersUIProps = {
  input: ModuleSliderUI;
};
const StickersdUI = ({ input }: StickersUIProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const docSize = _getDocSize();
    if (ref && ref.current) {
      ref.current.style.height = `${docSize.h}px`;
    }
  }, []);

  return (
    <section className='module module--stickers-ui' ref={ref}>
      {input.items &&
        input.items.map((item, i) => (
          <Sticker asset={item.image?.asset} key={i} />
        ))}
      {input.items &&
        input.items.map((item, i) => (
          <Sticker asset={item.image?.asset} key={i} />
        ))}
    </section>
  );
};

export default StickersdUI;
