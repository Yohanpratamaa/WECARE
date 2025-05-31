import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Mencegah Risiko Lebih Besar",
    desc: "Tanpa BPJS, biaya rumah sakit bisa jauh lebih tinggi. WeCare bantu cegah krisis lebih besar di kemudian hari.",
  },
  {
    title: "Secure Transaction",
    desc: "Verified users contribute to a safer and more trustworthy community.",
  },
  {
    title: "Transparan dan Aman",
    desc: "Semua ketentuan, jadwal pembayaran, dan biaya dijelaskan di awal—tanpa biaya tersembunyi, tanpa jebakan. Data pengguna juga dilindungi dengan standar keamanan yang tinggi.",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7] px-4 py-6">
      <div className="flex justify-center">
        <Image
          src="/rafiki.png"
          alt="Logo"
          width={250}
          height={180}
          className="mb-2"
        />
      </div>
      <div className="bg-white rounded-2xl p-6 mt-2 relative">
        <div className="text-2xl font-bold mb-2">
          Selamat datang di Pembiayaan Darurat
          <span className="text-green-500 ml-2">WeCare</span>
        </div>
        <div className="text-gray-500 mb-6 text-sm">
          Layanan WeCare membantu Anda mengakses kembali BPJS yang nonaktif,
          dengan solusi pembiayaan yang fleksibel dan aman
        </div>
        <div className="w-100 h-[1px] absolute left-0 bg-gray-300"></div>
        <div className="font-bold text-lg mt-10">Kenapa WeCare</div>
        <div className="text-gray-500 text-sm mb-4">
          WeCare PayLater hadir untuk menjembatani peserta BPJS nonaktif agar
          bisa kembali mengakses layanan kesehatan tanpa beban langsung di
          depan.
        </div>
        <div className="space-y-3">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col bg-[#FBFBFB] rounded-xl p-5">
              <div className="mb-2 flex">
                <svg width="32" height="32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#4DB648" />
                  <path
                    d="M11 17l4 4 6-6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-black text-lg">
                  {f.title}
                </div>
                <div className="text-gray-500 text-sm mt-1">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-center">
        <button className="w-full max-w-md bg-[#4DB648] hover:bg-green-600 text-white font-semibold rounded-xl py-4 mt-6 shadow">
          Start Verification
        </button>
      </div>
    </div>
  );
};

export default Page;
