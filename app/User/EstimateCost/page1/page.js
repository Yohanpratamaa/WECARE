"use client";
import React, { useState } from "react";
import Image from "next/image";

// Daftar pemeriksaan (bisa diubah sesuai kebutuhan)
const pemeriksaanList = [
  "Pemeriksaan Umum",
  "Pemeriksaan Darah",
  "Pemeriksaan Urine",
  "Pemeriksaan Mata",
  "Pemeriksaan Gigi",
  "Pemeriksaan Jantung",
  "Pemeriksaan Paru-paru",
];

const CheckboxPemeriksaan = ({ label, checked, onChange }) => (
  <div
    className={`mt-2 w-full py-3 px-4 border rounded-xl shadow-sm transition-colors ${
      checked ? "border-green-500" : "border-gray-300"
    }`}
  >
    <div className="inline-flex justify-between w-full items-center">
      <span className="text-gray-400">{label}</span>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-5 h-5 border-2 rounded-full transition-colors duration-200
            border-gray-300 checked:border-green-500 checked:bg-green-500
            focus:outline-none"
        />
      </label>
    </div>
  </div>
);

const Page = () => {
  // State untuk multiple checkbox
  const [checkedList, setCheckedList] = useState(
    Array(pemeriksaanList.length).fill(false)
  );

  const handleCheckboxChange = (idx) => {
    setCheckedList((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <div className="inline-flex p-6 space-x-4 items-center h-full">
        <Image src="/panah.png" alt="Logo" width={20} height={50} />
        <div className="font-semibold text-lg">Isi Form Untuk Melanjutkan</div>
      </div>
      <div className="w-full h-[2px] bg-gray-300"></div>
      <form className="px-6 py-4 space-y-4">
        <label htmlFor="keluhan" className="font-semibold">
          Keluhan Utama
        </label>
        <textarea
          id="keluhan"
          className="mt-2 w-full h-20 px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan keluhan utama"
          required
        />
        <label className="font-semibold">
          Pemeriksaan yang diinginkan (Multiple Select)
        </label>
        {pemeriksaanList.map((item, idx) => (
          <CheckboxPemeriksaan
            key={item}
            label={item}
            checked={checkedList[idx]}
            onChange={() => handleCheckboxChange(idx)}
          />
        ))}

        <button className="bg-[#4DB648] w-full h-13 mt-[6rem] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Page;
