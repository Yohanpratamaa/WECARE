"use client";
import React from "react";
import Image from "next/image";
import Select from "react-select";
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
      required
    />
  </div>
);

const customSelectStyles = {
  container: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "100%",
  }),
  control: (base) => ({
    ...base,
    borderRadius: "0.75rem",
    borderColor: "#d1d5db", // selalu abu-abu
    minHeight: "58px",
    paddingLeft: "2px",
    paddingRight: "2px",
    boxShadow: "none", // tidak ada outline
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "100%",
    zIndex: 20,
    backgroundColor: "#fff", // selalu putih
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "#fff", // selalu putih
    color: "#222", // warna teks normal
    "&:active": {
      backgroundColor: "#fff", // tetap putih saat klik
      color: "#222",
    },
  }),
};

const SelectField = ({ id, label, options }) => (
  <div className="w-full">
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <Select
      inputId={id}
      options={options.map((opt) => ({ value: opt, label: opt }))}
      placeholder={`Pilih ${label}`}
      className="mt-2"
      classNamePrefix="react-select"
      styles={customSelectStyles}
      components={{ IndicatorSeparator: () => null }}
    />
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
