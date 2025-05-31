"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  return (
    <div className="bg-white h-full flex flex-col justify-between px-4 pt-6 pb-2">
      {/* Logo pojok kanan atas */}
      <div className="relative">
        <div className="absolute -right-4 top-10 z-10">
          <Image
            src="/lope.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
      {/* Title & subtitle */}
      <div className="mt-[7rem] mb-6">
        <div className="text-3xl font-bold">Daftar ke WeCare</div>
        <div className="text-gray-400 text-base mt-2">
          Masukan data dirimu untuk melanjutkan
        </div>
      </div>
      {/* Garis */}
      <div className="w-full h-[1px] bg-gray-400 my-6" />
      {/* Form */}
      <form className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold mb-2 text-lg">
            Nama Lengkap
          </label>
          <input
            type="namaLengkap"
            placeholder="Masukkan Nama Lengkap anda"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-lg">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email anda"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-lg">Password</label>
          <input
            type="password"
            placeholder="Masukkan Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white text-gray-400 text-base focus:outline-none focus:ring-0"
          />
        </div>
        <button
          type="submit"
          onClick={() => router.push("/User/login")}
          className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 mt-6 shadow text-lg"
        >
          Login Sekarang
        </button>
      </form>
      {/* Link daftar */}
      <div className="mt-6 text-gray-500 text-base ">
        Sudah punya akun?
        <a href="" className="text-[#4DB648] font-semibold ml-2">
          Login Disini
        </a>
      </div>
    </div>
  );
};

export default Page;
