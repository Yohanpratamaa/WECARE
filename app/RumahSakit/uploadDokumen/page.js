import React from "react";

const Page = () => {
  return (
    <div className="relative px-5 pt-[2rem] flex flex-col text-left">
      <div className="font-semibold text-xl py-3">2/6 Langkah</div>
      <div className="max-w-md w-full shadow-md rounded-full bg-green-100 h-3">
        <div className="w-2/6 bg-green-400 h-3 rounded-full"></div>
      </div>
      <div className="text-2xl font-bold mt-7 tracking-wide">
        Kami perlu dokumen resmi untuk verifikasi Rumah Sakit
      </div>
      <div className="text-gray-500 text-sm mt-2">
        Enter your email address and password to join us
      </div>

      <form>
        <label className="block mt-5">
          <span className="text-gray-700 font-semibold">
            Izin Operasional Rumah Sakit
          </span>
          <input
            type="text"
            className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan nama rumah sakit"
            required
          />
        </label>

        <label className="block mt-5">
          <span className="text-gray-700 font-semibold">Tipe Rumah Sakit</span>
          <input
            type="text"
            className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan nama rumah sakit"
            required
          />
        </label>

        <label className="block mt-5">
          <span className="text-gray-700 font-semibold">
            Alamat Rumah Sakit
          </span>
          <input
            type="text"
            className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan nama rumah sakit"
            required
          />
        </label>

        <label className="block mt-5">
          <span className="text-gray-700 font-semibold">
            Nama Penanggung Jawab Rumah Sakit
          </span>
          <input
            type="text"
            className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan nama rumah sakit"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full mt-[175px] bg-green-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-green-600 transition duration-200"
        >
          Selanjutnya
        </button>
      </form>
      <button
        type="submit"
        className="w-full mt-3 text-black font-semibold py-3 rounded-xl shadow-md border border-gray-200 hover:bg-green-600 transition duration-200"
      >
        Kembali
      </button>
    </div>
  );
};

export default Page;
