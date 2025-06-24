import Image from "next/image";

const SejarahKami = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Perjalanan Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          PT. Siwalan Teknik Perkasa didirikan pada tahun 2000 dengan visi untuk
          menjadi penyedia jasa angkutan batu kapur terkemuka yang mengutamakan
          keandalan dan profesionalisme. Sejak saat itu, kami telah tumbuh dan
          berkembang, menghadapi berbagai tantangan, dan terus beradaptasi
          dengan dinamika industri.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Fondasi Awal (2000-2005)
            </h3>
            <p className="text-gray-700">
              Dimulai dengan beberapa unit armada, fokus pada pengembangan rute
              lokal dan membangun reputasi sebagai penyedia yang dapat
              diandalkan di wilayah Jawa Timur.
            </p>
          </div>
          <div className="text-left p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Ekspansi & Modernisasi (2006-2015)
            </h3>
            <p className="text-gray-700">
              Penambahan jumlah armada, investasi pada teknologi pelacakan, dan
              perluasan jangkauan layanan ke berbagai wilayah di Indonesia.
            </p>
          </div>
          <div className="text-left p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Inovasi & Keberlanjutan (2016-Sekarang)
            </h3>
            <p className="text-gray-700">
              Fokus pada efisiensi operasional, peningkatan standar keselamatan,
              dan penerapan praktik bisnis yang berkelanjutan untuk mendukung
              pertumbuhan jangka panjang.
            </p>
          </div>
          {/* <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/image/layanan1.jpeg" // Gambar ilustrasi sejarah atau timeline
              alt="Sejarah PT. Siwalan Teknik Perkasa"
              width={400}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SejarahKami;
