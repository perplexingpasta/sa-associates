/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <header id="contact" className="pt-40">
        <h1 className="heading relative block">Contact Us</h1>
        <h2 className="justify-center text-center text-lg font-light text-black-100 dark relative mb-16 items-center py-4">
          whottt the sigma
        </h2>
      </header>

      <main className="flex w-full">
        <section className="w-1/2 items-center justify-center align-middle flex">
          {/* <div className="h-[500px] pb-10 md:h-[650px] lg:h-[600px]"> */}
          <div className="h-[50vh] pb-10 md:h-[65vh] lg:h-[60vh] w-10/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18107.286219854777!2d78.37070052065248!3d17.431547947080812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93004535aae9%3A0xdca1084745be8448!2sSA%20Associates!5e0!3m2!1sen!2sin!4v1732168242183!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="w-1/2">
          {/* LOCATION */}
          <section className="relative mb-10 text-2xl font-medium tracking-wide flex items-start">
            <img
              src="/images/location-black.svg"
              width={40}
              alt=""
              className="inline-block"
            />
            <Link
              href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
              target="_blank"
            >
              <div className="ml-4 space-y-2 text-xl md:text-2xl hover:text-purple-900">
                <p>TBQ Suite 10, 5th Floor, Elixir</p>
                <p>Sattva Knowledge City, Gate No.6</p>
                <p>Hyderabad, Telangana, 500081</p>
              </div>
            </Link>
          </section>

          {/* CALL */}
          <section className="relative mb-10 text-2xl font-medium tracking-wide flex items-start">
            <img
              src="/images/call-black.svg"
              width={35}
              alt=""
              className="inline-block"
            />
            <div className="ml-4 space-y-2 text-xl md:text-2xl">
              <Link
                href="tel:+914069044164"
                target="_blank"
                className="hover:text-purple-900"
              >
                <p>+91 40690 44164</p>
              </Link>
              <Link
                href="tel:+919848038238"
                target="_blank"
                className="hover:text-purple-900"
              >
                <p>+91 98480 38238</p>
              </Link>
            </div>
          </section>

          {/* EMAIL */}
          <section className="relative mb-10 text-2xl font-medium tracking-wide flex items-start">
            <img
              src="/images/email-black.svg"
              width={35}
              alt=""
              className="inline-block"
            />
            <div className="ml-4 space-y-2 text-xl md:text-2xl hover:text-purple-900">
              <Link href="mailto:sanjay@sassociate.in" target="_blank">
                sanjay@sassociate.in
              </Link>
            </div>
          </section>

          {/* WEBSITE */}
          <section className="relative mb-10 text-2xl font-medium tracking-wide flex items-start">
            <img
              src="/images/globe-black.svg"
              width={32}
              alt=""
              className="inline-block"
            />
            <div className="ml-4 space-y-2 text-xl md:text-2xl hover:text-purple-900">
              <Link href="https://www.youtube.com" target="_blank">
                sassociate.in
              </Link>
            </div>
          </section>

          {/* GSTIN */}
          <section className="relative mb-10 text-2xl font-medium tracking-wide flex items-start">
            <img
              src="/images/document-black.svg"
              width={35}
              alt=""
              className="inline-block"
            />
            <div className="ml-4 space-y-2 text-xl md:text-2xl">
              GSTIN: 36ADAPA3772A2Z8
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default page;
