"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 pt-4 pb-2">
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2"
          aria-label="Back"
        >
          <svg width="24" height="24" fill="none">
            <path
              d="M15 6l-6 6 6 6"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex-1"></div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-200"></div>
      {/* Stepper */}
      <div className="px-4 mt-5">
        <div className="border-b border-gray-200 pb-4">
          <div className="font-semibold text-xl">Verification Step</div>
          <div className="text-gray-400 text-sm mt-1">
            Complete your progress to continue
          </div>
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-[#4DB648] flex items-center justify-center bg-white">
                <Image
                  src="/dochijau.png"
                  alt="Approved Illustration"
                  width={20}
                  height={20}
                  className="object-contain"
                ></Image>
              </div>
              <div className="text-xs text-[#4DB648] mt-1">1</div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <Image src="/upload.png" width={20} height={20} alt="Logo" />
              </div>
              <div className="text-xs text-gray-400 mt-1">2</div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <Image src="/awan.png" width={30} height={20} alt="Logo" />
              </div>
              <div className="text-xs text-gray-400 mt-1">3</div>
            </div>
          </div>
        </div>
      </div>
      {/* Title & Subtitle */}
      <div className="flex items-center mt-8 mb-2 px-4">
        <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center">
          <div className="border border-gray-200 rounded-full p-2">
            <Image src="/doc.png" width={40} height={20} alt="Logo" />
          </div>
        </div>
        <div className="ml-3">
          <div className="font-semibold text-2xl">Submit your document</div>
          <div className="text-gray-400 text-base mt-1">
            Upload selected document
          </div>
        </div>
      </div>
      {/* Illustration */}
      <div className="flex justify-center my-6">
        <Image
          src="/amico123.png"
          alt="Approved Illustration"
          width={200}
          height={200}
          className="object-contain"
        ></Image>
      </div>
      {/* File Card */}
      <div className="px-4">
        <div className="flex items-center justify-between border rounded-2xl px-5 py-4 bg-white mb-8 shadow-sm border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="22" height="22" fill="none">
                <rect
                  x="6"
                  y="3"
                  width="10"
                  height="16"
                  rx="2"
                  stroke="#bdbdbd"
                  strokeWidth="2"
                />
                <path
                  d="M9 7h4"
                  stroke="#bdbdbd"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-base text-black">
                ID Card Photo
              </div>
              <div className="text-gray-400 text-sm">Selected</div>
            </div>
          </div>
          <span className="ml-4">
            <span className="inline-block w-7 h-7 rounded-full bg-[#4DB648] flex items-center justify-center">
              <svg width="18" height="18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#4DB648" />
                <path
                  d="M5.5 9.5l2.5 2.5L13 7.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
      {/* Button */}
      <div className="px-4 pb-8 mt-auto">
        <button className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow transition hover:brightness-95 text-lg">
          Submit Dokumen
        </button>
      </div>
    </div>
  );
};

export default Page;
