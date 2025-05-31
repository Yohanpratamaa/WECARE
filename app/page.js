"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Apakah We Care hanya untuk pengguna BPJS",
      a: "Informasi transparan soal kisaran biaya dan lokasi rumah sakit terbaik.",
    },
    {
      q: "Apakah layanan estimasi biaya akurat?",
      a: "Estimasi biaya didasarkan pada data rumah sakit dan pengalaman pengguna.",
    },
    {
      q: "Bagaimana cara booking layanan lewat WeCare?",
      a: "Pilih layanan, isi data, dan lakukan booking langsung dari aplikasi.",
    },
    {
      q: "Apakah pembiayaan darurat itu pinjaman online?",
      a: "Pembiayaan darurat adalah solusi keuangan untuk kebutuhan berobat, bukan pinjaman konsumtif.",
    },
    {
      q: "Apakah data saya aman di WeCare?",
      a: "Data Anda dijamin aman dan hanya digunakan untuk keperluan layanan kesehatan.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4 bg-white">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="WeCare Logo" width={36} height={36} />
          <span className="font-bold text-2xl text-[#1A3B34]">Wecare</span>
        </div>
        <button>
          <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <circle cx={5} cy={12} r={1.5} fill="#222" />
            <circle cx={12} cy={12} r={1.5} fill="#222" />
            <circle cx={19} cy={12} r={1.5} fill="#222" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <div className="px-6 pt-4 pb-6 text-center bg-white">
        <div className="font-bold text-2xl leading-snug mb-3 text-[#232B3B]">
          Cek Biaya, Temukan Rumah Sakit, dan Tetap Bisa Berobat Meski BPJSmU
          Nonaktif.
        </div>
        <div className="text-gray-400 text-base mb-6">
          WeCare memudahkan akses kesehatan lewat estimasi biaya, rekomendasi
          rumah sakit, dan booking layanan. Khusus pengguna BPJS nonaktif,
          tersedia pembiayaan darurat agar tetap bisa berobat.
        </div>
        <button
          className="w-full bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-4 mb-3 shadow text-lg"
          onClick={() => router.push("/User/dashboard")}
        >
          Daftar Sebagai Calon Pasien
        </button>
        <button
          className="w-full border-2 border-[#4DB648] text-[#4DB648] font-semibold rounded-2xl py-4 mb-3 bg-white text-lg"
          onClick={() => router.push("/Hospital/dashboard")}
        >
          Daftar Sebagai RS/Mitra
        </button>
      </div>

      {/* Kenapa Harus WeCare */}
      <div className="px-6 mt-6">
        <div className="font-bold text-xl mb-4 text-[#232B3B]">
          Kenapa Harus WeCare
        </div>
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 items-start mb-6">
          <div className="font-semibold text-base mb-1">
            Dapatkan Estimasi dan Chatbot Pintar Untuk Rekomendasi RS
          </div>
          <div className="text-gray-400 text-base mb-4">
            Informasi transparan soal kisaran biaya dan lokasi rumah sakit
            terbaik.
          </div>
          <div className="flex items-center w-full">
            <button
              className="bg-gradient-to-r from-[#4DB648] to-green-500 text-white font-semibold rounded-2xl py-3 px-6 shadow text-base"
              onClick={() => router.push("/User/EstimateCost")}
            >
              Coba Sekarang
            </button>
            <div className="ml-auto">
              <Image
                alt="Chatbot"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
