const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**", // Sesuaikan dengan path penyimpanan gambar Anda di Laravel
      },
    ],
  },
};

// Ubah dari module.exports = nextConfig;
// Menjadi:
export default nextConfig; // <-- PERUBAHAN DI SINI
