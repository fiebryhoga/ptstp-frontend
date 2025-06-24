import Image from "next/image";

const DetailLayanan = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Detail Layanan Angkutan
        </h2>

        {/* Layanan 1 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8 mb-12 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            <Image
              src="/assets/image/layanan1.jpeg"
              alt="Pengangkutan Batu Kapur"
              width={250}
              height={250}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Pengangkutan Batu Kapur
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kami melayani pengangkutan batu kapur dari lokasi tambang ke
              pabrik atau tempat pengolahan. Layanan ini didukung oleh armada
              truk yang siap mengangkut dalam jumlah besar secara efisien dan
              tepat waktu.
            </p>
          </div>
        </div>

        {/* Layanan 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-gray-50 rounded-lg shadow-lg p-8 mb-12 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            <Image
              src="/assets/image/layanan2.jpeg"
              alt="Distribusi Batu Kapur untuk Proyek Konstruksi"
              width={250}
              height={250}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-right">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Distribusi Batu Kapur untuk Proyek Konstruksi
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kami menyediakan jasa distribusi batu kapur ke berbagai proyek
              konstruksi, baik skala kecil maupun besar. Layanan kami memastikan
              material tiba di lokasi tepat waktu dan dalam kondisi optimal.
            </p>
          </div>
        </div>

        {/* Layanan 3 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg p-8 gap-8">
          <div className="md:w-1/3 flex justify-center items-center">
            <Image
              src="/assets/image/layanan3.jpeg"
              alt="Angkutan Material Pendukung"
              width={250}
              height={250}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Angkutan Material Pendukung Lainnya
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Selain batu kapur, kami juga melayani pengangkutan material
              pendukung lainnya sesuai permintaan. Fleksibilitas armada dan
              penjadwalan memungkinkan kami memenuhi berbagai jenis kebutuhan
              logistik industri Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailLayanan;
