"use client";
// import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import img1 from "../public/carousel/img1.jpg";
// import img2 from "../public/carousel/img2.jpg";
// import img3 from "../public/carousel/img3.jpg";
// import img4 from "../public/carousel/img4.jpg";
// import img5 from "../public/carousel/img5.jpg";
// import img6 from "../public/carousel/img6.jpg";
// import img7 from "../public/carousel/img7.jpg";
// import img8 from "../public/carousel/img8.jpg";
// import img9 from "../public/carousel/img9.jpg";
import { HeroEmblaCard } from "./ui/HeroCard";

export function EmblaCarousel() {
  const autoplayOptions = {
    delay: 2000, //delay timer in milliseconds, actually does work
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container lg:h-[100vh]">
          <HeroEmblaCard
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-environment-forest-459225.jpg%26fm%3Djpg&f=1&nofb=1&ipt=7221cac10f97e6c2d14be3a6c4f0290286950762bc4cef63df4ae6d207393015&ipo=images"
            }
          />
          <HeroEmblaCard
            src={
              "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F03%2F10%2F319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&f=1&nofb=1&ipt=1ca093d09d21370895b6db441c892d304de8418da2170835ef41e5e6ee3f025c&ipo=images"
            }
          />
          <HeroEmblaCard
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F07%2F13%2F19%2F51%2Fsunset-2501727_960_720.png&f=1&nofb=1&ipt=2248712895da202fa52a91ed70d7796de9ea9abe4ab32782e859dd8dba3c9328&ipo=images"
            }
          />
          {/* <HeroEmblaCard src={img4} />
          <HeroEmblaCard src={img5} />
          <HeroEmblaCard src={img6} />
          <HeroEmblaCard src={img7} />
          <HeroEmblaCard src={img8} />
          <HeroEmblaCard src={img9} /> */}
        </div>
      </div>
    </>
  );
}
