// import { useTranslations } from "next-intl";
// import { getProducts } from "@/lib/actions/products/products-actions";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { ProductSectionCard } from "./product-section-card";

// export default async function PopularProductSection() {
//   // Fetch Categories
//   const productsData = await getProducts();

//   return <ProductsContent productsData={productsData} />;
// }

// // Client component to handle translations
// function ProductsContent({ productsData }) {
//   const t = useTranslations();

//   return (
//     <div id="popular-products-section" className="my-10">
//       <div className="mb-1 flex gap-2 justify-between items-end">
//         <h1 className="text-2xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200">
//           {t("popular-products")}
//         </h1>

//         <Link
//           href="/"
//           className="text-[#00B207] font-semibold text-sm inline-flex h-fit gap-1 items-center"
//         >
//           {t("view-all")} <ArrowRight size="16px" />
//         </Link>
//       </div>

//       <div className="grid grid-cols-10 gap-0 mt-5">
//         {productsData && productsData.length > 0 ? (
//           productsData.slice(5, 15).map((product) => (
//             <div
//               key={product?.id}
//               className="col-span-12 md:col-span-4 lg:col-span-2 h-full"
//             >
//               <ProductSectionCard product={product} />
//               {/* <div className="p-4 bg-white dark:bg-transparent h-full border border-gray-100 flex flex-col items-center justify-center gap-4">
//                 <Image
//                   //src={product?.images[0]}
//                   src={product?.thumbnail}
//                   alt="pic"
//                   width={100}
//                   height={100}
//                   className="rounded object-cover"
//                 />
//                 <div className="w-full flex flex-col justify-start">
//                   <p className="text-sm text-gray-700 font-semibold dark:font-normal dark:text-gray-100">
//                     {product?.title}
//                   </p>
//                   <div className="flex gap-1 items-baseline">
//                     <span className="text-gray-900 font-semibold pt-1.5">
//                       ${product?.price}
//                     </span>
//                     <span className="text-gray-400 line-through text-sm">
//                       ${product?.discountPercentage}
//                     </span>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useTranslations, useLocale } from "next-intl";
import { getProducts } from "@/lib/actions/products/products-actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductSectionCard } from "./product-section-card";

export default async function PopularProductSection({ productsData }) {
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
    <div id="popular-products-section" className="my-10">
      <div className="mb-1 flex gap-2 justify-between items-end">
        <h1 className="text-2xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200">
          {t("popular-products")}
        </h1>

        <Link
          href="/"
          className="text-[#00B207] font-semibold text-sm inline-flex h-fit gap-1 items-center"
        >
          {t("view-all")}{" "}
          <ArrowRight size="16px" className={isRTL ? "rotate-180" : ""} />
        </Link>
      </div>

      <div className="grid grid-cols-10 md:grid-cols-12 lg:grid-cols-10 gap-0 mt-5">
        {productsData && productsData.length > 0 ? (
          productsData.slice(5, 15).map((product) => (
            <div
              key={product?.id}
              className="col-span-12 md:col-span-6 lg:col-span-2 h-full"
            >
              <ProductSectionCard product={product} />
              {/* <div className="p-4 bg-white dark:bg-transparent h-full border border-gray-100 flex flex-col items-center justify-center gap-4">
                <Image
                  //src={product?.images[0]}
                  src={product?.thumbnail}
                  alt="pic"
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div className="w-full flex flex-col justify-start">
                  <p className="text-sm text-gray-700 font-semibold dark:font-normal dark:text-gray-100">
                    {product?.title}
                  </p>
                  <div className="flex gap-1 items-baseline">
                    <span className="text-gray-900 font-semibold pt-1.5">
                      ${product?.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product?.discountPercentage}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
}
