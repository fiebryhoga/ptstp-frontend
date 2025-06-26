import Link from "next/link";

const CTASectionLayanan = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Siap Memulai Proyek Anda?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Percayakan kebutuhan angkutan batu kapur Anda kepada tim kami yang
          profesional dan berpengalaman. Kami siap memberikan solusi terbaik dan
          efisien.
        </p>
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D94A38] hover:bg-[#b83928] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
        >
          <i className="fab fa-whatsapp mr-2"></i> Konsultasi Sekarang
        </Link>
      </div>
    </section>
  );
};

export default CTASectionLayanan;
