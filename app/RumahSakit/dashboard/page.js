"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col px-5 py-10 bg-[#F7f7f7]">
        {/* Header */}
        <div className="inline-flex justify-between w-full items-center h-full">
          <div className="inline-flex items-center space-x-5 font-bold text-2xl">
            <div>
              <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
            </div>
            <div>WECARE</div>
          </div>
          {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src={"/menu-line.png"} alt="Menu" width={30} height={30} />
          </button> */}
        </div>

        {/* Drop-down Menu */}
        {/* {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 px-6 py-4 transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Cari sesuatu..."
              className="w-full border rounded-full px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-green-400"
            />
            <ul className="space-y-4 text-lg text-gray-700 font-medium">
              <li>
                <a href="#">Beranda</a>
              </li>
              <li>
                <a href="#">Profil</a>
              </li>
              <li>
                <a href="#">Riwayat</a>
              </li>
              <li>
                <a href="#">Bantuan</a>
              </li>
              <li>
                <a href="#">Keluar</a>
              </li>
            </ul>
          </div>
        )} */}

        {/* Selamat Datang */}
        <div className="w-full rounded-3xl bg-white py-3 pb-10 px-5 mt-10">
          <div className="pt-7 font-bold text-3xl tracking-wide">
            Selamat Datang Di We Care Partnership, RS MEDIKA!
          </div>
          <div className="text-gray-500 text-lg mt-5 tracking-wide">
            Lacak semua pengajuan dalam satu tempat.
          </div>
          <button className="mt-10 bg-[#4DB648] text-white px-6 py-5 w-full rounded-full font-semibold hover:bg-green-600 transition duration-200 text-md">
            + <span className="ml-3">Ajukan Pembiayaan Darurat</span>
          </button>
        </div>

        {/* Gambar Dokter */}
        <div>
          <Image
            src={"/dokter.png"}
            alt="Dokter"
            width={500}
            height={500}
            className="mt-10 w-full h-auto"
          />
        </div>

        {/* Status Pinjaman */}

        {/* Pinjaman Diterima */}
        <div className="inline-flex w-full bg-white rounded-xl p-6 mt-10">
          <Image
            src={"/ijo.png"}
            alt="Status Pinjaman"
            width={58}
            height={50}
          />
          <div className="flex flex-col ml-5">
            <div className="font-bold text-2xl">1</div>
            <div className="text-gray-500">Pinjaman Diterima</div>
          </div>
        </div>

        {/* Pinjaman Diproses */}
        <div className="inline-flex w-full bg-white rounded-xl p-6 mt-6">
          <Image
            src={"/ungu.png"}
            alt="Status Pinjaman"
            width={58}
            height={50}
          />
          <div className="flex flex-col ml-5">
            <div className="font-bold text-2xl">12</div>
            <div className="text-gray-500">Pinjaman Diproses</div>
          </div>
        </div>

        {/* Pinjaman Ditolak */}
        <div className="inline-flex w-full bg-white rounded-xl p-6 mt-6">
          <Image
            src={"/merah.png"}
            alt="Status Pinjaman"
            width={58}
            height={50}
          />
          <div className="flex flex-col ml-5">
            <div className="font-bold text-2xl">10</div>
            <div className="text-gray-500">Pinjaman Ditolak</div>
          </div>
        </div>

        {/* Antrian Pasien  */}
        <div className="flex flex-col w-full bg-white rounded-xl p-6 mt-10">
          <div className="text-2xl font-bold">Antrian Pasien Wecare</div>
          <div className="inline-flex space-x-4 mt-4">
            <div className="rounded-full border py-3 px-6">Dalam Antrian</div>
            <div className="rounded-full border py-3 px-8">Telah Selesai</div>
          </div>
          <div className="flex flex-col mt-4 border border-gray-200 bg-white rounded-xl p-6">
            <div className="text-sm text-gray-500">Wed, 7 Feb at 10:33 AM</div>
            <div className="font-bold mt-3 text-2xl">M Fathir Fathurahman</div>
            <div className="inline-flex space-x-3 items-center h-full mt-3">
              <Image
                src={"/bone.png"}
                alt="Dokter"
                width={25}
                height={25}
              ></Image>
              <div className="text-xl font-semibold text-gray-700">
                Orthopedic
              </div>
            </div>
            <div className="mt-3 text-gray-500">Angkle Pain Cosultation</div>
            <button className="mt-10 w-full bg-green-50 rounded-full py-2 text-green-500 font-bold">
              Accept
            </button>
            <button className="mt-2 w-full bg-red-50 rounded-full py-2 text-red-500 font-bold">
              Cancel
            </button>
          </div>

          <div className="flex flex-col mt-4 border border-gray-200 bg-white rounded-xl p-6">
            <div className="text-sm text-gray-500">Wed, 7 Feb at 10:33 AM</div>
            <div className="font-bold mt-3 text-2xl">M Fathir Fathurahman</div>
            <div className="inline-flex space-x-3 items-center h-full mt-3">
              <Image
                src={"/bone.png"}
                alt="Dokter"
                width={25}
                height={25}
              ></Image>
              <div className="text-xl font-semibold text-gray-700">
                Orthopedic
              </div>
            </div>
            <div className="mt-3 text-gray-500">Angkle Pain Cosultation</div>
            <button className="mt-10 w-full bg-green-50 rounded-full py-2 text-green-500 font-bold">
              Accept
            </button>
            <button className="mt-2 w-full bg-red-50 rounded-full py-2 text-red-500 font-bold">
              Cancel
            </button>
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
      </div>
    </>
  );
};

export default Page;
