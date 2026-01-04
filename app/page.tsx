"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Beehiiv integration - you'll need to add your Beehiiv form URL here
    // Example: window.open(`https://your-beehiiv-form-url?email=${email}`, '_blank');
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing! (Add your Beehiiv integration here)");
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-white pt-10 p-8 w-full items-center mt-0 sm:mt-20">
      <main className="flex flex-row items-center justify-center w-full max-w-[1300px] gap-20">
        <div className="flex flex-col items-start gap-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl leading-tight flex items-center gap-2">
            Hi, my name is <span className="font-semibold">Ankur Sharma</span>
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/assets/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </h1>
        </div>

        {/* Main Content */}
        <div className="text-gray-800 text-2xl font-light flex flex-col items-start gap-4">
          {/* App Images - Tilted and Mashed Up, on the right side of text */}
          <div className="flex items-center gap-3 flex-wrap">
            <p className="pr-3">
              I am currently working as a contractor at
            </p>
            <div className="group flex items-center relative app-image-container cursor-pointer">
              <div className="relative z-0 app-image-item transition-all duration-500 ease-out -ml-2 sm:-ml-3 group-hover:ml-0 group-hover:mr-2">
                <div className="relative w-10 h-10  rounded-lg overflow-hidden transform rotate-[-8deg] transition-all duration-500 ease-out group-hover:rotate-[-3deg]">
                  <Image
                    src="/assets/outrank.jpg"
                    alt="Outrank"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-0 -ml-2 sm:-ml-1 app-image-item transition-all duration-500 ease-out group-hover:ml-0 group-hover:mr-2">
                <div className="relative w-10 h-10  rounded-lg overflow-hidden transform rotate-[12deg] transition-all duration-500 ease-out group-hover:rotate-[7deg]">
                  <Image
                    src="/assets/kleo.jpeg"
                    alt="Kleo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className=" flex items-center gap-2 sm:gap-3 flex-wrap">
            I also post regularly on these platforms
            <div className="group flex gap-0.5 sm:gap-1 social-icons-container cursor-pointer">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden social-icon-item transition-all duration-500 ease-out transform group-hover:-translate-x-2">
                <div className="relative w-full h-full transform rotate-[-6deg] transition-all duration-500 ease-out group-hover:rotate-[-2deg]">
                  <Image
                    src="/assets/outrank.jpg"
                    alt="X"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden social-icon-item transition-all duration-500 ease-out transform group-hover:-translate-x-1">
                <div className="relative w-full h-full transform rotate-[8deg] transition-all duration-500 ease-out group-hover:rotate-[4deg]">
                  <Image
                    src="/assets/outrank.jpg"
                    alt="Instagram"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden social-icon-item transition-all duration-500 ease-out transform group-hover:translate-x-1">
                <div className="relative w-full h-full transform rotate-[-4deg] transition-all duration-500 ease-out group-hover:rotate-[0deg]">
                  <Image
                    src="/assets/outrank.jpg"
                    alt="TikTok"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden social-icon-item transition-all duration-500 ease-out transform group-hover:translate-x-2">
                <div className="relative w-full h-full transform rotate-[6deg] transition-all duration-500 ease-out group-hover:rotate-[2deg]">
                  <Image
                    src="/assets/outrank.jpg"
                    alt="LinkedIn"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </p>

          <p >
            Curious about my tech stack?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here.
            </a>
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="p-5 w-3/4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Subscribe to my newsletter</h2>
          <p className="text-gray-600 mb-3 text-sm">
            Get updates on my latest projects and videos.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Separator */}
        <div className="w-full border-t border-dotted border-gray-300 my-10"></div>

        {/* Call to Action Section */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-base sm:text-lg">
            Need dev/design help for your company?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here.
            </a>
          </p>
          <p className="text-base sm:text-lg">
            Want to sponsor my videos?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here.
            </a>
          </p>
          <p className="text-base sm:text-lg">
            Want to say hi?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here.
            </a>
          </p>
        </div>
        </div>
      </main>
    </div>
  );
}
