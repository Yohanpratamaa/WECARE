"use client";
import React, { useState } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";

const hospitals = [
  {
    name: "RS Bakti Husada",
    type: "Dokter Umum, Radiologi, IGD",
    price: "Rp. 950.000 – 2.500.000",
    distance: "3.1km",
    img: "/rsud.png",
  },
  {
    name: "RS Oetomo Hospital",
    type: "Dokter Umum, Radiologi, IGD",
    price: "Rp. 850.000 – 2.500.000",
    distance: "",
    img: "/rsud.png",
  },
];

const filters = [
  { label: "Terdekat", value: "terdekat" },
  { label: "Affordable", value: "affordable" },
  { label: "Terlengkap", value: "terlengkap" },
];

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState("terdekat");
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.4,
      spacing: 16,
    },
    mode: "free-snap",
  });

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafafa] px-4 pt-6 pb-2">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-1 items-center">
            {/* Simbol sinyal, wifi, baterai bisa pakai svg/icon jika perlu */}
            <div className="w-16 h-4" />
          </div>
        </div>
        <div className="mt-2 mb-4">
          <div className="font-satoshi text-2xl font-bold leading-tight">
            Kami menemukan 5 Rumah Sakit <br />
            yang sesuai dengan keluhan dan kebutuhanmu
          </div>
          <div className="text-gray-400 text-base mt-3">
            Kami hadir untuk bantu kamu tetap dapat layanan kesehatan saat
            darurat.
          </div>
        </div>
        {/* Filter */}
        <div className="flex gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setSelectedFilter(f.value)}
              className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition mt-5 ${
                selectedFilter === f.value
                  ? "border-[#4DB648] text-[#4DB648] bg-white"
                  : "border-gray-300 text-gray-400 bg-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Hospital Cards */}
        <div ref={sliderRef} className="keen-slider mb-8 ">
          {hospitals.map((h, i) => (
            <div
              key={h.name}
              className="keen-slider__slide flex flex-col w-[200px] h-[400px] rounded-3xl border border-gray-300 mt-8 bg-white p-4"
            >
              <div className="bg-image relative -mx-4 -mt-4 rounded-t-3xl overflow-hidden">
                <Image
                  src={h.img}
                  alt={h.name}
                  width={300}
                  height={120}
                  className="rounded-t-3xl object-cover w-full"
                />
                {h.distance && (
                  <div className="absolute inline-flex items-center space-x-2 top-0 right-0 w-[52px] h-[22px] rounded-tr-xl bg-[#4DB648] px-[1px]">
                    <div className="text-[10px] text-white ml-3">
                      {h.distance}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="font-bold">{h.name}</div>
              </div>
              <div>
                <div className="text-[13px]">{h.type}</div>
                <div className="text-[11px] mt-5">Estimasi Biaya</div>
                <div className="text-[13px] font-bold text-[#4DB648]">
                  {h.price}
                </div>
              </div>
              <button className="w-full border border-[#4DB648] text-[#4DB648] font-semibold rounded-lg py-2 mt-6 shadow text-lg px-10">
                Book Sekarang
              </button>
            </div>
          ))}
        </div>
        {/* Konsultasi AI */}
        <div className="bg-white rounded-2xl p-5 mb-4">
          <div className="font-bold text-xl mb-1">
            Masih bingung memilih? <br />
            Konsultasikan dengan WeCare AI
          </div>
          <div className="text-gray-400 text-base mb-6">
            Wecare Bot Hadir untuk mengatasi kebingunganmu mengambil keputusan
            untuk pergi berobat ke rumah sakit
          </div>
          <button
            onCLi={() => router.push("/User/chatbot")}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 shadow text-lg"
          >
            <span>
              {/* Simple robot icon */}
              <Image src="/bot.png" alt="Robot Icon" width={20} height={20} />
            </span>
            Konsultasi Sekarang
          </button>
        </div>
        <button
          onClick={() => router.push("/User/dashboard")}
          className="w-full border border-[#4DB648] text-[#4DB648] font-semibold rounded-lg py-2 mt-6 shadow text-lg px-10"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default Page;
