"use client";
import React, { useState } from "react";
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
      className="mt-2 block w-full px-3 py-4 border border-gray-300 rounded-xl"
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
    minHeight: "60px",
    paddingLeft: "2px",
    paddingRight: "2px",
    borderColor: "#d1d5db", // tetap abu-abu
    boxShadow: "none", // hilangkan outline
    backgroundColor: "#fff", // polos putih
    "&:hover": {
      borderColor: "#d1d5db", // tidak berubah saat hover
    },
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "100%",
    zIndex: 20,
    backgroundColor: "#fff", // polos putih
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "#fff", // polos putih
    color: "#222",
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

const opsiBayar = ["BPJS", "Pribadi", "Asuransi"];

const Page = () => {
  const router = useRouter();
  const [bpjsStatus, setBpjsStatus] = useState(null); // null | "iya" | "tidak"

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
          label="Nomor BPJS"
          type="number"
          placeholder="Masukkan Nomor BPJS Kamu"
          className="h-[60px]"
        />
        <div>Apakah kamu BPJS Aktif?</div>
        <div className="inline-flex space-x-4 w-full">
          <button
            type="button"
            className={`w-full h-15 font-semibold py-3 px-4 rounded-lg border ${
              bpjsStatus === "iya"
                ? "bg-green-700 text-white border-green-700"
                : "border-gray-300 hover:bg-green-600 active:bg-green-700"
            }`}
            onClick={() => setBpjsStatus("iya")}
          >
            Iya
          </button>
          <button
            type="button"
            className={`w-full h-15 font-semibold py-3 border px-4 rounded-lg ${
              bpjsStatus === "tidak"
                ? "bg-green-100 text-[#4DB648] border-[#4DB648]"
                : "border-[#4DB648] text-[#4DB648] hover:bg-green-100 active:bg-green-200"
            }`}
            onClick={() => setBpjsStatus("tidak")}
          >
            Tidak, Saya Nonaktif
          </button>
        </div>
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
