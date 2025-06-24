import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      {" "}
      {/* Background putih */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Layanan Utama Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          Kami menyediakan solusi transportasi batu kapur yang efisien dan
          terpercaya untuk berbagai skala kebutuhan industri Anda. Dengan
          infrastruktur yang solid dan komitmen pada kualitas, kami siap menjadi
          mitra logistik Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Layanan 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-tractor"></i>{" "}
              {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Angkutan Batu Kapur
            </h3>
            <p className="text-gray-700">
              Jasa pengangkutan massal batu kapur dari lokasi tambang langsung
              ke tujuan Anda dengan efisiensi maksimal.
            </p>
          </div>
          {/* Layanan 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-route"></i> {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Manajemen Logistik Transportasi
            </h3>
            <p className="text-gray-700">
              Perencanaan rute optimal dan penjadwalan yang presisi untuk
              pengiriman tepat waktu.
            </p>
          </div>
          {/* Layanan 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-tools"></i> {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Pemeliharaan Armada Berkala
            </h3>
            <p className="text-gray-700">
              Komitmen kami pada kesiapan operasional melalui perawatan rutin
              dan perbaikan cepat.
            </p>
          </div>
        </div>
        <Link
          href="/layanan"
          className="mt-12 inline-block bg-[#FFC107] text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Lihat Semua Layanan
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
