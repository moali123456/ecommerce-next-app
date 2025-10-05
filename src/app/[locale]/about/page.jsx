// import { useTranslations } from "next-intl";
// import { getCategories } from "@/lib/actions/categories/categories-actions";

// export default async function AboutPage() {
//   // Fetch Categories
//   const categoriesData = await getCategories();

//   return <CategoriesPageContent categoriesData={categoriesData} />;
// }

// // Client component to handle translations
// function CategoriesPageContent({ categoriesData }) {
//   const t = useTranslations("AboutPage");

//   return (
//     <div id="categories-page">
//       <div className="mb-8">
//         <h1 className="text-3xl font-medium text-[#4ca161]">{t("title")}</h1>
//       </div>

//       {/* Categories List */}
//       <div className="grid grid-cols-1 gap-4 mt-5">
//         {categoriesData && categoriesData.length > 0 ? (
//           categoriesData.map((category, index) => (
//             <div key={index} className="p-4 bg-white dark:bg-transparent shadow rounded border">
//               <p className="text-lg font-semibold dark:font-normal dark:text-gray-100">
//                 {category.name}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No categories available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useTranslations } from "next-intl";
import { getCategories } from "@/lib/actions/categories/categories-actions";
import Images from "../../../../public/assets/images/images";
import Image from "next/image";

export default async function AboutPage() {
  // Fetch Categories
  const categoriesData = await getCategories();

  return <CategoriesPageContent categoriesData={categoriesData} />;
}

// Client component to handle translations
function CategoriesPageContent({ categoriesData }) {
  const t = useTranslations("AboutPage");

  // return (
  //   <div id="categories-page">
  //     <div className="mb-8">
  //       <h1 className="text-3xl font-medium text-[#4ca161]">{t("title")}</h1>
  //     </div>

  //     {/* Categories List */}
  //     <div className="grid grid-cols-1 gap-4 mt-5">
  //       {categoriesData && categoriesData.length > 0 ? (
  //         categoriesData.map((category, index) => (
  //           <div key={index} className="p-4 bg-white dark:bg-transparent shadow rounded border">
  //             <p className="text-lg font-semibold dark:font-normal dark:text-gray-100">
  //               {category.name}
  //             </p>
  //           </div>
  //         ))
  //       ) : (
  //         <p className="text-gray-500">No categories available.</p>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div id="categories-page">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-[#4ca161]">{t("title")}</h1>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-5">
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((category, index) => {
            const imageSrc = Images[category?.slug]; // Dynamic image lookup by slug

            return (
              <div
                key={index}
                className="col-span-12 md:col-span-4 lg:col-span-3 h-full"
              >
                <div className="p-4 bg-white dark:bg-transparent h-full rounded border flex flex-col items-center justify-center gap-4">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={category?.name}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded flex items-center justify-center">
                      <Image src={Images.defaultImage} alt="pic" width={80} height={80} />
                    </div>
                  )}

                  <p className="text-lg font-semibold dark:font-normal dark:text-gray-100">
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

// "use client";

// import { useTranslations } from "next-intl";
// import { useEffect, useState } from "react";

// export default function AboutPage() {
//   const t = useTranslations("AboutPage");
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const response = await fetch(
//           "https://dummyjson.com/products/categories"
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch categories: ${response.status}`);
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     }

//     fetchCategories(); // runs only once on mount
//   }, []);

//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//           gap: "1rem",
//           marginTop: "2rem",
//         }}
//       >
//         {categories.map((category) => (
//           <div
//             key={category.slug}
//             style={{
//               border: "1px solid #e0e0e0",
//               borderRadius: "8px",
//               padding: "1rem",
//               textAlign: "center",
//             }}
//           >
//             <h3>{category.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
