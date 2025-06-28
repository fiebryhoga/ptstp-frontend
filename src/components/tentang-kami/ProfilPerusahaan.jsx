import Image from "next/image";
import { useState, useEffect } from "react"; 

const ProfilPerusahaan = () => {
  const [profilData, setProfilData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfilPerusahaan = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/profil-perusahaan"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProfilData(data);
      } catch (err) {
        console.error("Error fetching Profil Perusahaan data:", err);
        setError(
          "Gagal memuat data profil perusahaan. Silakan coba lagi nanti."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfilPerusahaan();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white relative overflow-hidden px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">Memuat profil perusahaan...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white relative overflow-hidden px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  const formattedTanggalBerdiri = profilData?.tanggal_berdiri
    ? new Date(profilData.tanggal_berdiri).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <section className="py-24 bg-white relative overflow-hidden px-4">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-[url('/assets/image/bg-footer.jpg')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        {/* Judul & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Profil Perusahaan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-5 leading-relaxed">
            {profilData?.kata_pengantar
              ? 
                profilData.kata_pengantar.split("||").map((paragraph, idx) => (
                  <span key={idx} className="block mb-2">
                    {paragraph.trim()}
                  </span>
                ))
              : "Data pengantar tidak tersedia."}
          </p>
        </div>

        {/* Identitas Perusahaan */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#D94A38] mb-8 text-center md:text-left">
            Identitas Perusahaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
            <div className="flex items-start gap-4">
              <i className="fas fa-calendar-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Tanggal Berdiri:</span>
                {formattedTanggalBerdiri}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-user-tie text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Direktur Utama:</span>
                {profilData?.direktur_utama || "N/A"}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-id-card text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Nomor Izin Usaha:</span>
                {profilData?.nomor_izin_usaha || "N/A"}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-[#FFC107] text-2xl mt-1"></i>
              <div>
                <span className="font-semibold block">Alamat Kantor:</span>
                {profilData?.alamat_kantor || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPerusahaan;
