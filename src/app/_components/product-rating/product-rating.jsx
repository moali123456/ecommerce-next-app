"use client";

import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

const myStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#cccccc",
};

export function RatingComponent({
  value,
  onChange,
  readonly = true,
  showLabel = true,
  maxWidth = 90,
  items = 5,
  fractions = 10,
}) {
  return (
    <div className="mt-2">
      <Rating
        style={{ maxWidth }}
        value={value}
        onChange={readonly ? undefined : onChange}
        items={items}
        fractions={fractions}
        readOnly={readonly}
        itemStyles={myStyles}
      />
      {showLabel && (
        <p className="text-xs text-gray-500 mt-1">
          {value.toFixed(1)} out of {items}
        </p>
      )}
    </div>
  );
}
