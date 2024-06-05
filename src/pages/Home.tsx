import { useEffect, useState } from "react";

const Home = () => {
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
      <div className="grid gap-4 gap-y-10 grid-cols-1 md:grid-cols-2">
        <div
          className={`max-w-md ${
            firstImageLoaded ? "animate-scaleDown" : "opacity-0"
          }`}
        >
          <h1>What is Lorem Ipsum?</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </div>
        <div className="">
          <img
            className={`max-h-96 rounded-xl ${
              firstImageLoaded ? "animate-scaleDown" : "opacity-0"
            }`}
            src="https://w0.peakpx.com/wallpaper/661/634/HD-wallpaper-istanbul-galatakulesi-manzara-turkey.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
            className={`max-h-96 rounded-xl ${
              secondImageLoaded ? "animate-scaleDown" : "opacity-0"
            }`}
            src="https://w0.peakpx.com/wallpaper/897/625/HD-wallpaper-istanbul-kopru-manzara.jpg"
            alt=""
          />
        </div>
        <div
          className={`max-w-md ${
            secondImageLoaded ? "animate-scaleDown" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl">Where does it come from?</h1>
          <span className="overflow-y-visible ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
