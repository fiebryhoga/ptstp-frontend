const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white text-[#373536] px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mengapa Kami Mitra Terbaik Anda?
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700">
          Memilih PT. Siwalan Tehnik Perkasa berarti memilih keandalan,
          pengalaman, dan komitmen terhadap kepuasan pelanggan. Kami hadir untuk
          mendukung kelancaran operasional tambang Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-calendar-alt",
              title: "Pengalaman Solid",
              desc: "Lebih dari 20 tahun di industri angkutan batu kapur.",
            },
            {
              icon: "fas fa-truck",
              title: "Armada Handal",
              desc: "Truk modern, terawat, dan siap beroperasi 24/7.",
            },
            {
              icon: "fas fa-user-shield",
              title: "Keselamatan Prioritas",
              desc: "Prosedur ketat dan pelatihan rutin demi keamanan operasional.",
            },
            {
              icon: "fas fa-clock",
              title: "Ketepatan Waktu",
              desc: "Pengiriman sesuai jadwal adalah komitmen utama kami.",
            },
            {
              icon: "fas fa-hard-hat",
              title: "Tim Profesional & Berlisensi",
              desc: "Driver dan staf kami berpengalaman dan terlatih.",
            },
            {
              icon: "fas fa-chart-line",
              title: "Fleksibel & Skalabel",
              desc: "Menyesuaikan kebutuhan logistik proyek kecil hingga besar.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F8F8F8] text-[#373536] p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#D94A38] text-4xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
