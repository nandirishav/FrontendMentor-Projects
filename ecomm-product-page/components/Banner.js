import Image from "next/image";
import ImageThumbnail from "../assets/images/image-product-1.jpg";

const Banner = () => {
  return (
    <div className="relative h-[320px] sm:h-[320px] md:h-[420px] lg:h-[520px] w-full">
      <Image
        className="lg:rounded-md"
        src={ImageThumbnail}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
