import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations, useLocale } from "next-intl";

export default function CommentsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container_bx bg-[#F2F2F2] py-8">
      <div className="mb-5 flex gap-2 justify-between items-end">
        <h1 className="text-2xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200">
          {t("client-comments")}
        </h1>
      </div>
      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <div className="p-6 bg-white rounded-sm shadow-xs">1</div>
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 border-0">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card> */}
            </div>
          </CarouselItem>

          <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="p-6 bg-white rounded-sm shadow-xs">2</div>
            </div>
          </CarouselItem>

          <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="p-6 bg-white rounded-sm shadow-xs">3</div>
            </div>
          </CarouselItem>

          <CarouselItem key={4} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="p-6 bg-white rounded-sm shadow-xs">4</div>
            </div>
          </CarouselItem>

          <CarouselItem key={5} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="p-6 bg-white rounded-sm shadow-xs">5</div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
