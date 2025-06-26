import CardLayanan from "@/components/common/CardLayanan";

const DetailLayanan = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#373536] mb-12">
          Layanan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardLayanan
            image="/assets/image/layanan1.jpeg"
            alt="Jasa Angkutan Batu Kapur"
            title="Jasa Angkutan Batu Kapur"
            description="Pengangkutan batu kapur dari tambang ke pabrik, proyek konstruksi, hingga permintaan khusus material pendukung lainnya."
          />
          <CardLayanan
            image="/assets/image/layanan2.jpeg"
            alt="Distribusi Batu Kapur"
            title="Distribusi Proyek Konstruksi"
            description="Distribusi batu kapur yang efisien dan tepat waktu untuk proyek jalan, gedung, dan infrastruktur lainnya."
          />
          <CardLayanan
            image="/assets/image/layanan3.jpeg"
            alt="Angkutan Material Pendukung"
            title="Angkutan Material Pendukung"
            description="Kami melayani pengangkutan material selain kapur sesuai kebutuhan logistik industri dan proyek Anda."
          />
          <CardLayanan
            image="/assets/image/jual-batu.jpeg"
            alt="Jual Beli Batu Kapur"
            title="Jual Beli Batu Kapur"
            description="Kami menyediakan batu kapur berkualitas tinggi untuk industri semen, pembangunan, dan pengolahan dolomit."
          />
          <CardLayanan
            image="/assets/image/grosok.jpeg"
            alt="Grosok / Pedel Batu Kapur"
            title="Grosok / Pedel Batu Kapur"
            description="Batu kapur berukuran kecil untuk urugan, pemadatan, dan lapisan dasar proyek konstruksi Anda."
          />
          <CardLayanan
            image="/assets/image/kontrak.jpeg"
            alt="Sistem Kontrak Fleksibel"
            title="Sistem Kontrak Fleksibel"
            description="Layanan angkutan bisa harian, borongan, atau kontrak jangka panjang sesuai kebutuhan proyek Anda."
          />
        </div>
      </div>
    </section>
  );
};

export default DetailLayanan;
