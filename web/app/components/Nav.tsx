"use client";
import React from "react";
import { Settings } from "../types/schema";
import { _localizeField } from "../utils/utils";
import Link from "next/link";

type Props = {
  input: Settings;
};

const Nav = ({ input }: Props) => {
  return (
    <nav className='font-mono'>
      <ul className='flex gap-lg'>
        {input.navPrimary?.map((item, i) => (
          <li key={i}>
            {item._type === "linkAnchor" && (
              <Link href={`#${item.target}`} scroll={true}>
                {_localizeField(item.label)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
