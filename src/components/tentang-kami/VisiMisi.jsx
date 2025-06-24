const VisiMisi = () => {
  return (
    <section className="py-16 bg-[#109626] text-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Visi & Misi Kami</h2>
        <p className="text-lg max-w-4xl mx-auto mb-10">
          Visi dan misi adalah panduan kami dalam setiap langkah, memastikan
          kami terus bergerak maju sejalan dengan nilai-nilai perusahaan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Visi */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-[#FFC107] text-6xl mb-4">
              <i className="fas fa-eye"></i> {/* Icon for Vision */}
            </div>
            <h3 className="text-3xl font-bold mb-3">Visi</h3>
            <p className="text-center text-lg text-gray-700">
              “Mewujudkan dan Memanfaatkan Produksi dalam Negeri untuk
              Mensejahterakan Masyarakat dan Stake Holder”
            </p>
          </div>
          {/* Misi */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-[#FFC107] text-6xl mb-4">
              <i className="fas fa-bullseye"></i> {/* Icon for Mission */}
            </div>
            <h3 className="text-3xl font-bold mb-3">Misi</h3>
            <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
              <li>
                Menjalankan Usaha Dengan Berpedoman pada Prinsip Keselamatan
                Kerja dan Kepatuhan Regulasi.
              </li>
              <li>
                Mendayagunakan Alam dengan Tetap Menjaga dan Melestarikan
                Lingkungan.
              </li>
              <li>
                Menjadi Mitra Andalan dalam Jasa Angkutan Batu Kapur dengan
                Mengedepankan Kehandalan Armada, Ketepatan Waktu, dan Kepuasan
                Pelanggan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
