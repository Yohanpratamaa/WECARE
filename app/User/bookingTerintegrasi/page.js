"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const hospital = {
  name: "RS Bakti Husada",
  type: "Radiologi & Dokter Umum",
  icon: "/tong.png", // Ganti dengan path icon rumah sakit Anda
};

const availableDates = [1, 3, 9, 11, 17, 19, 25, 27];
const availableTimes = ["08.00", "09.00", "10.00"];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Generate calendar grid for June 2025
  const daysInMonth = 30;
  const firstDayOfWeek = 0; // 1 Juni 2025 = Sunday
  const calendar = [];
  let day = 1 - firstDayOfWeek;
  for (let row = 0; row < 5; row++) {
    let week = [];
    for (let col = 0; col < 7; col++) {
      week.push(day > 0 && day <= daysInMonth ? day : "");
      day++;
    }
    calendar.push(week);
  }
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col relative">
      {/* Header */}
      <div className="flex items-center px-4 pt-6 pb-4 bg-white rounded-b-3xl">
        <button className="mr-2">
          {/* Icon back */}
          <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#222"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-2xl font-bold">Booking</span>
        <div className="ml-auto">
          {/* Icon menu */}
          <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <circle cx={5} cy={12} r={1.5} fill="#222" />
            <circle cx={12} cy={12} r={1.5} fill="#222" />
            <circle cx={19} cy={12} r={1.5} fill="#222" />
          </svg>
        </div>
      </div>

      {/* Hospital Info */}
      <div className="bg-white rounded-2xl mx-4 mt-4 flex items-center p-4 gap-4 shadow-sm">
        <div className="bg-[#E6F4EA] rounded-full w-12 h-12 flex items-center justify-center">
          <Image src={hospital.icon} alt="icon" width={28} height={28} />
        </div>
        <div>
          <div className="font-bold text-[18px] text-[#1A3B34]">
            {hospital.name}
          </div>
          <div className="text-[#B0B7C3] text-[15px]">{hospital.type}</div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-[#fafafa] rounded-t-3xl mt-6 px-4 pt-6 pb-2 flex-1">
        <div className="flex items-center mb-4">
          <span className="font-bold text-xl text-[#232B3B]">
            Tentukan Tanggal
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-base text-[#232B3B] font-medium">Juni</span>
            <button className="border border-gray-200 rounded-xl px-3 py-1 text-gray-500 text-sm flex items-center">
              <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
                <path
                  d="M6 10l2-2-2-2"
                  stroke="#888"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-6">
          {calendar.flat().map((date, idx) => {
            const isAvailable = availableDates.includes(date);
            const isSelected = selectedDate === date;
            return (
              <button
                key={idx}
                disabled={!date || !isAvailable}
                onClick={() => setSelectedDate(date)}
                className={`w-12 h-12 rounded-lg text-lg font-medium
                  ${!date ? "bg-transparent border-0" : ""}
                  ${isAvailable ? "border" : "bg-gray-200 text-gray-400"}
                  ${
                    isSelected
                      ? "border-[#4DB648] bg-[#E6F4EA] text-[#4DB648]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                {date || ""}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/30">
          <div className="bg-white w-full md:w-[400px] rounded-t-3xl md:rounded-3xl p-6 pb-8 flex flex-col items-center animate-fadeInUp">
            <div className="mb-4">
              <Image
                src="/alert.png"
                alt="Question"
                width={180}
                height={120}
                className="mx-auto"
              />
            </div>
            <div className="text-center text-lg font-semibold mb-6 text-[#232B3B]">
              Apakah Kamu yakin ingin
              <br />
              melakukan booking?
            </div>
            <button
              className="w-full bg-[#4DB648] text-white text-lg font-semibold rounded-2xl py-4 mb-3"
              onClick={() => {
                setShowModal(false);
                router.push("/User/bookingTerintegrasi/page1");
              }}
            >
              Booking Sekarang
            </button>
            <button
              className="w-full border border-gray-200 text-[#232B3B] text-lg font-semibold rounded-2xl py-4 bg-white"
              onClick={() => setShowModal(false)}
            >
              Gak dulu, deh
            </button>
          </div>
        </div>
      )}

      {/* Book Button */}
      <div className="px-4 pb-6">
        <button
          className="w-full bg-[#4DB648] text-white text-lg font-semibold rounded-2xl py-4"
          disabled={!selectedDate}
          onClick={() => setShowModal(true)}
        >
          Book Sekarang
        </button>
      </div>
    </div>
  );
}
