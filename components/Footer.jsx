import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    src: "/assets/footer/facebook.svg",
    path: "",
  },
  {
    src: "/assets/footer/x.svg",
    path: "",
  },
  {
    src: "/assets/footer/instagram.svg",
    path: "",
  },
  {
    src: "/assets/footer/youtube.svg",
    path: "",
  },
  {
    src: "/assets/footer/pinterest.svg",
    path: "",
  },
];
const Footer = () => {
  return (
    <footer className="bg-accent bg-pattern bg-cover bg-blend-multiply pt-16 ">
      <div className="container mx-auto border-b border-white/40">
        <div className="flex flex-col max-w-[550px] mx-auto text-center">
            <div className="mb-9">
                <h2 className="h2 mb-3">Your Event Connection</h2>
                <p className="">Join our last for exclusive event updates and insider tips</p>
            </div>
            <form className="relative flex items-center mb-16">
                <input type="text" placeholder="Your email address" className="pl-8 w-full h-[60px] rounded-full outline-none placeholder:text-primary/80 text-primary text-sm" />
                <button className="bg-secondary hover:bg-secondary-hover w-[114px] h-[52px] rounded-full text sm uppercase transition-all absolute right-1">join</button>
            </form>
            <div className="mb-[72px] flex gap-8 mx-auto">
                {
                    socials.map((icon,index)=>(
                        <Link href={icon.path} key={index} className="relative size-[20px]">
                            <Image src={icon.src} fill alt=""/>
                        </Link>
                    ))
                }
            </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
            <Link href="/" className="relative flex w-[78px] h-[30px]">
              <Image src="/assets/footer/logo.svg" fill alt="" />
            </Link>
            <p>Copyright &copy; 2025. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
