"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const fileInputRef = useRef();

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
          <div className="w-8 h-8 rounded-full bg-[#f7f7f7] flex items-center justify-center">
            <div className="border border-gray-200 rounded-full p-2">
              <Image src="/doc.png" width={40} height={20} alt="Logo" />
            </div>
          </div>
          <div className="ml-3 font-semibold text-lg">Data Pekerjaan</div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-3 font-[160%]">
              Pekerjaan saat ini
            </label>
            <input
              type="text"
              placeholder="Masukkan Jumlah Tagihan"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-sm mb-3">
              Nama perusahaan/tempat usaha
            </label>
            <input
              type="text"
              placeholder="Masukkan Jumlah Tagihan"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-sm mb-3">
              Pendapatan bulanan (range atau angka pasti)
            </label>
            <input
              type="text"
              placeholder="Masukkan Jumlah Tagihan"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-sm mb-3">Upload Slip Gaji</label>
            <div
              className="w-full border-2 border-dashed border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center py-8 cursor-pointer transition hover:border-[#4DB648]"
              onClick={() => fileInputRef.current?.click()}
            >
              <Image src={"/uploadijo.png"} width={30} height={50} alt="Logo" />
              <div className="mt-2 text-gray-400 text-sm">
                Klik Untuk Upload File
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*,application/pdf"
              />
            </div>
          </div>
        </form>
      </div>
      {/* Button */}
      <div className="px-4 pb-6 mt-auto">
        <button className="w-full max-w-md bg-[#4DB648] hover:bg-green-600 text-white font-semibold rounded-xl py-4 mt-6 shadow">
          Start Verification
        </button>
      </div>
    </div>
  );
};

export default Page;
