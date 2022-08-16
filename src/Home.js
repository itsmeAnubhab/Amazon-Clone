import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="mx-auto ">
      <div className=" w-full -z-[1] -mb-[300px] gradient-mask-b-40">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/SYED/Flight_PC_Hero_3000x1200_April._CB629259728_.jpg"
          alt="background image"
          className=""
        ></img>
      </div>

      <div className="flex z-[1] mx-[5px]">
        <Product
          title="India Today English Jan 03 , 2022 (Anniversary Special)"
          image={
            "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
          } price={75} rating={5}
        />
        <Product
          title="India Today English Jan 03 , 2022 (Anniversary Special)"
          image={
            "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
          } price={75} rating={5}
        />
        <Product
          title="India Today English Jan 03 , 2022 (Anniversary Special)"
          image={
            "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
          } price={75} rating={5}
        />

        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>

      <div className="flex z-[1] mx-[5px]">
      <Product
          title="India Today English Jan 03 , 2022 (Anniversary Special)"
          image={
            "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
          } price={75} rating={5}
        /><Product
          title="India Today English Jan 03 , 2022 (Anniversary Special)"
          image={
            "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
          } price={75} rating={5}
        />
        {/* Product */}
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>
    </div>
  );
}

export default Home;
