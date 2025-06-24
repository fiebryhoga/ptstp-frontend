// pages/layanan.js (File utama halaman Layanan)
import Layout from "./layout"; // Pastikan path ke Layout Anda benar
import HeroLayanan from "../components/layanan/HeroLayanan";
import DetailLayanan from "../components/layanan/DetailLayanan";
import ProcessSection from "../components/layanan/ProcessSection";
import CTASectionLayanan from "../components/layanan/CTASectionLayanan";

export default function Layanan() {
  return (
    <Layout>
      <HeroLayanan />
      <DetailLayanan />
      <ProcessSection />
      <CTASectionLayanan />
    </Layout>
  );
}
