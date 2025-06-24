// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini secara dinamis

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Logo dan Deskripsi Singkat */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="mb-4">
            <Image
              src="/assets/image/logo.png" // Pastikan path logo Anda benar
              alt="PT. Siwalan Tehnik Perkasa Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className="text-lg font-bold text-white mb-2">
            PT. Siwalan Teknik Perkasa
          </p>
          <p className="text-sm leading-relaxed max-w-xs">
            Penyedia jasa angkutan batu kapur terpercaya dengan pengalaman lebih
            dari 20 tahun. Mitra handal untuk kebutuhan transportasi tambang
            Anda.
          </p>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#FFC107] mb-5">
            Tautan Cepat
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/layanan"
                className="hover:text-white transition duration-300"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="/tentang-kami"
                className="hover:text-white transition duration-300"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/6285730979537"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak Detail */}
        {/* Mengembalikan md:col-span-2 menjadi 1 kolom agar sesuai dengan 4 kolom di grid md */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#FFC107] mb-5">
            Kontak Kami
          </h3>
          
          <ul className="space-y-3 mb-6 text-left inline-block md:block">
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-[#FFC107]"></i>
              <span>
                Alamat Kantor: Jl. Raya Semarang–Tuban No. KM 35, Paloh, Bancar,
                Kecamatan Bancar, Kabupaten Tuban, Jawa Timur.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-[#FFC107]"></i>
              <span>Email: stp.bancar@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-[#FFC107]"></i>
              <span>Telepon: +62 812-3456-7890</span>
            </li>
          </ul>
          
        </div>

      </div>

      {/* Bagian Peta Google Maps (baru dipindahkan) */}
      <div className="container mx-auto mt-10 pt-8 border-t border-gray-700">
        {" "}
        {/* Menambahkan padding atas dan border */}
        <h3 className="text-xl font-semibold text-[#FFC107] mb-4 text-center">
          Lokasi Kami
        </h3>
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8501890929797!2d111.79065357542585!3d-6.788077893209061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7709913f83ee63%3A0x97b0890f5fefe9a5!2sPT.%20SIWALAN%20TEHNIK%20PERKASA!5e0!3m2!1sen!2sid!4v1750774589702!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi PT. SIWALAN TEHNIK PERKASA"
          ></iframe>
        </div>
      </div>

      {/* Baris Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {currentYear} PT. Siwalan Teknik Perkasa. Semua Hak Dilindungi
          Undang-Undang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
