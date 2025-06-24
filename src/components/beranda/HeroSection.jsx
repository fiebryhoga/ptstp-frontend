import Link from "next/link";
import Image from "next/image"; // Opsional, jika ada gambar di dalam section ini selain background

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/image/hero.jpeg')" }} // Pastikan path gambar hero Anda benar
    >
      {/* Overlay untuk teks agar lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-white text-center z-10 relative px-4 gap-8">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Selamat Datang di PT. Siwalan Tehnik Perkasa
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in-up">
          Andal Menggerakkan Tambang Sejak Tahun 2000
        </p>
        <p className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in-up delay-200">
          Perusahaan Jasa Angkutan Batu Kapur yang telah beroperasi sejak Tahun
          2000, melayani kebutuhan transportasi tambang dengan armada yang
          handal dan tim profesional
        </p>
        <Link
          href="/layanan"
          className="bg-[#FFC107] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          Pelajari Layanan Kami
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
