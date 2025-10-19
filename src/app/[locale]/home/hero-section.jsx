import React from "react";
import Images from "../../../../public/assets/images/images";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="pt-4 pb-5">
      <div className="grid grid-flow-col grid-cols-10 grid-rows-4 gap-4 h-[460px]">
        <div className="col-span-6 row-span-4 flex flex-col justify-center items-start p-8 bg-gradient-to-r from-[#0d491c] to-[#32c05c] dark:bg-[#191e29] dark:bg-none dark:from-transparent dark:to-transparent rounded-lg h-full">
          <h3 className="text-white text-xl font-semibold mb-5">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit Totam ipsum.
          </h3>

          <div className="border-s border-gray-300 py-0 px-3 mb-6">
            <div className="flex gap-2 items-center mb-1.5">
              <span className="text-white">Sale up to</span>
              <span className="text-white text-sm py-1.5 px-2 leading-none bg-[#FF8A00] rounded-sm">
                30% OFF
              </span>
            </div>
            <div className="text-white font-extralight text-sm">
              Free shipping on all your order.
            </div>
          </div>

          <Link href="/" className="bg-white flex gap-1 text-[#00B207] rounded-full py-2 px-4 text-sm items-center">
            Shop Now <MoveRight className="size-4" />
          </Link>
        </div>
        <div className="col-span-4 row-span-2 p-8 relative bg-gradient-to-t from-[#ebeae8] to-[#f7f6f4] dark:bg-[#191e29] dark:bg-none dark:from-transparent dark:to-transparent rounded-lg h-56">
          <img
            src={Images.carImage2}
            alt="car"
            className="absolute w-56 bottom-0 end-1.5"
          />
          <h1 className="text-gray-900 text-2xl font-bold">Vehicles</h1>
          <p className="text-[#4ca161] pt-2 text-center flex items-center justify-start gap-2 font-semibold">
            Shop Now <MoveRight className="size-4" />
          </p>
        </div>
        <div
          className="col-span-4 row-span-2 flex flex-col items-center justify-center bg-[#032902] rounded-lg h-56"
          style={{
            backgroundImage: `url(${Images.allCatugBg})`,
            backgroundSize: `cover`,
          }}
        >
          <div className="">
            <h1 className="text-white text-xl font-semibold">All Categories</h1>
            <p className="text-[#00B207] pt-5 text-center flex items-center justify-center gap-2">
              Shop Now <ArrowRight className="size-4" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
