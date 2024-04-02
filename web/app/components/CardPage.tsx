import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PageModulaire } from "../types/schema";
import { _localizeField, _slugify } from "../utils/utils";
import Link from "next/link";
import Figure from "./ui/Figure";
import ContentPage from "./ContentPage";
import { publish } from "pubsub-js";

type Props = {
  input: PageModulaire;
};

const CardPage = ({ input }: Props) => {
  // console.log(input);
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    publish("SHUFFLE_STICKERS");
  }, [active]);

  return (
    <article
      className='card-page'
      id={_slugify(input.slug?.current || _localizeField(input.title))}>
      <div className='flex'>
        <div className='md:w-1/2 '>
          {input.imageCover && input.imageCover.asset && (
            <Figure asset={input.imageCover?.asset} width={1500} />
          )}
        </div>
        <div className='md:w-1/2 inner'>
          <div className='header h-1e'>
            {input.supTitle && (
              <div className='surtitre font-mono'>
                {_localizeField(input.supTitle)}
              </div>
            )}
          </div>

          <div className='body'>
            <h2 className='text-xl'>{_localizeField(input.title)}</h2>
            <p className='excerpt text-lg'>{_localizeField(input.excerpt)}</p>
          </div>
          <div className='footer'>
            {input.subTitle && (
              <div className='subtitle font-mono'>
                {_localizeField(input.subTitle)}
              </div>
            )}
            <button
              className='cta cta--secondary font-mono'
              onClick={() => setActive(!active)}>
              EN SAVOIR PLUS
            </button>
          </div>
        </div>
      </div>
      {active && <ContentPage input={input} />}
    </article>
  );
};

export default CardPage;
