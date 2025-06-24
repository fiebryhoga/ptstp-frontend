const NilaiInti = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Nilai-Nilai Inti Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          Nilai-nilai ini menjadi landasan bagi setiap keputusan dan tindakan
          yang kami ambil, mencerminkan komitmen kami kepada pelanggan,
          karyawan, dan masyarakat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nilai 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-handshake"></i> {/* Icon for integrity */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Integritas
            </h3>
            <p className="text-gray-700">
              Beroperasi dengan kejujuran, transparansi, dan etika tertinggi
              dalam setiap aspek bisnis kami.
            </p>
          </div>
          {/* Nilai 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-award"></i> {/* Icon for excellence */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Keunggulan
            </h3>
            <p className="text-gray-700">
              Berusaha memberikan layanan terbaik dan melampaui harapan
              pelanggan di setiap kesempatan.
            </p>
          </div>
          {/* Nilai 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-users"></i> {/* Icon for teamwork */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Kerja Sama Tim
            </h3>
            <p className="text-gray-700">
              Membangun lingkungan kerja yang kolaboratif, saling menghargai,
              dan mendukung pertumbuhan bersama.
            </p>
          </div>
          {/* Nilai 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-recycle"></i> {/* Icon for sustainability */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Keberlanjutan
            </h3>
            <p className="text-gray-700">
              Berkomitmen pada praktik bisnis yang bertanggung jawab terhadap
              lingkungan dan masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NilaiInti;


