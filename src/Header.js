import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#131921] text-white flex items-center sticky top-0 h-[60px] z-[2]">
      <Link to="/">
        <img
          src="\amazon.png"
          alt="logo"
          width={100}
          height={50}
          className="mx-[20px]"
        ></img>
      </Link>

      <div className="min-w-[55%] md:auto flex flex-1 px-4 items-center ">
        <input
          className="w-full  h-[38px] md:auto rounded-bl-md rounded-tl-md  "
          type="text"
        />

        <AiOutlineSearch className=" bg-orange-300 text-[#131921] rounded-br-md rounded-tr-md p-[5px] w-[45px] h-[38px]" />
      </div>

      <div className="flex justify-end px-7 desktop:hidden">
        <GiHamburgerMenu className="text-2xl cursor-pointer " />
      </div>

      <div className="hidden desktop:flex ">
        <div className="flex flex-col mx-[10px] min-w-[70px] ">
          <span className="text-xs">Hello, Guest</span>
          <span className="text-sm font-bold">Sign In</span>
          {/* signin */}
        </div>
        <div className="flex flex-col mx-[10px] min-w-[70px]">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
          {/* returns and orders */}
        </div>

        <div className="flex flex-col mx-[10px] min-w-[70px]">
          <span className="text-xs">Your</span>
          <span className="text-sm font-bold">Prime</span>
          {/* prime */}
        </div>
        <Link to="/checkout">
          <div className="flex items-center mx-[10px]">
            <AiOutlineShoppingCart className="text-3xl" />
            <span className="mx-[10px] font-bold">0</span>
            {/* cart */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
