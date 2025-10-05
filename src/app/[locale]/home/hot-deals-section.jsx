import { useTranslations, useLocale } from "next-intl";
import { getProducts } from "@/lib/actions/products/products-actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HotDealsCard } from "./hot-deals-card";

export default async function HotDealsSection({ productsData }) {
  // Fetch Categories
  //const productsData = await getProducts();

  return <ProductsContent productsData={productsData} />;
}

// Client component to handle translations
function ProductsContent({ productsData }) {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      id="popular-products-section"
      className="container_bx mt-4 py-10 bg-[#F7F7F7] dark:bg-[#1b1b1b]"
    >
      <div className="mb-5 flex gap-2 justify-between items-end">
        <h1 className="text-2xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200">
          {t("hot-deals")}
        </h1>

        <Link
          href="/"
          className="text-[#00B207] font-semibold text-sm inline-flex h-fit gap-1 items-center"
        >
          {t("view-all")}{" "}
          <ArrowRight size="16px" className={isRTL ? "rotate-180" : ""} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-rows-3 md:grid-rows-4 lg:grid-rows-3 gap-4 md:gap-0 lg:gap-0">
        {/* FIRST ITEM - Responsive spans */}
        {productsData && productsData.length > 0 && (
          <div
            className="
        col-span-1 row-span-1
        md:col-span-1 md:row-span-1
        lg:col-span-2 lg:row-span-2
      "
          >
            <HotDealsCard
              product={productsData[15]}
              imgWidth={250}
              imgHeight={250}
            />
          </div>
        )}

        {/* Remaining items */}
        {productsData && productsData.length > 1 ? (
          productsData.slice(16, 27).map((product) => (
            <div key={product.id} className="bg-white col-span-1 row-span-1">
              <HotDealsCard product={product} imgWidth={100} imgHeight={100} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available.</p>
        )}
      </div>

      {/* <div className="grid grid-cols-5 grid-rows-3 gap-0">
        {productsData && productsData.length > 0 && (
          <div className="col-span-2 row-span-2 md">
            <HotDealsCard
              product={productsData[15]}
              imgWidth={250}
              imgHeight={250}
            />
          </div>
        )}

        {productsData && productsData.length > 1 ? (
          productsData.slice(16, 27).map((product) => (
            <div key={product.id} className="bg-white">
              <HotDealsCard product={product} imgWidth={100} imgHeight={100} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available.</p>
        )}
      </div> */}
    </div>
  );
}
