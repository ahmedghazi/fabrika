import React from "react";
import { Home } from "../types/schema";
import Modules from "./modules";

type Props = {
  input: Home;
};

const ContentHome = ({ input }: Props) => {
  return (
    <div className='content content--home'>
      {input.modules && <Modules input={input.modules} />}
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
    </div>
  );
};

export default ContentHome;
