const VisiMisi = () => {
  return (
    <section className="py-20 bg-white text-gray-800 px-4 relative">
      <div
        className="absolute inset-0 bg-[url('/assets/image/bg-footer.jpg')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Visi & Misi Perusahaan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Kami percaya bahwa arah strategis yang jelas adalah fondasi utama
            untuk melayani dengan kualitas terbaik serta menjaga keberlanjutan
            usaha.
          </p>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center max-w-3xl mx-auto mb-20">
          <div className="text-[#D94A38] text-5xl mb-4">
            <i className="fas fa-eye"></i>
          </div>
          <h3 className="text-3xl font-bold mb-4">Visi</h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            “Mewujudkan dan Memanfaatkan Produksi dalam Negeri untuk
            Mensejahterakan Masyarakat dan Stakeholder”
          </p>
        </div>

        {/* Misi */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-6">Misi</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-hard-hat",
              title: "Keselamatan & Regulasi",
              desc: "Menjalankan usaha dengan berpedoman pada prinsip keselamatan kerja dan kepatuhan terhadap regulasi.",
            },
            {
              icon: "fas fa-leaf",
              title: "Kelestarian Lingkungan",
              desc: "Mendayagunakan sumber daya alam dengan tetap menjaga dan melestarikan lingkungan secara bertanggung jawab.",
            },
            {
              icon: "fas fa-handshake",
              title: "Mitra Andal & Profesional",
              desc: "Menjadi mitra andalan dalam jasa angkutan batu kapur dengan kehandalan armada, ketepatan waktu, dan kepuasan pelanggan.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#D94A38] text-3xl">
                  <i className={item.icon}></i>
                </div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
              </div>
              <p className="text-gray-700 text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
