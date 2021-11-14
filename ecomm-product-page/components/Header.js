import Image from "next/image";
import MenuIcon from "../assets/images/icon-menu.svg";
import CartIcon from "../assets/images/icon-cart.svg";
import AvatarIcon from "../assets/images/image-avatar.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white shadow-md p-2 md:px-5 lg:px-15 font-Kumbh">
      <div className="relative flex h-10 cursor-pointer my-auto mx-5">
        <Image
          src={MenuIcon}
          layout="fill"
          objectFit="scale-down"
          objectPosition="left"
        />
        <h1 className="font-sans text-2xl font-bold pl-8">sneakers</h1>
      </div>
      <div className="relative flex items-center mr-2 px-14">
        <Image src={CartIcon} />
        <Image
          className="h-5 w-10"
          src={AvatarIcon}
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </div>
    </header>
  );
};

export default Header;
