"use client";
import React from "react";
import { Settings } from "../types/schema";
import { _localizeField } from "../utils/utils";
import Link from "next/link";
import Burger from "./ui/Burger";
import { publish } from "pubsub-js";

type Props = {
  input: Settings;
};

const Nav = ({ input }: Props) => {
  const _onClick = () => {
    publish("BURGER.CLOSE");
  };
  return (
    <nav className='font-mono'>
      <Burger />
      <div className='inner'>
        <ul className='flex gap-lg text-lg md:text-md'>
          {input.navPrimary?.map((item, i) => (
            <li key={i}>
              {item._type === "linkAnchor" && (
                <Link href={`#${item.target}`} scroll={true} onClick={_onClick}>
                  {_localizeField(item.label)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
