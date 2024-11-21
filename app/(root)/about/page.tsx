import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - SA Associates",
  description:
    "Welcome to the home page of Megapolis. Learn more about our services.",
};

const page = () => {
  return (
    <>
      <header id="contact" className="pt-20">
        <h1 className="heading relative block">About Us</h1>
        <h2 className="justify-center text-center text-lg font-light text-black-100 dark relative mb-16 items-center py-4"></h2>
      </header>
      <main>
        {/* FOUNDER */}
        <section className="flex flex-col-reverse w-full md:flex-row mb-20">
          <div className="md:w-1/2 md:max-w-[40vw] max-w-[90vw] mx-auto md:mx-20">
            <h1 className="font-semibold text-2xl mt-10 md:mt-0 md:text-3xl mb-3">
              The Founder
            </h1>
            <p className="md:text-lg">
              Dr. Sanjay Agarwal is a distinguished figure in the Indian
              Construction Industry with over 38 years of extensive experience
              in handling the Construction & Development of Highways, Bridges,
              Railways, Mega Buildings & Townships.
              <br />
              <br />
              He has been at the helm of numerous iconic projects across the
              country, including vast townships spread over acres in Hyderabad,
              Vijayawada & Nagpur and is associated with various BoT / EPC
              Highway Projects & has produced more than 5000 lane kilometres
              since 1999. He is a member of the 1986 batch & earned a bachelor’s
              degree in civil engineering from the Manipal Institute of
              Technology.
              <br />
              <br />
              Sanjay posseses niche experience in the Infrastructure Sector in
              India & SE Asia & has acclaimed many accolades during his
              illustrious journey with IRCON & IJM Group of Companies.
              <br />
              <br />
              In April 2024, he relinquished the executive life from IJM &
              Company retained him as Director & Advisor to mentor future
              leaders & share rich expertise. Being at the helm of operations,
              he had the opportunity to network with top Industry Leaders around
              the globe & authorities alike & now he is available to share his
              rich experiences with Industry mates & Companies who need niche
              advice & networking services as a NEW phase of professional
              journey with continued focus building platforms together that
              create broad opportunities.
              <br />
              <br />
              His strong belief: “Ethics are paramount & Essence of Success”
              always preaches that teamwork is able to fill in leadership gaps &
              eventually leads to effective communication & produces
              collaborators with whom people want to work, thus creating
              Effective Leaders.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/aboutus.jpeg"
              className="md:rounded-2xl w-full"
              alt=""
            />
          </div>
        </section>
        {/* SERVICES */}
        <section className="md:max-w-[40vw] max-w-[90vw] mx-auto md:mx-20 mb-20">
          <h1 className="font-semibold text-2xl md:text-3xl mb-3">
            Our Services
          </h1>
          <ul className="text-lg">
            <li>✦ Advisory</li>
            <li>✦ Industry Networking</li>
            <li>✦ Mentoring</li>
            <li>✦ Liasoning Office</li>
            <li>✦ Product Promotion</li>
            <li>✦ Investment</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default page;
