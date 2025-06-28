import Image from "next/image";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/image/hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto flex flex-col items-center justify-center h-full text-white text-center z-10 relative px-4 gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fade-in-down">
          Selamat Datang di PT. Siwalan Tehnik Perkasa
        </h1>

        <p className="text-xl md:text-2xl font-semibold animate-fade-in-up">
          Andal Menggerakkan Tambang Sejak Tahun 2000
        </p>

        <p className="text-base md:text-xl max-w-3xl animate-fade-in-up delay-200">
          Perusahaan Jasa Angkutan Batu Kapur yang telah beroperasi sejak tahun
          2000, melayani kebutuhan transportasi tambang dengan armada handal dan
          tim profesional.
        </p>

        <Button
          href="/layanan"
          className="bg-[#D94A38] hover:bg-[#5C4033] text-white mt-4 animate-fade-in-up delay-400"
        >
          Pelajari Layanan Kami
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
