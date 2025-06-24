const ProcessSection = () => {
  return (
    <section className="py-16 bg-[#109626] text-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Bagaimana Kami Bekerja?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Proses kerja kami dirancang untuk memastikan setiap proyek berjalan
          dengan efisien, transparan, dan sesuai dengan harapan Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-5xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">
              Konsultasi & Penawaran
            </h3>
            <p className="text-center text-gray-600">
              Kami mendengarkan kebutuhan spesifik Anda dan menyusun penawaran
              terbaik.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-5xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">
              Perencanaan & Penjadwalan
            </h3>
            <p className="text-center text-gray-600">
              Menyusun rencana logistik dan jadwal pengiriman yang efisien.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-5xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">
              Pelaksanaan & Monitoring
            </h3>
            <p className="text-center text-gray-600">
              Pengiriman dilakukan dengan pemantauan ketat dari tim kami.
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-[#FFC107] text-5xl font-bold mb-4">4</div>
            <h3 className="text-xl font-semibold mb-2">Pelaporan & Evaluasi</h3>
            <p className="text-center text-gray-600">
              Memberikan laporan lengkap dan evaluasi untuk peningkatan
              berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
