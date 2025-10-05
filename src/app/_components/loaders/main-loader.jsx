import React from "react";
import Images from "../../../../public/assets/images/images";
import Image from "next/image";

export default function MainLoader() {
  return (
    <div className="loader-spinner-bx">
      <Image src={Images.loaderIcon} alt="loader" width={200} height={200} />
    </div>
  );
}
