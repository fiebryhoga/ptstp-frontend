import { useState, useEffect } from "react";

const KeunggulanKami = () => {
  const [keunggulanItems, setKeunggulanItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeunggulanKami = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mengapa-kami");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setKeunggulanItems(data);
      } catch (err) {
        console.error("Error fetching Keunggulan Kami data:", err);
        setError("Gagal memuat data keunggulan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchKeunggulanKami();
  }, []); 

  if (loading) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Memuat data keunggulan kami...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  const icons = [
    "fas fa-truck-moving",
    "fas fa-route",
    "fas fa-handshake-angle",
    "fas fa-shield-virus",
    "fas fa-user-tie",
    "fas fa-award",
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
          {keunggulanItems.map((item, idx) => (
            <div
              key={item.id || idx} 
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                <i className={icons[idx % icons.length]}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanKami;
