import { useTranslations, useLocale } from "next-intl";
import { getCategories } from "@/lib/actions/categories/categories-actions";
import Images from "../../../../public/assets/images/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CategoriesSection() {
  // Fetch Categories
  const categoriesData = await getCategories();

  return <CategoriesContent categoriesData={categoriesData} />;
}

// Client component to handle translations
function CategoriesContent({ categoriesData }) {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div id="categories-page">
      <div className="mb-1 flex gap-2 justify-between items-end">
        <h1 className="text-2xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200">
          {t("popular-categories")}
        </h1>

        <Link
          href="/"
          className="text-[#00B207] font-semibold text-sm inline-flex h-fit gap-1 items-center"
        >
          {t("view-all")}{" "}
          <ArrowRight
            size="16px"
            className={
              isRTL
                ? "rotate-180"
                : ""
            }
          />
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-5">
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.slice(0, 12).map((category, index) => {
            const imageSrc = Images[category?.slug]; // Dynamic image lookup by slug

            return (
              <div
                key={index}
                className="col-span-12 md:col-span-4 lg:col-span-2 h-full"
              >
                <div className="p-4 bg-white dark:bg-[#292929] h-full hover:shadow-2xl rounded border !border-gray-200 dark:!border-gray-500 flex flex-col items-center justify-center gap-4 hover:!border-[#84D187] transition-all">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={category?.name}
                      width={100}
                      height={100}
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded flex items-center justify-center">
                      <Image
                        src={Images.defaultImage}
                        alt="pic"
                        width={80}
                        height={80}
                      />
                    </div>
                  )}

                  <p className="text-base text-center text-gray-900 font-semibold dark:font-normal dark:text-gray-100">
                    {category?.name}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No categories available.</p>
        )}
      </div>
    </div>
  );
}
