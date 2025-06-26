const KeunggulanKami = () => {
  const items = [
    {
      icon: "fas fa-truck-moving",
      title: "Armada Andal & Lengkap",
      desc: "106 unit aktif terdiri dari 81 truk Dyna dan 25 truk Tronton yang siap menjawab segala kebutuhan logistik tambang Anda.",
    },
    {
      icon: "fas fa-route",
      title: "Cakupan Layanan Luas",
      desc: "Menjangkau seluruh wilayah Jawa Timur dan sekitarnya dengan ketepatan waktu dan rute optimal.",
    },
    {
      icon: "fas fa-handshake-angle",
      title: "Skema Layanan Fleksibel",
      desc: "Tersedia pilihan harian, borongan, hingga kontrak jangka panjang — disesuaikan dengan ritme proyek Anda.",
    },
    {
      icon: "fas fa-shield-virus",
      title: "Keselamatan & Perawatan Maksimal",
      desc: "Armada dirawat rutin dan pengemudi dibekali SOP ketat demi kelancaran dan keamanan setiap pengiriman.",
    },
    {
      icon: "fas fa-user-tie",
      title: "SDM Profesional & Terlatih",
      desc: "Seluruh tim kami dibekali pelatihan industri untuk menjaga kualitas layanan dan profesionalisme di lapangan.",
    },
    {
      icon: "fas fa-award",
      title: "Pengalaman Lebih dari 20 Tahun",
      desc: "Berdiri sejak tahun 2000, kami tumbuh menjadi perusahaan transportasi tambang yang terpercaya dan disegani.",
    },
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Keunggulan Kami
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Mengapa ratusan klien memilih kami? Karena kami hadir dengan solusi
          logistik tambang yang kuat, terpercaya, dan terus berkembang mengikuti
          kebutuhan industri.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanKami;
