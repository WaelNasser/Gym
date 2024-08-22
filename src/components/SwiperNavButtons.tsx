import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperNavButtons = ({
  containerStyle,
  buttonStyle,
  iconStyle,
}: {
  containerStyle: string;
  buttonStyle: string;
  iconStyle: string;
}) => {
    const Swiper = useSwiper();
  return (
    <div>
      <div className={`${containerStyle}`}>
        <button className={`${buttonStyle}`} onClick={() => Swiper.slidePrev()}>
          <PiCaretLeftBold className={`${iconStyle}`} />
        </button>
        <button className={`${buttonStyle}`}>
          <PiCaretRightBold className={`${iconStyle}`} onClick={() => Swiper.slideNext()} />
        </button>
      </div>
    </div>
  );
};

export default SwiperNavButtons