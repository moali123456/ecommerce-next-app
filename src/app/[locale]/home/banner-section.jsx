import { useTranslations, useLocale } from "next-intl";

export default function BannerSection() {
  const t = useTranslations();

  return (
    <div className="container_bx py-8 bg-white">
      <div className="p-12 bg-[#1e211f] rounded-lg flex justify-between">
        <div className=""></div>

        <div className="">
          <h3 className="text-white uppercase">{t("best-sale")}</h3>

          <h1 className="text-4xl mt-4 font-bold">
            <span className="text-[#FF8A00]">37%</span>{" "}
            <span className="text-white uppercase">OFF</span>
          </h1>

          <p className="text-gray-300 font-light max-w-xs text-sm mt-3">
            {t("best-sale-text")}
          </p>
        </div>
      </div>
    </div>
  );
}
