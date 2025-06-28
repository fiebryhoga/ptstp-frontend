import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [contactData, setContactData] = useState(null);
  const [loadingContact, setLoadingContact] = useState(true);
  const [errorContact, setErrorContact] = useState(null);

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
        console.error("Error fetching contact data for footer:", err);
        setErrorContact("Gagal memuat info kontak.");
      } finally {
        setLoadingContact(false);
      }
    };

    fetchContactData();
  }, []); 

  return (
    <footer className="relative text-gray-200 px-4 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/image/bg-footer.jpg"
          alt="Background Footer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#373536]/80"></div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/image/logo-stp.png"
              alt="Logo PT. Siwalan Tehnik Perkasa"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold text-white">
              PT. Siwalan Tehnik Perkasa
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Mitra logistik andal sejak 2000 untuk angkutan batu kapur di Jawa
            Timur dan sekitarnya. Profesional, aman, dan tepat waktu.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#D94A38] mb-4">
            Tautan Cepat
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="hover:text-white">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami" className="hover:text-white">
                Tentang Kami
              </Link>
            </li>
            <li>
              
              {contactData?.telepon ? (
                <Link
                  href={`https://wa.me/${contactData.telepon.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Hubungi Kami
                </Link>
              ) : (
                <span className="text-gray-400">Hubungi Kami</span>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#D94A38] mb-4">
            Kontak Kami
          </h4>
          <ul className="space-y-3 text-sm">
            {loadingContact ? (
              <li>Memuat info kontak...</li>
            ) : errorContact ? (
              <li className="text-red-300">{errorContact}</li>
            ) : contactData ? (
              <>
                <li className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-[#D94A38] mt-1"></i>
                  <span>
                    {contactData.alamat_kantor || "Alamat tidak tersedia."}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-[#D94A38]"></i>
                  <span>{contactData.email || "Email tidak tersedia."}</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone-alt text-[#D94A38]"></i>
                  <span>
                    {contactData.telepon || "Telepon tidak tersedia."}
                  </span>
                </li>
              </>
            ) : (
              <li>Data kontak tidak tersedia.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative z-10 container mx-auto mt-12">
        <h4 className="text-lg font-semibold text-[#D94A38] mb-4 text-center">
          Lokasi Kami
        </h4>
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
          {loadingContact ? (
            <p className="text-center text-gray-400 py-20">Memuat peta...</p>
          ) : errorContact ? (
            <p className="text-center text-red-300 py-20">{errorContact}</p>
          ) : contactData?.alamat_kantor ? (
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8501890929797!2d111.79065357542585!3d-6.788077893209061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7709913f83ee63%3A0x97b0890f5fefe9a5!2sPT.%20SIWALAN%20TEHNIK%20PERKASA!5e0!3m2!1sen!2sid!4v1750774589702!5m2!1sen!2sid&q=${encodeURIComponent(
                contactData.alamat_kantor
              )}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="PT. Siwalan Tehnik Perkasa Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <p className="text-center text-gray-400 py-20">
              Alamat tidak tersedia untuk peta.
            </p>
          )}
        </div>
      </div>

      <div className="relative z-10 text-center mt-10 pt-6 border-t border-gray-700 text-lg text-white">
        &copy; {currentYear} PT. Siwalan Tehnik Perkasa. Seluruh hak cipta
        dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
