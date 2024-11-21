// import { Metadata } from "next";
// import React from "react";
// import { ParallaxScroll } from "../../../components/ui/parallax-scroll";

// export const metadata: Metadata = {
//   title: "News & Media - SA Associates",
//   description:
//     "Welcome to the home page of Megapolis. Learn more about our services.",
// };

// const ParallaxScrollDemo = () => {
//   return <ParallaxScroll images={images} />;
// }

// const images = [
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
// ];

// export default ParallaxScrollDemo;

import { EmblaCarousel } from "@/components/EmblaCarousel";
import ServiceVideoCard from "@/components/VideoCard";
import React from "react";

const page = () => {
  return (
    <>
      <header id="newsandmedia" className="pt-20">
        <h1 className="heading relative block">News & Media</h1>
        <h2 className="justify-center text-center text-lg font-light text-black-100 dark relative mb-16 items-center py-4">
          A collection of interviews, documentaries and accolades of Sanjay
          Agarwal
        </h2>
      </header>
      <main>
        <section className="flex items-center justify-center w-full lg:flex-row mb-10 md:mb-20">
          <div className="lg:w-1/2 max-w-[85vw] mx-auto">
            <h1 className="font-semibold text-2xl mt-10 lg:mt-0 md:text-3xl mb-3">
              Videos
            </h1>

            <ServiceVideoCard
              key={1}
              videoURL={
                "https://www.youtube-nocookie.com/embed/a7vRqwd6mtA?si=So8nExSErn9d7P9u"
              }
              videoName={
                "IJM Infrastructure (INDIA), featured in ET NOW - Greatest Brands & Leaders 2023 - 2024"
              }
            />

            <ServiceVideoCard
              key={2}
              videoURL={
                "https://www.youtube-nocookie.com/embed/sJsmTNDg6pY?si=KS7lWR7gc0dUIxV6"
              }
              videoName={"Greatest Brands & Leaders 2023 - 2024"}
            />

            <ServiceVideoCard
              key={3}
              videoURL={
                "https://www.youtube-nocookie.com/embed/OXzNqXZHjw0?si=y8CD1FxTMRGZh81u"
              }
              videoName={
                "13th CIDC Vishwakarma Awards - For the Best Professionally Managed Company in Construction"
              }
            />

            <ServiceVideoCard
              key={4}
              videoURL={
                "https://www.youtube-nocookie.com/embed/BSEz-9kHF5A?si=XfvRGBUwODCc06iI"
              }
              videoName={"Asia one presents greatest brands & leaders 23-24"}
            />

            <ServiceVideoCard
              key={5}
              videoURL={
                "https://www.youtube-nocookie.com/embed/ZlG7mTxsUVU?si=bQYg60DEMJqdTD27"
              }
              videoName={"Sanjay Agarwal Media Interview"}
            />
          </div>
        </section>

        <section className="hidden md:contents">
          <EmblaCarousel />
        </section>
      </main>
    </>
  );
};

export default page;
