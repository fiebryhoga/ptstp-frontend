import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      {" "}
      {/* Background abu-abu terang */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Mengenal Kami Lebih Dekat
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
          PT. Siwalan Teknik Perkasa adalah pionir dalam jasa angkutan batu
          kapur di Indonesia, dengan pengalaman lebih dari dua dekade. Berdiri
          sejak tahun 2000, kami berkomitmen penuh untuk menyediakan solusi
          transportasi tambang yang efisien, aman, dan terpercaya.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Keunggulan 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-history"></i>{" "}
              {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pengalaman 20+ Tahun
            </h3>
            <p className="text-gray-600">
              Rekam jejak terbukti dalam melayani industri tambang.
            </p>
          </div>
          {/* Keunggulan 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-truck-moving"></i>{" "}
              {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Armada Modern & Terawat
            </h3>
            <p className="text-gray-600">
              Menjamin efisiensi dan keamanan operasional pengangkutan.
            </p>
          </div>
          {/* Keunggulan 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-users-cog"></i>{" "}
              {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tim Profesional
            </h3>
            <p className="text-gray-600">
              Sumber daya manusia yang kompeten dan berdedikasi tinggi.
            </p>
          </div>
          {/* Keunggulan 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="text-[#FFC107] text-5xl mb-4">
              <i className="fas fa-shield-alt"></i>{" "}
              {/* Icon FontAwesome: kuning */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prioritas Keselamatan
            </h3>
            <p className="text-gray-600">
              Komitmen terhadap standar keamanan operasional yang ketat.
            </p>
          </div>
        </div>
        <Link
          href="/tentang-kami"
          className="mt-12 inline-block bg-transparent border-2 border-[#FFC107] text-[#FFC107] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFC107] hover:text-gray-900 transition duration-300"
        >
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
