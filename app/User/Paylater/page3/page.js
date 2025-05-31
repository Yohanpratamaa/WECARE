"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const tenorOptions = [
  "3 Bulan (Bunga 2.5%/Bulan)",
  "6 Bulan (Bunga 2.5%/Bulan)",
  "12 Bulan (Bunga 2.5%/Bulan)",
];

const Page = () => {
  const router = useRouter();
  const [selectedTenor, setSelectedTenor] = useState(tenorOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      {/* Form */}
      <div className="flex-1 px-4 py-2">
        <div className="flex items-center mt-6 mb-4">
          <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center">
            <div className="border border-gray-200 rounded-full p-2">
              <Image src="/doc.png" width={40} height={20} alt="Logo" />
            </div>
          </div>
          <div className="ml-3 font-semibold text-xl">Data Pembiayaan</div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Jumlah Tunggakan BPJS</label>
            <input
              type="text"
              placeholder="Masukkan Jumlah Tagihan"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white focus:outline-none focus:ring-0 text-base"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Tenor pinjaman yang diinginkan
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white text-left flex items-center justify-between text-base"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                <span>{selectedTenor}</span>
                <svg width="20" height="20" fill="none">
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow z-10">
                  {tenorOptions.map((option, idx) => (
                    <div
                      key={option}
                      className={`px-4 py-3 cursor-pointer hover:bg-[#f7f7f7] rounded-xl ${
                        selectedTenor === option
                          ? "text-[#4DB648] font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedTenor(option);
                        setDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      {/* Button */}
      <div className="px-4 pb-6 mt-auto">
        <button className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow transition hover:brightness-95 text-lg">
          Upload Document
        </button>
      </div>
    </div>
  );
};

export default Page;
