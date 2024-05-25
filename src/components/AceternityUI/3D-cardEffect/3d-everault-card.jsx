"use client";
import React from "react";
import { BackgroundBeams } from "../../AceternityUI/3D-cardEffect/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-[4rem] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          NIYAS K
        </h1>
        {/* <p></p> */}
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p> */}
        <input
          type="text"
          placeholder="niyaskknr@gmail.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <h1 className="relative z-10 text-[4rem] md:text-4xl pt-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          FULLSTACK WEB DEVELOPER
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
}
