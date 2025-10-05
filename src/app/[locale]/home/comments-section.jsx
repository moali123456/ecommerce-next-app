import React from "react";
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
import { RatingComponent } from "@/app/_components/product-rating/product-rating";

export default async function CommentsSection() {
  // Fetch Categories
  const commentsData = await getComments();

  return <CommentsContent commentsData={commentsData} />;
}

// Client component to handle translations
function CommentsContent({ commentsData }) {
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

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {commentsData && commentsData.length > 0 ? (
            commentsData.map((comment) => (
              <CarouselItem
                key={comment?.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div className="p-6 bg-white rounded-sm shadow-xs">
                    <div className="">
                      <img
                        src={Images.commentIcon}
                        alt="pic"
                        className="mb-4 size-5"
                      />

                      <p className="text-gray-700 text-sm line-clamp-4">
                        {comment?.body}
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ducimus necessitatibus possimus id accusamus
                        fugiat qui ex dolorem suscipit asperiores recusandae!
                        Aliquam repudiandae nisi molestiae qui, sit porro
                        distinctio perspiciatis saepe. */}
                      </p>

                      <div className="flex justify-between items-center gap-4 mt-5">
                        <div className="flex gap-2 items-center">
                          <span className="size-14 bg-gray-200 rounded-full"></span>
                          <div className="flex flex-col">
                            <h1 className="text-gray-900 text-sm font-bold capitalize">
                              {comment?.user?.fullName}
                            </h1>
                            <h3 className="text-xs text-gray-400">title</h3>
                          </div>
                        </div>

                        {/* Rating */}
                        <RatingComponent
                          value={comment?.likes}
                          readonly={true}
                          showLabel={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

