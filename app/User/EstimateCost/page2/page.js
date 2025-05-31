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
      className="mt-2 block w-full px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-green-500 focus:border-green-500"
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
  control: (base, state) => ({
    ...base,
    borderRadius: "0.75rem",
    borderColor: state.isFocused ? "#4DB648" : "#d1d5db",
    minHeight: "60px",
    paddingLeft: "2px",
    paddingRight: "2px",
    "&:hover": {
      borderColor: "#4DB648",
    },
    backgroundColor: state.isFocused ? "#e9fbe9" : "#fff",
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "100%",
    zIndex: 20,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#4DB648"
      : state.isFocused
      ? "#e9fbe9"
      : "#fff",
    color: state.isSelected ? "#fff" : "#222",
    "&:active": {
      backgroundColor: "#4DB648",
      color: "#fff",
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

const opsiBayar = ["BPJS", "Pribadi", "Asuransi"];

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
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
      <form className="px-6 py-5 space-y-4 flex flex-col min-h-[90vh]">
        <SelectField
          id="province"
          label="Jenis Pembayaran"
          options={opsiBayar}
        />
        <InputField
          id="name"
          label="Nama"
          type="number"
          placeholder="Masukkan Nama Kamu"
          className="h-[60px]"
        />
        <div>Apakah kamu BPJS Aktif?</div>
        <div className="inline-flex space-x-4 w-full">
          <button className="w-full h-15 hover:bg-green-600 font-semibold py-3 px-4 rounded-lg border border-gray-300">
            Iya
          </button>
          <button className="w-full h-15 hover:bg-green-600 font-semibold py-3 border px-4 rounded-lg border-[#4DB648] text-[#4DB648]">
            Tidak, Saya Nonaktif
          </button>
        </div>
        <div className="flex-1"></div> {/* Spacer agar button ke bawah */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#4DB648] py-4 font-semibold text-white"
          onClick={() => router.push("/User/EstimateCost/page1")}
          style={{ marginTop: "auto" }}
        >
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Page;
