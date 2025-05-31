"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        <div className="font-semibold text-lg">Skema Pembiayaan Darurat</div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>

      <div className="p-5">
        <div className="text-xl tracking-wide font-semibold">
          Butuh penanganan medis tapi BPJS kamu sudah tidak aktif?
        </div>
        <div className="mt-4 text-gray-500 text-sm w-80 font-[110%]">
          Kami hadir untuk bantu kamu tetap dapat layanan kesehatan saat
          darurat.
        </div>
        <div className="w-full h-full flex items-center justify-center mt-10">
          <Image
            src="/pana.png"
            alt="Paylater"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Skema */}
        <div className="px-3 flex flex-col min-h-[37vh]">
          <div className="inline-flex">
            <div className="rounded-full mt-5 inline-flex space-x-4 justify-center p-1 ">
              <div>
                <Image
                  src="/home12.png"
                  alt="Check"
                  width={30}
                  height={30}
                  className="rounded-full mt-3 bg-green-500 p-1"
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-sm font-semibold mb-2">
                  Disetujui dalam 1 Hari kerja
                </div>
                <div className="text-xs text-gray-500">
                  Pengajuan diproses cepat, notifikasi akan segera diterima
                  setelah verifikasi — rata-rata 1 hari kerja.
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex">
            <div className="rounded-full mt-2 inline-flex space-x-4 justify-center p-1 ">
              <div>
                <Image
                  src="/home12.png"
                  alt="Check"
                  width={30}
                  height={30}
                  className="rounded-full mt-3 bg-green-500 p-1"
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-sm font-semibold mb-2">
                  Langsung dibayarkan ke BPJS
                </div>
                <div className="text-xs text-gray-500">
                  Setelah pengajuan disetujui, dana akan dibayarkan ke BPJS
                  sehingga kamu bisa langsung mendapatkan perawatan.
                </div>
              </div>
            </div>
          </div>

          {/* Satu Hari Kerja */}
          <div className="inline-flex">
            <div className="rounded-full mt-2 inline-flex space-x-4 justify-center p-1 ">
              <div>
                <Image
                  src="/home12.png"
                  alt="Check"
                  width={30}
                  height={30}
                  className="rounded-full mt-3 bg-green-500 p-1"
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="text-sm font-semibold mb-2">
                  Transparan, semua biaya bisa dicek di awal
                </div>
                <div className="text-xs text-gray-500">
                  Sebelum setuju, estimasi biaya akan ditampilkan rinci. Kamu
                  tahu apa yang akan dibayar, tanpa biaya tersembunyi.
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
        </div>

        <div className="flex-1"></div>

        <button
          type="submit"
          onClick={() => router.push("/User/Paylater/page1")}
          className="w-full rounded-2xl bg-[#4DB648] py-5 font-semibold text-white shadow-b-md"
        >
          Selanjutnya
        </button>

        <button
          onClick={() => router.push("/User/dashboard")}
          className="w-full mt-2 rounded-2xl bg-white border border-gray-200 py-5 font-semibold text-black shadow-b-md"
        >
          Ingatkan Saya Nanti
        </button>
      </div>
    </div>
  );
};

export default Page;
