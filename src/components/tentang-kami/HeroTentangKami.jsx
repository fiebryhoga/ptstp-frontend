import Link from "next/link";

const HeroTentangKami = () => {
  return (
    <section
      className="relative h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: "url('/assets/image/layanan1.jpeg')" }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Tentang Kami
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-100">
            Sejak tahun 2000, PT. Siwalan Teknik Perkasa menjadi ujung tombak
            dalam jasa angkutan batu kapur di Indonesia — menggabungkan
            pengalaman, inovasi, dan komitmen terhadap kepuasan pelanggan.
          </p>
          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D94A38] hover:bg-[#b53e2c] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up delay-300"
          >
            <i className="fab fa-whatsapp mr-2"></i> Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroTentangKami;
