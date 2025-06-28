import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState dan useEffect

const ServicesSection = () => {
  // State untuk menyimpan data layanan dari API
  const [servicesItems, setServicesItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Lakukan fetch data dari API
        const response = await fetch("http://localhost:8000/api/layanan-kami");

        // Periksa jika respons tidak OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Ambil hanya 3 item pertama dari data
        setServicesItems(data.slice(0, 3));
      } catch (err) {
        console.error("Error fetching Services data:", err);
        setError("Gagal memuat data layanan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali saat komponen di-mount

  if (loading) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Memuat layanan utama...</p>
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

  // Definisikan ikon secara terpisah karena API tidak menyediakannya
  // Anda bisa menyesuaikan ini atau membuat logika untuk memetakan judul ke ikon
  const icons = ["fas fa-tractor", "fas fa-route", "fas fa-tools"];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#373536] mb-6">
          Layanan Utama Kami
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Kami menyediakan solusi transportasi batu kapur yang efisien dan
          terpercaya untuk berbagai kebutuhan industri Anda. Dengan
          infrastruktur yang solid dan komitmen pada kualitas, kami siap menjadi
          mitra logistik Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesItems.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-[#F9F9F9] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#D94A38] text-5xl mb-4">
                
                <i className={icons[index % icons.length]}></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#373536] mb-3">
                {item.nama} 
              </h3>
              <p className="text-gray-600">{item.deskripsi}</p>{" "}
            </div>
          ))}
        </div>

        <Link
          href="/layanan"
          className="mt-12 inline-block bg-[#D94A38] hover:bg-[#373536] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Lihat Semua Layanan
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
