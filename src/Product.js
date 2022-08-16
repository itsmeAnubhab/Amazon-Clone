import React from "react";

function Product({title, image, price, rating}) {
  return (
    <div className="flex flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[400px] min-w-[100px] bg-white z-[1]">
      <img
        src={image}
        className="max-h-[200px] w-full object-contain mb-[15px]"
      ></img>
      <div>
        <p className="">{title}</p>
        <div className="flex">
        {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
        </div>
        <p className="mt-2">
          <small>₹</small>
          <strong className="text-xl">75</strong>
        </p>
      </div>
      <button className="bg-orange-300 rounded-md p-1 text-sm mt-1  ">Add to cart</button>
    </div>
  );
}

export default Product;
