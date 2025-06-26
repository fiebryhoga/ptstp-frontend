// components/Navbar.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../common/Button"; // Pastikan path ini benar

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu mobile

  // Cek route aktif
  useEffect(() => {
    if (router.isReady) {
      setCurrentPath(router.pathname);
    }
  }, [router.isReady, router.pathname]);

  // Cek scroll (untuk hide/show navbar)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true); // Saat di paling atas, navbar tetap muncul
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scroll ke atas
      } else {
        setIsVisible(false); // Scroll ke bawah
        setIsMenuOpen(false); // Tutup menu mobile saat scroll ke bawah
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (pathname) => currentPath === pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo dan Nama Perusahaan */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 flex-shrink-0" // flex-shrink-0 agar tidak menyusut
          onClick={() => setIsMenuOpen(false)} // Tutup menu saat klik logo
        >
          <img
            className="w-12 sm:w-14 md:w-16 h-auto" // Ukuran logo responsif
            src="/assets/image/logo-stp.png"
            alt="Logo PT. Siwalan Tehnik Perkasa"
          />
          <span className="text-base sm:text-lg md:text-2xl font-bold text-[#D94A38] whitespace-nowrap overflow-hidden text-ellipsis">
            PT. Siwalan Tehnik Perkasa
          </span>
        </Link>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#5C4033] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigasi Utama (Tersembunyi di Mobile, Tampil di Desktop) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <li>
            <Link
              href="/"
              className={`
                pb-1 md:pb-2 lg:pb-4 hover:border-b-2 hover:border-[#D94A38]
                transition duration-300 text-sm md:text-base
                ${
                  isActive("/")
                    ? "text-[#D94A38] border-b-2 border-[#D94A38]"
                    : "text-[#5C4033] hover:text-[#D94A38]"
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
                pb-1 md:pb-2 lg:pb-4 hover:border-b-2 hover:border-[#D94A38]
                transition duration-300 text-sm md:text-base
                ${
                  isActive("/layanan")
                    ? "text-[#D94A38] border-b-2 border-[#D94A38]"
                    : "text-[#5C4033] hover:text-[#D94A38]"
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
                pb-1 md:pb-2 lg:pb-4 hover:border-b-2 hover:border-[#D94A38]
                transition duration-300 text-sm md:text-base
                ${
                  isActive("/tentangKami")
                    ? "text-[#D94A38] border-b-2 border-[#D94A38]"
                    : "text-[#5C4033] hover:text-[#D94A38]"
                }
              `}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="ml-4">
            {" "}
            {/* Margin untuk memisahkan dari menu */}
            <Button href="https://wa.me/6281234567890">Hubungi Kami</Button>
          </li>
        </ul>
      </div>

      {/* Menu Mobile yang Di-toggle */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link
              href="/"
              className={`
                block py-2 text-lg
                ${
                  isActive("/")
                    ? "text-[#D94A38] font-semibold"
                    : "text-[#5C4033] hover:text-[#D94A38]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/layanan"
              className={`
                block py-2 text-lg
                ${
                  isActive("/layanan")
                    ? "text-[#D94A38] font-semibold"
                    : "text-[#5C4033] hover:text-[#D94A38]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              href="/tentangKami"
              className={`
                block py-2 text-lg
                ${
                  isActive("/tentangKami")
                    ? "text-[#D94A38] font-semibold"
                    : "text-[#5C4033] hover:text-[#D94A38]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
          </li>
          <li className="pt-4">
            <Button
              href="https://wa.me/6281234567890"
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
