import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="px-6 h-1/2 bg-[#f7f7f7]">
        {/* Header */}
        <div className="flex flex-col text-left pt-[2rem]">
          <div> Selamat Sore</div>
          <div className="font-bold text-2xl">Fathir</div>
        </div>

        {/* Menu */}
        <div className="grid grid-rows-2 gap-3 text-left pt-5">
          <div className="inline-flex w-full h-full bg-white rounded-xl p-6 shadow-md">
            <div className="text-xl font-semibold">
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

          <div className="inline-flex w-full h-full bg-white rounded-xl p-6 shadow-md">
            <div className="text-xl font-semibold">Pembiayaan Darurat</div>
            <Image
              src={"/amico12.png"}
              alt="Search"
              width={170}
              height={20}
              className="ml-5"
            />
          </div>
        </div>
      </div>

      {/* Jadwal */}
      <div className="w-full h-1/2 mt-5 rounded-xl p-5">
        <div className="text-xl font-semibold"> Jadwal Saya</div>
        <div className="inline-flex items-center w-full bg-gray-100 h-11 mt-5 shadow-md font-semibold rounded-full justify-between px-7 text-gray-600">
          <div className="w-1/3">Upcoming</div>
          <div className="w-1/3">Completed</div>
          <div className="">Canceled</div>
        </div>
        <div className="flex flex-col p-4 space-y-2 w-full h-50 rounded-3xl border border-gray-300 mt-5 shadow-md">
          <div className="text-gray-500 text-sm">Wed, 7 Feb at 10:33 AM</div>
          <div className="font-bold">Rumah Sakit Advent</div>
          <div className="inline-flex space-x-2">
            <Image src={"/bone.png"} alt="Clock" width={20} height={20} />
            <div>Orthopedics</div>
          </div>
          <div>Ankle Pain Consultation</div>
          <div className="inline-flex space-x-3 mt-2">
            <button className="w-1/2 bg-blue-100 rounded-xl p-2 text-blue-500 font-bold">
              Accept
            </button>
            <button className="w-1/2 bg-red-100 rounded-xl p-2 text-red-500 font-bold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
