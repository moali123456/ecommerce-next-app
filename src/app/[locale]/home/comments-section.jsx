
import { RatingComponent } from "@/app/_components/product-rating/product-rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations, useLocale } from "next-intl";
import Images from "../../../../public/assets/images/images";
import { getComments } from "@/lib/actions/comments/comments-actions";

export default async function CommentsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Fetch Categories
  const productsData = await getComments();

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
              <div className="p-6 bg-white rounded-sm shadow-xs">
                <div className="">
                  <img
                    src={Images.commentIcon}
                    alt="pic"
                    className="mb-4 size-5"
                  />

                  <p className="text-gray-700 text-sm line-clamp-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus necessitatibus possimus id accusamus fugiat qui ex
                    dolorem suscipit asperiores recusandae! Aliquam repudiandae
                    nisi molestiae qui, sit porro distinctio perspiciatis saepe.
                  </p>

                  <div className="flex justify-between items-center gap-4 mt-5">
                    <div className="flex gap-2 items-center">
                      <span className="size-14 bg-gray-200 rounded-full"></span>
                      <div className="flex flex-col">
                        <h1 className="text-gray-900 text-sm font-bold capitalize">
                          user name
                        </h1>
                        <h3 className="text-xs text-gray-400">title</h3>
                      </div>
                    </div>

                    {/* Rating */}
                    <RatingComponent
                      value={4}
                      readonly={true}
                      showLabel={true}
                    />
                  </div>
                </div>
              </div>
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
