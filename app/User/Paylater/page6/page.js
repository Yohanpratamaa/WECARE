"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div />
      <div className="flex flex-col items-center justify-center mt-10">
        {/* Illustration */}
        <Image
          src="/bro.png"
          alt="Logo"
          width={300}
          height={100}
          className="mb-4"
        />
        {/* Title & Subtitle */}
        <div className="text-center">
          <div className="font-semibold text-lg text-black leading-snug">
            Dokumen telah Disetujui dan Limit
            <br />
            telah diperbarui pada Platform
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Cek Halaman Pembayaran darurat untuk
            <br />
            melihat secara detail
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="px-4 pb-8">
        <button
          onClick={() => router.push("/User/hasilEstimasi")}
          className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow transition hover:brightness-95 text-lg"
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default Page;
