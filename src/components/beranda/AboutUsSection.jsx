import Link from "next/link";
import { useState, useEffect } from "react";

const AboutUsSection = () => {
  const [mengenalKamiItems, setMengenalKamiItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMengenalKami = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mengenal-kami");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMengenalKamiItems(data);
      } catch (err) {
        console.error("Error fetching Mengenal Kami data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMengenalKami();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#F9F9F9] px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Loading Mengenal Kami data...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-[#F9F9F9] px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }


  const icons = [
    "fas fa-history",
    "fas fa-truck-moving",
    "fas fa-users-cog",
    "fas fa-shield-alt",
  ];

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
          {mengenalKamiItems.map((item, index) => (
            <div
              key={item.id || index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                <i className={icons[index % icons.length]}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#373536] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/tentangKami"
          className="mt-12 inline-block border-2 border-[#D94A38] text-[#D94A38] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D94A38] hover:text-white transition duration-300"
        >
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
