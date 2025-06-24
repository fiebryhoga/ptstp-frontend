const KeunggulanKami = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Keunggulan Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          Dengan pengalaman puluhan tahun dan komitmen pada kualitas, kami
          menawarkan berbagai keunggulan yang menjadikan kami pilihan terbaik
          untuk kebutuhan transportasi tambang Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Keunggulan 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-truck"></i> {/* Icon for armada */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              106 Unit Armada Aktif
            </h3>
            <p className="text-gray-700">
              Terdiri dari 81 Truk Dyna dan 25 Truk Tronton siap mendukung
              operasional Anda.
            </p>
          </div>
          {/* Keunggulan 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-map-marked-alt"></i>{" "}
              {/* Icon for wide coverage */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Jangkauan Layanan Luas
            </h3>
            <p className="text-gray-700">
              Melayani kebutuhan transportasi di wilayah Jawa Timur dan
              sekitarnya.
            </p>
          </div>
          {/* Keunggulan 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-handshake"></i>{" "}
              {/* Icon for flexible service */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Layanan Fleksibel
            </h3>
            <p className="text-gray-700">
              Menawarkan skema borongan, sewa kontrak, dan pengiriman rutin
              sesuai kebutuhan Anda.
            </p>
          </div>
          {/* Keunggulan 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-shield-alt"></i>{" "}
              {/* Icon for high standards */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Standar Operasional Tinggi
            </h3>
            <p className="text-gray-700">
              Mengedepankan pemeliharaan armada dan keselamatan kerja untuk
              operasional tanpa hambatan.
            </p>
          </div>
          {/* Keunggulan 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-award"></i>{" "}
              {/* Icon for trusted reputation */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Reputasi Terpercaya
            </h3>
            <p className="text-gray-700">
              Telah membangun kepercayaan sejak tahun 2000 sebagai mitra yang
              handal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeunggulanKami;
