import Link from "next/link";
import React from "react";
import website from "../config/website";
import Image from "next/image";
import { Settings } from "../types/schema";
import Nav from "./Nav";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  return (
    <header>
      <div className='flex justify-between items-center '>
        <Link href='/' className='site-name'>
          <Image
            src={"/logo-fabrika-full.svg"}
            width={200}
            height={30}
            alt={website.title}
          />
        </Link>
        <Nav input={settings} />
      </div>
    </header>
  );
};

export default Header;
