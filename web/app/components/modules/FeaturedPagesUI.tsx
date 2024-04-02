import { ModuleFeaturedPagesUI } from "@/app/types/schema";
import React from "react";
import CardPage from "../CardPage";

type Props = {
  input: ModuleFeaturedPagesUI;
};

const FeaturedPagesUI = ({ input }: Props) => {
  return (
    <section className='module module--featured-pages-ui'>
      {input.items?.map((item, i) => (
        <CardPage input={item} key={i} />
      ))}
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
    </section>
  );
};

export default FeaturedPagesUI;
