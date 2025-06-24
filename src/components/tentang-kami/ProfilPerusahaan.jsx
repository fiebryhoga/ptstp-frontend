import Image from "next/image";

const ProfilPerusahaan = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Profil Perusahaan
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          PT. Siwalan Tehnik Perkasa adalah perusahaan yang bergerak di bidang
          jasa angkutan batu kapur, berdiri sejak 28 Maret 2000, dan berkomitmen
          memberikan layanan logistik pertambangan yang andal, efisien, serta
          tepat waktu. Dengan lebih dari dua dekade pengalaman di sektor
          transportasi tambang, kami telah menjadi mitra strategis bagi berbagai
          perusahaan industri, pabrik pengolahan, dan kontraktor tambang di
          wilayah Jawa Timur dan sekitarnya.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          Kami hadir untuk menjawab kebutuhan pasar akan solusi angkutan tambang
          yang profesional. Dengan didukung oleh armada besar dan pengemudi
          berpengalaman, kami memastikan setiap proses distribusi berjalan aman
          dan terkoordinasi, mulai dari titik muat hingga titik bongkar.
        </p>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-lg text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Identitas Perusahaan
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <i className="fas fa-calendar-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold">Tanggal Berdiri:</span> 28 Maret
                2000
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-user-tie text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold">Direktur Utama:</span> Linda
                Pujianto
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-id-card text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold">Nomor Izin Perusahaan:</span>{" "}
                9120403841766
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold">Alamat:</span> Jl. Raya
                Semarang–Tuban No. KM 35, Paloh, Bancar, Kec. Bancar, Kabupaten
                Tuban, Jawa Timur
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfilPerusahaan;
