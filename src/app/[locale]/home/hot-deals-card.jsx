"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RatingComponent } from "@/app/_components/product-rating/product-rating";

export function HotDealsCard({ product, imgWidth, imgHeight }) {
  const t = useTranslations();
  const [rating, setRating] = useState(0);

  // Custom rounding function
  const customRound = (value) => {
    if (!value) return 0;
    const decimal = value % 1; // Get decimal part (0.62 from 15.62)
    return decimal > 0.5 ? Math.ceil(value) : Math.floor(value);
  };

  // Calculate original price before discount
  const calculateOriginalPrice = (currentPrice, discountPercentage) => {
    if (!currentPrice || !discountPercentage) return currentPrice;

    // Formula: originalPrice = currentPrice / (1 - discountPercentage/100)
    const originalPrice = currentPrice / (1 - discountPercentage / 100);
    return originalPrice.toFixed(2); // Round to 2 decimal places
  };

  // Calculate average rating from reviews
  useEffect(() => {
    if (product?.reviews && product.reviews.length > 0) {
      const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
      const average = total / product.reviews.length;
      setRating(average);
    } else if (product?.rating) {
      setRating(product.rating);
    }
  }, [product]);

  const originalPrice = calculateOriginalPrice(
    product?.price,
    product?.discountPercentage
  );

  return (
    <div className="p-4 bg-white dark:bg-[#151515] h-full border border-gray-200 flex flex-col items-center justify-center gap-4 relative hover:border-[#84D187] transition-all">
      <Image
        src={product?.thumbnail}
        alt="pic"
        width={imgWidth}
        height={imgHeight}
        className="rounded object-cover"
      />
      <div className="w-full flex flex-col justify-start">
        <p className="text-sm text-gray-700 font-semibold dark:font-normal dark:text-gray-100 line-clamp-1">
          {product?.title}
        </p>

        <div className="flex gap-1 items-baseline">
          <span className="text-gray-900 dark:text-gray-200 font-semibold dark:font-medium pt-1.5">
            ${product?.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${originalPrice}
          </span>
        </div>

        <RatingComponent value={rating} readonly={true} showLabel={true} />
      </div>

      {/* Custom rounded discount percent */}
      <span className="py-1 px-3 rounded bg-[#EA4B48] text-white text-xs absolute top-3 start-3">
        {t("sale")} {customRound(product?.discountPercentage)}%
      </span>
    </div>
  );
}
