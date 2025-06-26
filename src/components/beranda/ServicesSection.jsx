import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#373536] mb-6">
          Layanan Utama Kami
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Kami menyediakan solusi transportasi batu kapur yang efisien dan
          terpercaya untuk berbagai kebutuhan industri Anda. Dengan
          infrastruktur yang solid dan komitmen pada kualitas, kami siap menjadi
          mitra logistik Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-tractor",
              title: "Angkutan Batu Kapur",
              desc: "Pengangkutan batu kapur dari lokasi tambang ke tujuan Anda dengan efisiensi maksimal.",
            },
            {
              icon: "fas fa-route",
              title: "Manajemen Logistik Transportasi",
              desc: "Perencanaan rute dan jadwal optimal untuk menjamin ketepatan waktu pengiriman.",
            },
            {
              icon: "fas fa-tools",
              title: "Pemeliharaan Armada Berkala",
              desc: "Perawatan rutin armada untuk menjaga kesiapan operasional dan keandalan pengangkutan.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#373536] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/layanan"
          className="mt-12 inline-block bg-[#D94A38] hover:bg-[#373536] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Lihat Semua Layanan
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
