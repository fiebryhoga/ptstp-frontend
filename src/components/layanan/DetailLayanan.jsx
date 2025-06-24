import Image from "next/image"; // Import Image component

const DetailLayanan = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Detail Layanan Angkutan
        </h2>

        {/* Layanan: Angkutan Batu Kapur */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8 mb-12 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            {/* Menggunakan Image component untuk gambar layanan1.jpeg */}
            <Image
              src="/assets/image/layanan1.jpeg" // Pastikan path gambar Anda benar
              alt="Angkutan Batu Kapur"
              width={250} // Sesuaikan lebar gambar
              height={250} // Sesuaikan tinggi gambar
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Angkutan Batu Kapur
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kami menyediakan jasa pengangkutan batu kapur dalam skala besar
              dari lokasi tambang langsung ke fasilitas pengolahan atau tujuan
              akhir Anda. Dengan armada truk yang modern dan kapasitas angkut
              yang bervariasi, kami menjamin pengiriman yang efisien dan tepat
              waktu.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
              <li>Berbagai kapasitas truk sesuai kebutuhan proyek.</li>
              <li>
                Sistem penjadwalan yang fleksibel untuk memenuhi deadline.
              </li>
              <li>Pemantauan rute real-time untuk keamanan dan efisiensi.</li>
            </ul>
          </div>
        </div>

        {/* Layanan: Manajemen Logistik Transportasi */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-gray-50 rounded-lg shadow-lg p-8 mb-12 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            {/* Menggunakan Image component untuk gambar layanan2.jpeg */}
            <Image
              src="/assets/image/layanan2.jpeg" // Pastikan path gambar Anda benar
              alt="Manajemen Logistik Transportasi"
              width={250} // Sesuaikan lebar gambar
              height={250} // Sesuaikan tinggi gambar
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-right">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Manajemen Logistik Transportasi
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Efisiensi operasional sangat penting. Kami menawarkan layanan
              manajemen logistik yang meliputi perencanaan rute optimal,
              penjadwalan pengiriman, dan koordinasi dengan pihak-pihak terkait
              untuk memastikan alur material berjalan lancar tanpa hambatan.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2 md:pl-6">
              <li>Analisis rute terbaik untuk mengurangi biaya dan waktu.</li>
              <li>Koordinasi terpusat untuk kelancaran rantai pasok.</li>
              <li>Pelaporan kinerja logistik yang transparan.</li>
            </ul>
          </div>
        </div>

        {/* Layanan: Pemeliharaan Armada Berkala */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            {/* Menggunakan Image component untuk gambar layanan3.jpeg */}
            <Image
              src="/assets/image/layanan3.jpeg" // Pastikan path gambar Anda benar
              alt="Pemeliharaan Armada Berkala"
              width={250} // Sesuaikan lebar gambar
              height={250} // Sesuaikan tinggi gambar
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Pemeliharaan Armada Berkala
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kesiapan armada adalah kunci kelancaran operasional. Kami memiliki
              tim teknisi berpengalaman dan fasilitas pemeliharaan yang memadai
              untuk memastikan setiap unit truk selalu dalam kondisi prima,
              meminimalkan risiko kerusakan dan downtime.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
              <li>Jadwal perawatan preventif yang ketat.</li>
              <li>Inspeksi rutin dan perbaikan cepat di lapangan.</li>
              <li>Penggunaan suku cadang asli untuk performa maksimal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailLayanan;
