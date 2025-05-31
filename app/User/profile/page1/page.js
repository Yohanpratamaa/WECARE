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
        <div className="flex-1 text-[1.6rem] font-bold -ml-8 text-center">
          Isi alamat anda disini
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      {/* Form */}
      <form className="flex flex-col gap-4 flex-1">
        <div>
          <label className="block font-semibold mb-2 text-lg">Provinsi</label>
          <div className="relative">
            <select
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Provinsi tempat tinggal
              </option>
              {/* Tambahkan opsi provinsi di sini */}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-lg">Kota</label>
          <div className="relative">
            <select
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Kota Asal
              </option>
              {/* Tambahkan opsi kota di sini */}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-lg">Kecamatan</label>
          <div className="relative">
            <select
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Kota Asal
              </option>
              {/* Tambahkan opsi kecamatan di sini */}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-lg">Kode Pos</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Masukkan Kode Pos"
              className="w-full border border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0 pr-10"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>
      </form>
      {/* Button */}
      <div className="mt-8 mb-4">
        <button className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow text-xl">
          Submit Data
        </button>
      </div>
    </div>
  );
};

export default Page;
