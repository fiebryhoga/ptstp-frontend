import Link from "next/link";

const HeroTentangKami = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/image/layanan1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto text-center z-10 relative px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Tentang Kami
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
          Membangun Kepercayaan, Menggerakkan Industri Sejak Tahun 2000.
        </p>
        <Link
          href="https://wa.me/6285730979537"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFC107] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          <i className="fab fa-whatsapp mr-2"></i> Hubungi Kami
        </Link>
      </div>
    </section>
  );
};

export default HeroTentangKami;
