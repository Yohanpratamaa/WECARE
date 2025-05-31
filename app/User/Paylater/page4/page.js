"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("idcard");

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
              <div className="w-10 h-10 rounded-full border-2 border-[#4DB648] flex items-center justify-center bg-white">
                <Image
                  src="/uploadijoatas.png"
                  width={25}
                  height={20}
                  alt="Logo"
                />
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
        <div className="w-10 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center">
          <div className="border border-gray-200 rounded-full p-2">
            <Image src="/doc.png" width={40} height={20} alt="Logo" />
          </div>
        </div>
        <div className="ml-3">
          <div className="font-semibold text-2xl">Choose your document</div>
          <div className="text-gray-400 text-base mt-1">
            You can use your ID Card or Passport
          </div>
        </div>
      </div>
      {/* Illustration */}
      <div className="flex justify-center my-6">
        <Image
          src="/amico123.png"
          alt="Upload Illustration"
          width={200}
          height={150}
          className="object-contain"
        />
      </div>
      {/* Card Options */}
      <div className="flex flex-col gap-6 px-4">
        {/* ID Card */}
        <button
          type="button"
          onClick={() => setSelected("idcard")}
          className={`mx-auto w-full max-w-md flex items-center justify-between border rounded-2xl px-5 py-4 transition ${
            selected === "idcard"
              ? "border-[#4DB648] bg-white shadow-sm"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#4DB648] flex items-center justify-center">
              <svg width="22" height="22" fill="none">
                <rect
                  x="3"
                  y="6"
                  width="16"
                  height="10"
                  rx="2"
                  fill="#fff"
                  stroke="#4DB648"
                  strokeWidth="2"
                />
                <circle cx="7.5" cy="11" r="1.5" fill="#4DB648" />
                <rect
                  x="11"
                  y="10"
                  width="5"
                  height="2"
                  rx="1"
                  fill="#4DB648"
                />
              </svg>
            </div>
            <div className="ml-4 text-left">
              <div className="font-semibold text-lg text-black">ID Card</div>
              <div className="text-gray-400 text-base">Upload your ID Card</div>
            </div>
          </div>
          <span className="ml-4">
            <span
              className={`inline-block w-6 h-6 rounded-full border-2 ${
                selected === "idcard" ? "border-[#4DB648]" : "border-gray-300"
              } flex items-center justify-center`}
            >
              {selected === "idcard" && (
                <span className="w-3 h-3 rounded-full bg-[#4DB648] block"></span>
              )}
            </span>
          </span>
        </button>
        {/* Passport */}
        <button
          type="button"
          onClick={() => setSelected("passport")}
          className={`mx-auto w-full max-w-md flex items-center justify-between border rounded-2xl px-5 py-4 transition ${
            selected === "passport"
              ? "border-[#4DB648] bg-white shadow-sm"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#4DB648] flex items-center justify-center">
              <svg width="22" height="22" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="9"
                  fill="#fff"
                  stroke="#4DB648"
                  strokeWidth="2"
                />
                <circle cx="11" cy="11" r="4" fill="#4DB648" />
              </svg>
            </div>
            <div className="ml-4 text-left">
              <div className="font-semibold text-lg text-black">Passport</div>
              <div className="text-gray-400 text-base">
                Upload your Passport
              </div>
            </div>
          </div>
          <span className="ml-4">
            <span
              className={`inline-block w-6 h-6 rounded-full border-2 ${
                selected === "passport" ? "border-[#4DB648]" : "border-gray-300"
              } flex items-center justify-center`}
            >
              {selected === "passport" && (
                <span className="w-3 h-3 rounded-full bg-[#4DB648] block"></span>
              )}
            </span>
          </span>
        </button>
      </div>
      {/* Button */}
      <div className="px-4 pb-8 mt-auto">
        <button onClick={()=> router.push("/User/Paylater/page5")} className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow transition hover:brightness-95 text-lg">
          Upload Document
        </button>
      </div>
    </div>
  );
};

export default Page;
