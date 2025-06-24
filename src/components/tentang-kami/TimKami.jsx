import Image from "next/image";

const TimKami = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Tim Kami</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Di balik setiap operasi yang sukses, ada tim profesional dan
          berdedikasi yang bekerja dengan semangat tinggi untuk mencapai tujuan
          bersama.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh Profil Anggota Tim 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <Image
              src="/assets/image/team-member1.jpeg" // Ganti dengan gambar anggota tim
              alt="Nama Anggota Tim 1"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover w-36 h-36"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Budi Santoso
            </h3>
            <p className="text-[#109626] font-medium mb-3">Direktur Utama</p>
            <p className="text-gray-600 text-sm">
              Berpengalaman lebih dari 25 tahun dalam industri logistik dan
              transportasi berat.
            </p>
          </div>
          {/* Contoh Profil Anggota Tim 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <Image
              src="/assets/image/team-member2.jpeg" // Ganti dengan gambar anggota tim
              alt="Nama Anggota Tim 2"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover w-36 h-36"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Siti Aminah
            </h3>
            <p className="text-[#109626] font-medium mb-3">
              Kepala Operasional
            </p>
            <p className="text-gray-600 text-sm">
              Memastikan efisiensi operasional dan keselamatan di lapangan.
            </p>
          </div>
          {/* Contoh Profil Anggota Tim 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <Image
              src="/assets/image/team-member3.jpeg" // Ganti dengan gambar anggota tim
              alt="Nama Anggota Tim 3"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover w-36 h-36"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Rudi Hartono
            </h3>
            <p className="text-[#109626] font-medium mb-3">Manajer Armada</p>
            <p className="text-gray-600 text-sm">
              Bertanggung jawab atas pemeliharaan dan kesiapan seluruh armada.
            </p>
          </div>
        </div>
        {/* Opsional: Tombol untuk melihat lebih banyak tim jika ada */}
        {/* <Link href="/tim" className="mt-12 inline-block bg-transparent border-2 border-[#109626] text-[#109626] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#109626] hover:text-white transition duration-300">
          Lihat Semua Tim
        </Link> */}
      </div>
    </section>
  );
};

export default TimKami;