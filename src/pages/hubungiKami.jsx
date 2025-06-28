import React, { useState, useEffect } from "react";
import Layout from "./layout"; // Pastikan path ini benar
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaTag,
  FaCommentDots,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const HubungiKami = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // 'success' or 'error'

  // State untuk data kontak dari API
  const [contactData, setContactData] = useState(null);
  const [loadingContact, setLoadingContact] = useState(true);
  const [errorContact, setErrorContact] = useState(null);

  // State untuk form pesan
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  // Effect untuk mengambil data kontak dari API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/kontak-kami");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContactData(data);
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setErrorContact("Gagal memuat informasi kontak.");
      } finally {
        setLoadingContact(false);
      }
    };

    fetchContactData();
  }, []);

  // Handler perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalMessage("");
    setModalType("success"); // Reset type

    try {
      const response = await fetch("http://localhost:8000/api/pesan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Jika ada error validasi dari Laravel, respons mungkin 422
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Terjadi kesalahan saat mengirim pesan.";
        setModalMessage(errorMessage);
        setModalType("error");
        throw new Error(errorMessage);
      }

      const result = await response.json();
      setModalMessage(result.message || "Pesan berhasil dikirim!");
      setModalType("success");
      setIsModalOpen(true);
      e.target.reset(); // Reset form setelah berhasil
      setFormData({
        // Reset state form
        nama: "",
        perusahaan: "",
        email: "",
        subjek: "",
        pesan: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      if (modalMessage === "") {
        // Only set if not already set by API error
        setModalMessage("Gagal mengirim pesan. Silakan coba lagi.");
        setModalType("error");
      }
    } finally {
      setIsModalOpen(true); // Tampilkan modal
      setTimeout(() => {
        setIsModalOpen(false);
        setModalMessage(""); // Bersihkan pesan modal setelah ditutup
      }, 3000); // Modal akan tertutup setelah 3 detik
    }
  };

  return (
    <Layout>
      <section className="h-screen bg-gray-50 flex items-center justify-center px-4 py-16 relative">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Modal Content */}
            <div
              className={`relative bg-white px-8 py-6 rounded-lg shadow-xl text-center z-10 max-w-sm w-full 
                          ${
                            modalType === "success"
                              ? "border-t-4 border-green-500"
                              : "border-t-4 border-red-500"
                          }`}
            >
              <h2
                className={`text-2xl font-bold mb-2 ${
                  modalType === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {modalType === "success" ? "Sukses!" : "Gagal!"}
              </h2>
              <p className="text-gray-700">{modalMessage}</p>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Info Kontak */}
          <div className="hidden md:flex bg-[#D94A38] text-white flex-col justify-between p-10">
            <div>
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-lg mb-6 max-w-sm leading-relaxed">
                Ada pertanyaan, penawaran, atau ingin bekerja sama? Kami siap
                mendengarkan Anda!
              </p>
              <div className="space-y-4 text-sm sm:text-base">
                {loadingContact ? (
                  <p>Memuat info kontak...</p>
                ) : errorContact ? (
                  <p className="text-red-300">{errorContact}</p>
                ) : contactData ? (
                  <>
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-xl mt-1" />
                      <p>
                        <strong>Alamat Kantor:</strong> <br />
                        {contactData.alamat_kantor || "N/A"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaEnvelope className="text-xl mt-1" />
                      <p>
                        <strong>Email:</strong> <br />
                        {contactData.email || "N/A"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaPhoneAlt className="text-xl mt-1" />
                      <p>
                        <strong>Telepon:</strong> <br />
                        {contactData.telepon || "N/A"}
                      </p>
                    </div>
                  </>
                ) : (
                  <p>Data kontak tidak tersedia.</p>
                )}
              </div>
            </div>

            {/* Tombol WhatsApp dan Google Maps */}
            <div className="mt-6 flex flex-col gap-3">
              {contactData?.telepon && (
                <a
                  href={`https://wa.me/${contactData.telepon.replace(
                    /\D/g,
                    ""
                  )}`} // Hapus karakter non-digit
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#D94A38] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                >
                  <FaWhatsapp /> Chat via WhatsApp
                </a>
              )}
              {contactData?.alamat_kantor && (
                <a
                  href={`https://maps.google.com?q=${encodeURIComponent(
                    contactData.alamat_kantor
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#D94A38] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                >
                  <FaMapMarkerAlt /> Lihat di Google Maps
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Kirim Pesan Anda
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaUser className="text-[#D94A38]" />
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  placeholder="Nama Anda *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaBuilding className="text-[#D94A38]" />
                <input
                  type="text"
                  name="perusahaan"
                  value={formData.perusahaan}
                  onChange={handleChange}
                  required
                  placeholder="Nama Perusahaan *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaEnvelope className="text-[#D94A38]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaTag className="text-[#D94A38]" />
                <input
                  type="text"
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  required
                  placeholder="Subjek *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-start gap-3 border-b border-gray-300 py-2">
                <FaCommentDots className="text-[#D94A38] mt-2" />
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  placeholder="Pesan Anda *"
                  rows="4"
                  className="w-full outline-none bg-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D94A38] text-white py-3 rounded-lg font-semibold hover:bg-[#b83d2d] transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HubungiKami;
