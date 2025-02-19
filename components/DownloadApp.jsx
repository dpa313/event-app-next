import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <section className="w-full md:h-[364px] bg-accent mb-16 rounded-2xl bg-pattern bg-cover bg-blend-multiply p-10 xl:p-20 flex items-center justify-center">
      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2 mb-4">Experience Events In Your Pocket Today</h2>
          <p className="max-w-[410px] mx-auto xl:mx-0">
            Download our App and get instant access to upcomming events and
            tailored recommendations
          </p>
        </div>
        <div className="flex-1 flex flex-col xl:flex-row justify-end items-center gap-6">
          <Link href={"/"} className="relative flex w-[192px] h-[64px]">
            <Image
              src="/assets/download/app-store.svg"
              fill
              className="object-contain"
              alt=""
            />
          </Link>
          <Link href={"/"} className="relative flex w-[216px] h-[64px]">
            <Image
              src="/assets/download/google-play.svg"
              fill
              className="object-contain"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
