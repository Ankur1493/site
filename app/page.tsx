"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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
        <div className="mb-10">
          <h1 className="text-2xl text-black flex items-center gap-2">
            Hi 👋, I'm Ankur Sharma
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
        <div className="text-2xl  flex flex-col items-start gap-4">
             {/* App Images - Tilted and Mashed Up, on the right side of text */}
             <div className="text-2xl text-black flex items-center gap-2 flex-wrap">
            <span>I am building</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://shyftwork.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center relative app-image-container cursor-pointer">
                  <div className="relative z-0 app-image-item transition-all duration-200 ease-out transform group-hover:-translate-x-0.5">
                    <div className="relative w-10 h-10 bg-indigo-500 rounded-md flex items-center justify-center transform rotate-[-12deg] transition-all duration-200 ease-out group-hover:rotate-0">
                      <span className="text-white font-bold text-2xl">S</span>
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Shyft</p>
              </TooltipContent>
            </Tooltip>
            <span>with</span>
            <span className="text-indigo-500 hover:text-indigo-600"><a href="http://x.com/rohangilkes/" target="_blank"> Rohan Gilkes</a></span>
          </div>
          {/* App Images - Tilted and Mashed Up, on the right side of text */}
          <div className="text-2xl text-black flex items-center gap-2 flex-wrap">
            <span>I am working as a contractor at</span>
            <div className="group flex items-center relative app-image-container cursor-pointer ml-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://outrank.so/" target="_blank" rel="noopener noreferrer" className="relative z-0 app-image-item transition-all duration-200 ease-out transform group-hover:-translate-x-2">
                    <div className="relative w-10 h-10  rounded-lg overflow-hidden transform rotate-[-12deg] transition-all duration-200 ease-out group-hover:rotate-0">
                      <Image
                        src="/assets/outrank.avif"
                        alt="Outrank"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Outrank</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://kleo.so/" target="_blank" rel="noopener noreferrer" className="relative z-10 app-image-item transition-all duration-200 ease-out transform -ml-3 group-hover:translate-x-2">
                    <div className="relative w-10 h-10  rounded-lg overflow-hidden transform rotate-[15deg] transition-all duration-200 ease-out group-hover:rotate-0">
                      <Image
                        src="/assets/kleo.jpeg"
                        alt="Kleo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Kleo</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="text-2xl text-black flex items-center gap-2 flex-wrap mt-10">
            <span>I also post regularly on these platforms</span>
            <div className="group flex social-icons-container cursor-pointer ml-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://x.com/ankursharma1493" target="_blank" rel="noopener noreferrer" className="relative z-0 w-10 h-10 social-icon-item transition-all duration-200 ease-out transform group-hover:-translate-x-6">
                    <div className="relative w-full h-full transform rotate-[-10deg] transition-all duration-200 ease-out group-hover:rotate-0">
                      <Image
                        src="/assets/x.jpg"
                        alt="X"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>@ankursharma1493</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.instagram.com/ankur.sharma.03/#" target="_blank" rel="noopener noreferrer" className="relative z-10 w-10 h-10 social-icon-item transition-all duration-200 ease-out transform -ml-3 group-hover:-translate-x-2">
                    <div className="relative w-full h-full transform rotate-[12deg] transition-all duration-200 ease-out group-hover:rotate-0">
                      <Image
                        src="/assets/instagram.svg"
                        alt="Instagram"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>@ankur.sharma.03</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://linkedin.com/in/ankursharma14" target="_blank" rel="noopener noreferrer" className="relative z-20 w-10 h-10 rounded-md overflow-hidden social-icon-item transition-all duration-200 ease-out transform -ml-3 group-hover:translate-x-2">
                    <div className="relative w-full h-full transform rotate-[-8deg] transition-all duration-200 ease-out group-hover:rotate-0">
                        <Image
                        src="/assets/linkedin.jpeg"
                        alt="LinkedIn"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>ankursharma14</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.youtube.com/@ankur14" target="_blank" rel="noopener noreferrer" className="relative z-30 w-10 h-10 social-icon-item transition-all duration-200 ease-out transform -ml-3 group-hover:translate-x-6">
                    <div className="relative w-full h-full transform rotate-[9deg] transition-all duration-200 ease-out group-hover:rotate-0">
                                    <Image
                        src="/assets/youtube.png"
                        alt="YouTube"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>@ankur14</p>
                </TooltipContent>
              </Tooltip>
            </div>
            </div>

        </div>

        {/* Newsletter Section */}
        <div className="p-5 w-full bg-gray-50 rounded-lg border border-gray-200">
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
        <div className="w-full border-t border-dotted border-gray-300 my-3"></div>

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
            <a href="mailto:ankursharma1493@gmail.com" className="text-blue-600 hover:text-purple-600">
              Click here.
            </a>
          </p>
        </div>
        </div>
      </main>
    </div>
  );
}
