"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="px-6 h-1/2 bg-[#f7f7f7]">
        <div className="inline-flex justify-between items-center w-full h-full">
          <div className="flex flex-col text-left pt-[2rem]">
            <div> Selamat Sore</div>
            <div className="font-bold text-2xl">Hello</div>
          </div>
          <div className="pt-[2rem]">
            <Image
              src={"/profile.png"}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full border border-gray-300"
            />
          </div>
        </div>
        {/* Header */}

        {/* Menu */}
        <div className="grid grid-rows-2 gap-3 text-left pt-5">
          <div
            className="inline-flex w-full h-full bg-white rounded-xl p-6"
            onClick={() => (window.location.href = "/User/EstimateCost")}
          >
            <div className="text-xl font-[120%]">
              Cari Rumah Sakit & Cek Biaya
            </div>
            <Image
              src={"/amico.png"}
              alt="Search"
              width={250}
              height={50}
              className="ml-5"
            />
          </div>

          <div
            className="inline-flex w-full h-full bg-white rounded-xl p-6"
            onClick={() => router.push("/User/Paylater")}
          >
            <div className="text-xl font-[120%]">Pembiayaan Darurat</div>
            <Image
              src={"/db.png"}
              alt="Search"
              width={170}
              height={20}
              className="ml-5"
            />
          </div>
        </div>
      </div>

      {/* Jadwal */}
      <div className="w-full h-1/2 mt-5 rounded-xl p-5 mb-[6rem]">
        <div className="text-xl font-semibold"> Jadwal Saya</div>

        <div className="inline-flex items-center w-full bg-gray-100 h-11 mt-5 rounded-full space-x-9 px-7 text-gray-500 font-[150%]">
          <div className="w-1/3">Upcoming</div>
          <div className="w-1/3">Completed</div>
          <div className="">Canceled</div>
        </div>

        {/* Card Jadwal */}
        <div className="flex flex-col w-[250px] h-[280px] rounded-3xl border border-gray-300 mt-8">
          <div className="bg-image relative">
            <Image
              src={"/cardImage.png"}
              alt="Doctor"
              width={250}
              height={280}
            />
            <div className="absolute inline-flex items-center space-x-2 top-0 right-0 w-[52px] h-[22px] rounded-tr-xl bg-[#4DB648] px-[1px]">
              <div>
                <Image src={"/lokasi.png"} alt="Clock" width={10} height={15} />
              </div>
              <div className="text-[10px] text-white">3.1 km</div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2 px-3">
            <div className="text-gray-500 text-sm pt-3">
              Wed, 7 Feb at 10:33 AM
            </div>
            <div className="font-bold">RS Bakti Usaha </div>
          </div>
          <div className="px-3">
            <div className="text-[13px]">Dokter Umum, Radiologi, IGD</div>
            <div className="text-[11px] mt-5">Estimasi Biaya</div>
            <div className="text-[13px] font-bold text-[#4DB648]">
              Rp. 950.000 - Rp. 2.500.000
            </div>
          </div>
        </div>
      </div>

      {/* Menu Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white px-6 py-5 flex justify-around items-center">
        <div className="flex flex-col items-center text-black font-bold ">
          <Image src="/Home.png" alt="Home" width={24} height={24} />
          <span className="text-xs mt-2">Beranda</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Image src="/search.png" alt="Search" width={24} height={24} />
          <span className="text-xs mt-2">Search</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Image src="/message.png" alt="Inbox" width={24} height={24} />
          <span className="text-xs mt-2">Inbox</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Image src="/user-01.png" alt="Account" width={24} height={24} />
          <span className="text-xs mt-2">Account</span>
        </div>
      </div>
    </>
  );
};

export default Page;
