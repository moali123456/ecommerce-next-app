import React from "react";
import { ShoppingBagIcon } from "@/components/ui/ShoppingBagIcon";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { routing } from "@/i18n/routing";
import { ThemeToggle } from "../theme-toggle/theme-toggle";

export default function LogoBar({ locale }) {
  return (
    <div className="container_bx py-7">
      <div className="flex gap-4 items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <ShoppingBagIcon className="text-[#00B207]" />
          <span className="text-gray-800 font-semibold text-2xl">
            Shopping Store
          </span>
        </div>

        <div className="flex gap-2.5 items-center">
          {/* theme toggle */}
          <ThemeToggle />

          {/* language switcher */}
          <LanguageSwitcher
            currentLocale={locale}
            availableLocales={routing.locales}
            className="cursor-pointer size-[35px]"
            imgStyle="h-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
