import Image from "next/image";
import NavLInks from "./NavLInks";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  // console.log(date);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <header className=" relative container mx-auto py-4">
        <div className="flex flex-col justify-center items-center gap-2 sm:flex-row">
          <Image
            className=""
            src="/logo.webp"
            alt=""
            height={50}
            width={50}
          ></Image>
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-2xl  sm:text-3xl text-red-700 font-bold ">
              Bangla News 24
            </h2>
            <p>{date}</p>
          </div>
        </div>
        <UserInfo/>
        <NavLInks />
      </header>
    </div>
  );
};

export default Header;
