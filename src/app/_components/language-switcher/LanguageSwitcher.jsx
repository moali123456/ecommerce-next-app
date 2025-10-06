// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useTransition } from "react";
// import Images from "../../../../public/assets/images/images";
// import Image from "next/image";

// const LanguageSwitcher = ({ currentLocale }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isPending, startTransition] = useTransition();

//   // Determine the new locale and icon based on currentLocale
//   const newLocale = currentLocale === "ar" ? "en" : "ar";
//   const icon = currentLocale === "ar" ? Images.enIcon : Images.arIcon;

//   const handleSwitch = () => {
//     const segments = pathname.split("/");
//     segments[1] = newLocale; // Replace the locale part
//     const newPath = segments.join("/");

//     startTransition(() => {
//       router.push(newPath);
//     });
//   };

//   return (
//     <button
//       onClick={handleSwitch}
//       disabled={isPending}
//       className="cursor-pointer rounded"
//     >
//       <Image src={icon} alt="Switch Language Icon" width={40} height={40} className="!h-auto" />
//     </button>
//   );
// };

// export default LanguageSwitcher;

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Images from "../../../../public/assets/images/images";
import Image from "next/image";

const LanguageSwitcher = ({ currentLocale, className, imgStyle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Determine the new locale and icon based on currentLocale
  const newLocale = currentLocale === "ar" ? "en" : "ar";
  const icon = currentLocale === "ar" ? Images.enIcon : Images.arIcon;

  const handleSwitch = () => {
    // Get the current path without the locale
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

    // If we're on the root path, just use the new locale
    // Otherwise, use the current path with new locale
    const newPath =
      pathWithoutLocale === "/"
        ? `/${newLocale}`
        : `/${newLocale}${pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      //className="cursor-pointer rounded"
      className={className}
    >
      <img
        src={icon}
        alt="Switch Language Icon"
        //width={40}
        //height={40}
        //className="!h-auto"
        className={imgStyle}
      />
    </button>
  );
};

export default LanguageSwitcher;
