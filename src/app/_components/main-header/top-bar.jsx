import React from "react";
import { MapPinIcon } from "@/components/ui/MapPinIcon";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function TopBar() {
  return <PageContent />;
}

// Client component to handle translations
function PageContent() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container_bx py-2 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <MapPinIcon className="size-[15px] text-gray-600" />
          <span className="text-xs text-gray-600">{t("store-location")}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <PhoneIcon className="size-[15px] text-gray-600" />
          <span className="text-xs text-gray-600">02123456789</span>
          {/* <span className="text-gray-600">|</span>
          <Link href="/" className="text-gray-600 text-xs">
            {t("login")}
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/" className="text-gray-600 text-xs">
            {t("signup")}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
