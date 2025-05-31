"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const InputField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <input
      id={id}
      type="text"
      className="mt-2 block w-full px-3 py-4 border border-gray-300 rounded-xl bg-white"
      placeholder={placeholder}
    />
  </div>
);

const SelectField = ({ id, label, options }) => (
  <div className="w-full">
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <select
      id={id}
      className="mt-2 block w-full px-3 py-4 border border-gray-300 rounded-xl bg-white"
      defaultValue=""
    >
      <option value="" disabled>
        Pilih {label}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const provinsiOptions = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];
const kotaOptions = ["Bandung", "Semarang", "Surabaya"];
const kecamatanOptions = ["Kec. 1", "Kec. 2", "Kec. 3"];
const kodeposOptions = ["40111", "50211", "60211"];

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <div className="inline-flex p-6 space-x-4 items-center h-full relative">
        <Image
          src="/panah.png"
          alt="Logo"
          width={20}
          height={50}
          onClick={() => router.push("/User/dashboard")}
          className="cursor-pointer"
        />
        <div className="font-semibold text-lg">Isi Form Untuk Melanjutkan</div>
      </div>
      <div className="w-full h-[2px] bg-gray-300"></div>

      <form className="relative px-6 py-4 w-full max-w-md mx-auto space-y-4 flex flex-col min-h-[90vh]">
        <InputField id="name" label="Nama" placeholder="Masukkan Nama Kamu" />
        <InputField id="nik" label="NIK" placeholder="Masukkan NIK Anda" />
        <SelectField id="province" label="Provinsi" options={provinsiOptions} />
        <SelectField id="city" label="Kota" options={kotaOptions} />
        <SelectField
          id="kecamatan"
          label="Kecamatan"
          options={kecamatanOptions}
        />
        <SelectField id="codepos" label="Kode Pos" options={kodeposOptions} />
        <div className="flex-1"></div>
        <button
          onClick={() => router.push("/User/EstimateCost/page1")}
          className="w-full rounded-2xl bg-[#4DB648] py-5 font-semibold text-white shadow-b-md"
        >
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Page;
