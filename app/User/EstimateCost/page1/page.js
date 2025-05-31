"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Daftar pemeriksaan (bisa diubah sesuai kebutuhan)
const pemeriksaanList = [
  "Pemeriksaan Umum",
  "Konsultasi Dokter Spesialis",
  "Laboratorium",
  "Rontgen/Radiologi",
  "Pemeriksaan Gigi",
  "Pemeriksaan Jantung",
  "Pemeriksaan Paru-paru",
];

const CheckboxPemeriksaan = ({ label, checked, onChange }) => (
  <div
    className={`mt-2 w-full py-4 px-4 border rounded-lg transition-colors ${
      checked
        ? "border-green-500 text-green-500 bg-[#4DB648] opacity-5"
        : "border-gray-300"
    }`}
  >
    <div className="inline-flex justify-between w-full items-center">
      <span className={checked ? "text-[#4DB648]" : "text-gray-400"}>
        {label}
      </span>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-5 h-5 border-2 rounded-xl transition-colors duration-200
            border-gray-300"
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

  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <div className="inline-flex p-6 space-x-4 items-center h-full">
        <Image
          src="/panah.png"
          onClick={() => router.push("/User/EstimateCost")}
          alt="Logo"
          width={20}
          height={50}
        />
        <div className="font-semibold text-lg">Isi Form Untuk Melanjutkan</div>
      </div>
      <div className="w-full h-[2px] bg-gray-300"></div>
      <form className="px-6 py-4 space-y-4 flex flex-col min-h-[90vh]">
        <label htmlFor="keluhan" className="font-semibold">
          Keluhan Utama
        </label>
        <textarea
          id="keluhan"
          className="mt-2 w-full h-20 px-3 py-3 border border-gray-300 rounded-lg "
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

        <div className="flex-1"></div>

        <button
          onClick={() => router.push("/User/EstimateCost/page2")}
          type="submit"
          className="w-full rounded-2xl bg-[#4DB648] py-5 font-semibold text-white shadow-b-md"
        >
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Page;
