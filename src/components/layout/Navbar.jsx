// components/Navbar.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; // Tambahkan useState dan useEffect

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(""); // State untuk menyimpan path aktif

  // useEffect akan berjalan setelah komponen di-mount di sisi klien
  useEffect(() => {
    // Pastikan router.isReady bernilai true sebelum mengakses router.pathname
    if (router.isReady) {
      setCurrentPath(router.pathname);
    }
  }, [router.isReady, router.pathname]); // Dependensi agar efek berjalan saat router siap atau path berubah

  // Fungsi untuk menentukan apakah link adalah halaman aktif
  const isActive = (pathname) => currentPath === pathname;

  return (
    <nav className="bg-white shadow-md p-4">
      {" "}
      {/* Removed 'top-0' as it's often handled by a wrapping layout */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Nama Perusahaan */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#109626] flex flex-row gap-4 justify-center items-center"
        >
          <img
            className="w-12"
            src="/assets/image/logo.png"
            alt="Logo PT. Siwalan Tehnik Perkasa"
          />
          PT. Siwalan Tehnik Perkasa
        </Link>

        {/* Navigasi Utama */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`
                pb-4 hover:border-b-2 hover:border-[#109626]
                transition duration-300
                ${
                  isActive("/")
                    ? "text-[#109626] border-b-2 border-[#109626]"
                    : "text-black hover:text-[#109626]"
                }
              `}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/layanan"
              className={`
                pb-4 hover:border-b-2 hover:border-[#109626]
                transition duration-300
                ${
                  isActive("/layanan")
                    ? "text-[#109626] border-b-2 border-[#109626]"
                    : "text-black hover:text-[#109626]"
                }
              `}
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              href="/tentangKami"
              className={`
                pb-4 hover:border-b-2 hover:border-[#109626]
                transition duration-300
                ${
                  isActive("/tentangKami")
                    ? "text-[#109626] border-b-2 border-[#109626]"
                    : "text-black hover:text-[#109626]"
                }
              `}
            >
              Tentang Kami
            </Link>
          </li>
        </ul>

        {/* Hubungi Kami Button - Changed to yellow accent */}
        <Link
          href="https://wa.me/6285730979537"
          className="rounded-full px-10 py-3 bg-[#FFC107] text-gray-900 transition duration-300 hover:bg-yellow-500 font-semibold" // Kuning untuk latar belakang, teks hitam agar kontras
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

