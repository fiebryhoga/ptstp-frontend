import Image from "next/image";

const ProfilPerusahaan = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden px-4">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-[url('/assets/image/bg-footer.jpg')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        {/* Judul & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Profil Perusahaan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-5 leading-relaxed">
            <strong className="text-[#D94A38]">
              PT. Siwalan Teknik Perkasa
            </strong>{" "}
            adalah perusahaan jasa angkutan batu kapur yang berdiri sejak{" "}
            <strong className="text-gray-800">28 Maret 2000</strong>. Kami telah
            menjadi mitra logistik pertambangan terpercaya selama lebih dari dua
            dekade.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Fokus kami adalah mendukung kebutuhan transportasi sektor industri,
            konstruksi, dan pengolahan mineral di wilayah Jawa Timur dan
            sekitarnya melalui layanan profesional, efisien, dan tepat waktu.
          </p>
        </div>

        {/* Identitas Perusahaan */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#D94A38] mb-8 text-center md:text-left">
            Identitas Perusahaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
            <div className="flex items-start gap-4">
              <i className="fas fa-calendar-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Tanggal Berdiri:</span>
                28 Maret 2000
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-user-tie text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Direktur Utama:</span>
                Linda Pujianto
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-id-card text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Nomor Izin Usaha:</span>
                9120403841766
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Alamat Kantor:</span>
                Jl. Raya Semarang–Tuban KM 35, Paloh, Bancar, Kabupaten Tuban,
                Jawa Timur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPerusahaan;
