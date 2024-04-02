"use client";
import React from "react";
import { Settings } from "../types/schema";
import { PortableText } from "next-sanity";
import { _localizeField } from "../utils/utils";
import Link from "next/link";
import Image from "next/image";
import website from "../config/website";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  return (
    <footer id='footer' className='font-mono'>
      <div className='flex'>
        <div className='md:w-1/4'>
          <Link href='/' className='site-name'>
            <Image
              src={"/logo-fabrika.svg"}
              width={101}
              height={62}
              alt={website.title}
            />
          </Link>
        </div>
        {settings.footerItems?.map((item, i) => (
          <div className='footer-item md:w-1/4' key={i}>
            <div className='text'>
              <PortableText value={_localizeField(item)} />
            </div>
          </div>
        ))}
      </div>
      {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
    </footer>
  );
};

export default Footer;
