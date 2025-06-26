import Link from "next/link";

const CTASectionTentangKami = () => {
  return (
    <section className="relative py-20 bg-white px-4 overflow-hidden">
      {/* Background Decorative */}
      <div
        className="absolute inset-0 bg-[url('/assets/image/bg-footer.jpg')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Bergabunglah dalam Perjalanan Kami
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Jadilah bagian dari misi kami dalam membangun infrastruktur dan
          industri yang lebih kuat. Kami siap menjadi mitra transportasi tambang
          yang andal dan tepat waktu untuk Anda.
        </p>
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D94A38] hover:bg-[#5C4033] text-white px-10 py-4 rounded-full text-xl font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
        >
          <i className="fab fa-whatsapp mr-2"></i> Hubungi Kami Sekarang
        </Link>
      </div>
    </section>
  );
};

export default CTASectionTentangKami;
