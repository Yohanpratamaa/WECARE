"use client";
import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

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
    borderColor: "#d1d5db",
    boxShadow: "none",
    backgroundColor: "#fff",
    "&:hover": {
      borderColor: "#d1d5db",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "100%",
    zIndex: 20,
    backgroundColor: "#fff",
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#222",
    "&:active": {
      backgroundColor: "#fff",
      color: "#222",
    },
  }),
};

const SelectField = ({ id, label, options, value, onChange }) => (
  <div className="w-full">
    <label htmlFor={id} className="font-semibold mb-2 block text-lg">
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
      value={value}
      onChange={onChange}
    />
  </div>
);

const provinsiOptions = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];
const kotaOptions = ["Bandung", "Semarang", "Surabaya"];
const kecamatanOptions = ["Kec. 1", "Kec. 2", "Kec. 3"];
const kodeposOptions = ["40111", "50211", "60211"];

const Page = () => {
  const router = useRouter();
  const [provinsi, setProvinsi] = useState(null);
  const [kota, setKota] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [kodepos, setKodepos] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pt-4 pb-2">
      {/* Header */}
      <div className="flex items-center mt-2 mb-6">
        <button
          className="p-2 -ml-2"
          aria-label="Back"
          onClick={() => router.back()}
        >
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
        <div className="flex-1 text-lg font-[120%] ml-4">
          Isi alamat anda disini
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      {/* Form */}
      <form className="flex flex-col gap-4 flex-1">
        <SelectField
          id="provinsi"
          label="Provinsi"
          options={provinsiOptions}
          value={provinsi}
          onChange={setProvinsi}
        />
        <SelectField
          id="kota"
          label="Kota"
          options={kotaOptions}
          value={kota}
          onChange={setKota}
        />
        <SelectField
          id="kecamatan"
          label="Kecamatan"
          options={kecamatanOptions}
          value={kecamatan}
          onChange={setKecamatan}
        />
        <SelectField
          id="kodepos"
          label="Kode Pos"
          options={kodeposOptions}
          value={kodepos}
          onChange={setKodepos}
        />
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
