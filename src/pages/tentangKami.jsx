import Layout from './Layout';
import HeroTentangKami from "../components/tentang-kami/HeroTentangKami";
import ProfilPerusahaan from "../components/tentang-kami/ProfilPerusahaan";
import VisiMisi from "../components/tentang-kami/VisiMisi";
import KeunggulanKami from "../components/tentang-kami/KeunggulanKami";
import CTASectionTentangKami from "../components/tentang-kami/CTASectionTentangKami";

export default function TentangKami() {
  return (
    <Layout>
      <HeroTentangKami />
      <ProfilPerusahaan />
      <VisiMisi />
      <KeunggulanKami />
      <CTASectionTentangKami />
    </Layout>
  );
}