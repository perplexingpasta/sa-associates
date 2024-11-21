import * as AspectRatio from "@radix-ui/react-aspect-ratio";

/* eslint-disable react/prop-types */
const ServiceVideoCard = ({ videoURL, videoName }) => {
  return (
    <>
      <div className="mx-auto flex max-w-[80vw] flex-col items-center justify-center rounded-md lg:h-[550px] lg:w-[900px]">
        <AspectRatio.Root ratio={16 / 9}>
          <iframe
            width="100%"
            height="100%"
            src={videoURL}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </AspectRatio.Root>
      </div>

      <div className="mx-auto mb-12 md:mb-20 lg:mb-24 lg:max-w-[46vw]">
        <h1 className="pb-2 pt-2 text-center font-medium md:font-semibold md:text-2xl">
          {videoName}
        </h1>
      </div>
    </>
  );
};

export default ServiceVideoCard;
