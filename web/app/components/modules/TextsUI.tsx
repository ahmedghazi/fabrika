import React from "react";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/app/utils/portableTextComponents";
import clsx from "clsx";
import { ModuleTextsUI } from "@/app/types/schema";

type Props = {
  input: ModuleTextsUI;
  pageTitle?: string;
};

const TextsUI = ({ input, pageTitle }: Props) => {
  const { items } = input;

  return (
    <section className='module module--texts-ui '>
      <pre>{JSON.stringify(input, null, 2)}</pre>
      <div className='row'>
        <div className='col-md-4 col-xs-12'>
          <h1 className='text-xs'>{pageTitle}</h1>
        </div>
        {/* {items &&
          items.map((item, i) => (
            <div className='col-md-4 col-xs-12' key={item._key}>
              <div className='text text-xs'>
                {item.text && (
                  <PortableText
                    value={item.text}
                    components={portableTextComponents}
                  />
                )}
              </div>
            </div>
          ))} */}
      </div>
    </section>
  );
};

export default TextsUI;
