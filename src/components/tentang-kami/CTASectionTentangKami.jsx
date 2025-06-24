import Link from "next/link";

const CTASectionTentangKami = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Mari Bergabung dengan Perjalanan Kami
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Apakah Anda memiliki pertanyaan lebih lanjut atau ingin tahu bagaimana
          kami bisa menjadi mitra transportasi Anda? Tim kami siap membantu.
        </p>
        <Link
          href="https://wa.me/6285730979537"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFC107] text-gray-900 px-10 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          <i className="fab fa-whatsapp mr-2"></i> Hubungi Kami Sekarang
        </Link>
      </div>
    </section>
  );
};

export default CTASectionTentangKami;
