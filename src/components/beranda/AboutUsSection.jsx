import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-[#F9F9F9] px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#373536] mb-6">
          Mengenal Kami Lebih Dekat
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12">
          PT. Siwalan Tehnik Perkasa adalah pionir dalam jasa angkutan batu
          kapur di Indonesia. Berdiri sejak tahun 2000, kami telah melayani
          berbagai kebutuhan industri tambang dengan komitmen terhadap
          efisiensi, keamanan, dan kepercayaan.
        </p>

        {/* Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "fas fa-history",
              title: "Pengalaman 20+ Tahun",
              desc: "Rekam jejak terbukti dalam melayani industri tambang.",
            },
            {
              icon: "fas fa-truck-moving",
              title: "Armada Modern & Terawat",
              desc: "Menjamin efisiensi dan keamanan operasional pengangkutan.",
            },
            {
              icon: "fas fa-users-cog",
              title: "Tim Profesional",
              desc: "Sumber daya manusia yang kompeten dan berdedikasi tinggi.",
            },
            {
              icon: "fas fa-shield-alt",
              title: "Prioritas Keselamatan",
              desc: "Komitmen terhadap standar keamanan operasional yang ketat.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#373536] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tombol CTA */}
        <Link
          href="/tentang-kami"
          className="mt-12 inline-block border-2 border-[#D94A38] text-[#D94A38] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D94A38] hover:text-white transition duration-300"
        >
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
