const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-[#109626] text-white px-4">
      {" "}
      {/* Background hijau untuk kontras */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Mengapa Kami Mitra Terbaik Anda?
        </h2>

        <p className="text-lg max-w-4xl mx-auto mb-10">
          Memilih PT. Siwalan Teknik Perkasa berarti memilih keandalan,
          pengalaman, dan komitmen pada kepuasan pelanggan. Kami hadir untuk
          mendukung kelancaran operasional tambang Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Keunggulan Item */}
          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pengalaman Solid</h3>
            <p className="text-center text-gray-600">
              Lebih dari 20 tahun di industri angkutan batu kapur.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Armada Handal</h3>
            <p className="text-center text-gray-600">
              Truk modern, terawat, dan siap beroperasi 24/7.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-user-shield"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Keselamatan Prioritas Utama
            </h3>
            <p className="text-center text-gray-600">
              Prosedur ketat dan pelatihan berkala demi keamanan.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ketepatan Waktu</h3>
            <p className="text-center text-gray-600">
              Komitmen pengiriman sesuai jadwal yang telah disepakati.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Tim Profesional & Berlisensi
            </h3>
            <p className="text-center text-gray-600">
              Driver berpengalaman dan staf operasional terlatih.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-4xl mb-4">
              {" "}
              {/* Icon FontAwesome: kuning */}
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Fleksibilitas & Skalabilitas
            </h3>
            <p className="text-center text-gray-600">
              Mampu menyesuaikan dengan kebutuhan angkutan beragam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
