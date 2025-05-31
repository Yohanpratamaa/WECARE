"use client";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pt-4 pb-2">
      {/* Header */}
      <div className="flex items-center mt-2 mb-6">
        <button className="p-2 -ml-2" aria-label="Back">
          <svg width="28" height="28" fill="none">
            <path
              d="M18 7l-6 7 6 7"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex-1 text-lg font-[120%] ml-3">
          Isi Data Profil Terlebih Dahulu
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      {/* Profile Picture & Upload */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-3 items-center w-full">
          <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="60" height="60" fill="none">
              <circle cx="30" cy="24" r="14" fill="#e5e5e5" />
              <rect
                x="12"
                y="38"
                width="36"
                height="14"
                rx="7"
                fill="#e5e5e5"
              />
            </svg>
          </div>
          <button
            type="button"
            className="mt-4 bg-gray-100 text-gray-700 rounded-full px-6 py-3 font-semibold text-base"
          >
            Upload Foto Profil
          </button>
        </div>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-4 flex-1">
        <div>
          <label className="block font-[160%] mb-2 text-[15px]">Nama</label>
          <input
            type="text"
            placeholder="Masukan Nama Kamu"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block font-[160%] mb-2 text-[15px]">NIK</label>
          <input
            type="text"
            placeholder="Masukkan NIK kamu"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block font-[160%] mb-2 text-[15px]">
            Tanggal Lahir
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Tanggal"
              className="w-1/3 border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0 text-center"
              maxLength={2}
            />
            <input
              type="text"
              placeholder="Bulan"
              className="w-1/3 border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0 text-center"
              maxLength={2}
            />
            <input
              type="text"
              placeholder="Tahun"
              className="w-1/3 border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0 text-center"
              maxLength={4}
            />
          </div>
        </div>
        <div>
          <label className="block font-[160%] mb-2 text-[15px]">
            No Telepon
          </label>
          <input
            type="text"
            placeholder="Masukkan No Telepon"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block font-[160%] mb-2 text-[15px]">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email anda"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-700 text-base focus:outline-none focus:ring-0"
          />
        </div>
      </form>
      {/* Button */}
      <div className="mt-8 mb-4">
        <button className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-[160%] rounded-2xl py-4 shadow text-xl">
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Page;
