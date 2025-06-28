import { useState, useEffect } from "react";
import Image from "next/image"; 

const CardLayanan = ({ image, alt, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
      <div className="w-full h-80 relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2">
        <h3 className="text-xl font-bold text-[#5C4033] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const DetailLayanan = () => {
  // State untuk menyimpan data "Layanan Kami" dari API
  const [layananItems, setLayananItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLayananKami = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/layanan-kami");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        setLayananItems(data);
      } catch (err) {
        console.error("Error fetching Layanan Kami data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLayananKami();
  }, []); 

  if (loading) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Memuat data layanan...</p>
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

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#373536] mb-12">
          Layanan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {layananItems.map((item) => (
            <CardLayanan
              key={item.id}
              
              image={`http://localhost:8000/storage/${item.gambar}`}
              alt={item.nama} // Menggunakan nama sebagai alt text
              title={item.nama}
              description={item.deskripsi}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailLayanan;
