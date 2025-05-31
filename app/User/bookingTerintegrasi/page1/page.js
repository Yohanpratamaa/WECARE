"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookingSuccess() {

    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div />
      <div className="flex flex-col items-center px-6">
        {/* Ilustrasi */}
        <div className="mt-8 mb-6">
          <Image
            src="/bro.png" // Ganti sesuai path ilustrasi kamu
            alt="Booking Complete"
            width={220}
            height={180}
            priority
          />
        </div>
        {/* Pesan sukses */}
        <div className="text-center">
          <div className="text-[17px] font-bold text-black mb-2">
            Selamat! Kamu telah Berhasil
            <br />
            Melakukan Booking Pada Rumah Sakit
          </div>
          <div className="text-[#B0B7C3] text-[15px] font-medium">
            Cek Jadwalmu untuk mendapatkan info
            <br />
            lengkap terkait penjadwalan
          </div>
        </div>
      </div>
      {/* Tombol Selesai */}
      <div className="px-5 pb-8 pt-4">
        <button
          onClick={() => router.push("/User/dashboard")}
          className="w-full bg-[#4DB648] text-white text-lg font-semibold rounded-xl py-3"
        >
          Kembali ke Homepage
        </button>
      </div>
    </div>
  );
}
