import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "6425 Living Place, Suite 200, Pittsburgh PA 15206",
  },
  {
    title: "💌 EMAIL",
    desc: "info@bitfari.org",
  },
  {
    title: "☎ PHONE",
    desc: "+1 917-719-6292",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contact | Bitfari</title>
      </Helmet>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="mailto:info@bitfari.org" method="get" enctype="text/plain">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Your name"
                    type="text"
                    className="mt-1"
                    name="name" id="name" 
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="myemail@email.com"
                    className="mt-1"
                    name="email" id="email"
                  />
                    <Input
                    type="hidden"
                    name="subject" id="subject"
                    value="Email from the DL Marketplace"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} name="body"/>
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PageContact;
