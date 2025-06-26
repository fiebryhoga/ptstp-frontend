import Link from "next/link";

const HeroLayanan = () => {
  return (
    <section
      className="relative h-[75vh] md:h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/image/hero-layanan.jpeg')" }}
    >
      {/* Overlay gelap dengan opacity untuk fokus teks */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto text-center relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Layanan Profesional & Terpercaya
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100 drop-shadow-md">
          Menyediakan solusi logistik batu kapur secara menyeluruh, cepat, dan
          aman untuk berbagai kebutuhan industri dan proyek.
        </p>

        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D94A38] hover:bg-[#5C4033] text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-xl"
        >
          <i className="fab fa-whatsapp mr-2"></i> Konsultasi Sekarang
        </Link>
      </div>
    </section>
  );
};

export default HeroLayanan;
