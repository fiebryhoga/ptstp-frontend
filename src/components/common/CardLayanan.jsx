// components/common/CardLayanan.jsx
import Image from "next/image";

const CardLayanan = ({ image, alt, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
      <div className="w-full h-80 relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2">
        <h3 className="text-xl font-bold text-[#5C4033] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardLayanan;
