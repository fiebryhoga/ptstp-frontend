const ProcessSection = () => {
  return (
    <section className="py-20 bg-[#373536] text-white px-4 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Bagaimana Kami Bekerja
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-14 text-gray-300">
          Kami menjalankan proses kerja yang sistematis dan terukur, mulai dari
          konsultasi hingga pelaporan akhir, memastikan setiap proyek ditangani
          dengan profesionalisme tinggi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              number: "01",
              title: "Konsultasi Awal",
              desc: "Kami mendengarkan kebutuhan Anda secara detail untuk menyusun solusi terbaik.",
              color: "bg-[#D94A38]",
            },
            {
              number: "02",
              title: "Perencanaan Logistik",
              desc: "Menentukan rute, jadwal, dan metode pengangkutan paling efisien dan aman.",
              color: "bg-[#FFC107]",
            },
            {
              number: "03",
              title: "Eksekusi Lapangan",
              desc: "Pengangkutan dilakukan sesuai jadwal, dipantau langsung oleh tim kami.",
              color: "bg-[#109626]",
            },
            {
              number: "04",
              title: "Evaluasi & Laporan",
              desc: "Memberikan laporan pelaksanaan dan evaluasi untuk perbaikan berkelanjutan.",
              color: "bg-[#5C4033]",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-white text-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 text-left"
            >
              <div
                className={`absolute -top-6 left-6 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg ${step.color}`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
