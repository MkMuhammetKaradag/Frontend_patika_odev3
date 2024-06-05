import React, { useEffect, useState } from "react";
import { skilsDataType } from "./Skils";
import Geticon from "./Geticon";

interface SkilCardProps {
  item: skilsDataType;
  index: number;
}

const SkilCard: React.FC<SkilCardProps> = ({ item, index }) => {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  useEffect(() => {
    // İlk resmin animasyonu için zamanlayıcı
    const timer = setTimeout(() => {
      setFirstImageLoaded(true);
    }, 200 * index); // 1 saniye sonra ilk resim yüklenecek

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-gray-200 text-gray-900  p-4 rounded-lg shadow-md  min-h-72 transition-transform duration-300 hover:scale-105 ${
        firstImageLoaded ? "animate-scaleDownSkilCard" : "opacity-0"
      }`}
    >
      <div className="flex justify-center text-3xl mb-4">
        <Geticon iconName={item.iconName}></Geticon>
      </div>
      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

export default SkilCard;
