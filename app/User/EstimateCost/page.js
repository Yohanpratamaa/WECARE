import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col bg-[#f7f7f7]">
      <div className="inline-flex p-6 space-x-4 items-center h-full">
        <Image
          src={"/panah.png"}
          alt="Logo"
          width={20}
          height={50}
        />
        <div className="font-semibold text-lg">Isi Form Untuk Melanjutkan</div>
      </div>
      <hr className="w-100%"></hr>

      <form className="px-6 py-4 space-y-4">
        
        <label for="name">Nama</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />        
        
        <label for="name">NIK</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />
        
        <label for="name">Provinsi</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />        
        
        <label for="name">Kota</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />        
        
        <label for="name">Kecamatan</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />        
        
        <label for="name">Kode Pos</label>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Masukkan nama Anda"
          required
        />
        <button className="w-full rounded-xl mt-[9em] bg-green-500 shadow-md py-3 font-semibold text-white">Selanjutnya</button>
      </form>
    </div>
  );
};

export default page;
