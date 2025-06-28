import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-4">
      {" "}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Siap Membantu Kebutuhan Transportasi Anda
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut,
          permintaan penawaran, atau diskusi proyek. Tim kami siap melayani
          Anda.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <p className="text-xl flex items-center gap-2">
            <i className="fas fa-phone-alt text-[#FFC107]"></i>{" "}
            <span>Telepon: +62 812-3456-7890</span> 
          </p>
          <p className="text-xl flex items-center gap-2">
            <i className="fas fa-envelope text-[#FFC107]"></i>{" "}
            <span>Email: info@siwalantehnikperkasa.com</span>{" "}
          </p>
        </div>
        <Link
          href="https://wa.me/6285730979537"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FFC107] text-gray-900 px-10 py-4 rounded-full text-xl font-semibold hover:bg-yellow-500 transition duration-300 transform hover:scale-105" // Kuning untuk latar belakang, teks hitam, hover kuning lebih gelap
        >
          <i className="fab fa-whatsapp mr-2"></i> Hubungi Kami Via WhatsApp
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
