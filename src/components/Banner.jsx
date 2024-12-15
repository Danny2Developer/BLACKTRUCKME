import car from "../assets/images/main.jpeg";
import thumbnaiil from "../assets/images/thumb.png";
import vid from "../assets/images/banner.mp4";
function Banner() {
  return (
    <div className="banner relative w-[100%] sm:w-[80%] md:w-[60%] xl:h-full overflow-hidden">
      <video
        className="w-full h-full object-cover"
        poster={thumbnaiil}
        autoPlay
        src={vid}
        muted
        playsInline
        loop
      ></video>
      <div className="overlay left-0 top-0 bg-black opacity-[50%] md:opacity-[30%] w-full h-full object-cover absolute z-[1]"></div>
    </div>
  );
}

export default Banner;
