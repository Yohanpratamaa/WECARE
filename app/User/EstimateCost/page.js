import React from "react";
import Image from "next/image";

const InputField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <input
      id={id}
      type="text"
      className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
      placeholder={placeholder}
      required
    />
  </div>
);

const Page = () => {
  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <div className="inline-flex p-6 space-x-4 items-center h-full">
        <Image src="/panah.png" alt="Logo" width={20} height={50} />
        <div className="font-semibold text-lg">Isi Form Untuk Melanjutkan</div>
      </div>
      <div className="w-full h-[2px] bg-gray-300"></div>

      <form className="px-6 py-4 space-y-4">
        <InputField id="name" label="Nama" placeholder="Masukkan Nama Kamu" />
        <InputField id="nik" label="NIK" placeholder="Masukkan NIK Anda" />
        <InputField
          id="province"
          label="Provinsi"
          placeholder="Masukkan Provinsi Anda"
        />
        <InputField id="city" label="Kota" placeholder="Masukkan Kota Anda" />
        <InputField
          id="kecamatan"
          label="Kecamatan"
          placeholder="Masukkan Kecamatan Anda"
        />
        <InputField
          id="codepos"
          label="Kode Pos"
          placeholder="Masukkan Kode Pos Anda"
        />

        <button
          type="submit"
          className="w-full rounded-lg mt-36 bg-[#4DB648] shadow-md py-3 font-semibold text-white"
        >
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

export default Page;
