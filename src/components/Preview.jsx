
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Preview({ children }) {
  return (
    <Carousel
        autoPlay={true}
        showArrows={false}
        interval={"2500"}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={false}
        showIndicators={false}
        thumbWidth={"19.6%"}
        showThumbs="false"
      >
        {children}
      </Carousel>
  )
}

export default Preview