import { ModuleMarqueeUI } from "@/app/types/schema";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {
  input: ModuleMarqueeUI;
};

const MarqueeUI = ({ input }: Props) => {
  return (
    <section
      className='module module--marquee-ui text-xl'
      style={{
        backgroundColor: input.backgroundColor || "#fff",
        color: input.foregroundColor || "#E52329",
      }}>
      <Marquee gradient={false} speed={40} play={true} className=''>
        {input.items?.map((item, i) => (
          <div className='item' key={i}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <span>{item.label}</span>
            </a>
          </div>
        ))}
        {input.items?.map((item, i) => (
          <div className='item' key={i}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <span>{item.label}</span>
            </a>
          </div>
        ))}
        {input.items?.map((item, i) => (
          <div className='item' key={i}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <span>{item.label}</span>
            </a>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeUI;
