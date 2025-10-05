import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Images from "../../../../public/assets/images/images";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function DealsSection({ productsData }) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="pt-2 pb-10">
      {/* <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Aceternity
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div> */}

      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 h-full">
          <div className="bg-[#3f83bc] p-5 rounded-md relative min-h-[450px] w-full">
            <h3 className="text-white uppercase text-center font-medium text-xs pt-2">
              Best Deals
            </h3>
            <h1 className="text-white capitalize text-center font-medium text-2xl pt-3">
              Sale of the Month
            </h1>

            <div className="flex justify-center mt-5">
              <Link href="/">
                <Button className="text-[#00b207] bg-white rounded-full cursor-pointer font-semibold text-sm">
                  Shop Now{" "}
                  <MoveRight
                    size="16px"
                    className={isRTL ? "rotate-180" : ""}
                  />
                </Button>
              </Link>
            </div>

            <img
              //src={Images.fragrancesImage1}
              src={Images.furnitureImage2}
              alt="car"
              className="w-full h-60 absolute bottom-0 start-0 rounded-b-md object-cover object-top"
            />
          </div>
        </div>

        {/*  */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 h-full">
          <div className="bg-black p-5 rounded-md relative min-h-[450px]">
            <h3 className="text-white uppercase text-center font-medium text-xs pt-2">
              Best Deals
            </h3>
            <h1 className="text-white capitalize text-center font-medium text-2xl pt-3">
              Sale of the Month
            </h1>

            <div className="mt-2">
              <div className="w-full h-20 relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-50 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-50 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-[60%] ms-[20%] h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <Link href="/">
                <Button className="text-[#00b207] bg-white rounded-full cursor-pointer font-semibold text-sm">
                  Shop Now{" "}
                  <MoveRight
                    size="16px"
                    className={isRTL ? "rotate-180" : ""}
                  />
                </Button>
              </Link>
            </div>

            <img
              //src={Images.furnitureImage2}
              src={Images.fragrancesImage1}
              alt="car"
              className="w-full h-60 absolute bottom-0 start-0 rounded-b-md object-cover object-top"
            />
          </div>
        </div>

        {/*  */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 h-full">
          <div className="bg-[#fac827] p-5 rounded-md relative min-h-[450px]">
            <h3 className="text-gray-900 uppercase text-center font-medium text-xs pt-2">
              Best Deals
            </h3>
            <h1 className="text-gray-900 capitalize text-center !font-extrabold text-2xl pt-3">
              Sale of the Month
            </h1>

            <div className="flex justify-center mt-5">
              <Link href="/">
                <Button className="text-[#00b207] bg-white rounded-full cursor-pointer font-semibold text-sm">
                  Shop Now{" "}
                  <MoveRight
                    size="16px"
                    className={isRTL ? "rotate-180" : ""}
                  />
                </Button>
              </Link>
            </div>

            <img
              src={Images.carImage1}
              alt="car"
              className="w-full h-60 absolute bottom-0 start-0 rounded-b-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
