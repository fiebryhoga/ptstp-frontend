import { useState, useEffect } from "react";

const WhyChooseUsSection = () => {
  const [whyChooseUsItems, setWhyChooseUsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mengapa-kami");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setWhyChooseUsItems(data);
      } catch (err) {
        console.error("Error fetching Why Choose Us data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWhyChooseUs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white text-[#373536] px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Loading Mengapa Kami data...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white text-[#373536] px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }


  const icons = [
    "fas fa-calendar-alt",
    "fas fa-truck",
    "fas fa-user-shield",
    "fas fa-clock",
    "fas fa-hard-hat",
    "fas fa-chart-line",
  ];

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
          {whyChooseUsItems.map((item, index) => (
            <div
              key={item.id || index} 
              className="flex flex-col items-center bg-[#F8F8F8] text-[#373536] p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#D94A38] text-4xl mb-4">
                <i className={icons[index % icons.length]}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
