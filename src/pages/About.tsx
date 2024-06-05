import { useEffect, useState } from "react";
import Skils from "../components/Skils";

const About = () => {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);

  useEffect(() => {
    // İlk resmin animasyonu için zamanlayıcı
    const timer = setTimeout(() => {
      setFirstImageLoaded(true);
    }, 100); // 1 saniye sonra ilk resim yüklenecek

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (firstImageLoaded) {
      // İkinci resmin animasyonu için zamanlayıcı
      const timer = setTimeout(() => {
        setSecondImageLoaded(true);
      }, 600); // İlk resmin animasyonu bittikten 1 saniye sonra ikinci resim yüklenecek

      return () => clearTimeout(timer);
    }
  }, [firstImageLoaded]);
  return (
    <div className="container max-w-6xl  ">
      <div className="grid justify-center items-center gap-4 gap-y-10 grid-cols-1 md:grid-cols-2">
        <div className={`max-w-md `}>
          <h1
            className={`text-3xl ${
              firstImageLoaded ? "animate-scaleDown" : "opacity-0"
            }`}
          >
            What is Lorem Ipsum?
          </h1>
          <div
            className={` ${
              secondImageLoaded ? "animate-slideIn" : "opacity-0"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className=" mx-auto">
          <img
            className={`max-h-96 rounded-xl ${
              firstImageLoaded ? "animate-scaleDown" : "opacity-0"
            }`}
            src="https://w0.peakpx.com/wallpaper/661/634/HD-wallpaper-istanbul-galatakulesi-manzara-turkey.jpg"
            alt=""
          />
        </div>
      </div>

      <Skils></Skils>
    </div>
  );
};

export default About;
