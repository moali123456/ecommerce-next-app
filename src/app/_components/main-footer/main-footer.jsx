import { useTranslations, useLocale } from "next-intl";
import { ShoppingBagIcon } from "@/components/ui/ShoppingBagIcon";
import Link from "next/link";
import Images from "../../../../public/assets/images/images";

export default function MainFooter() {
  return <FooterContent />;
}

// Client component to handle translations
function FooterContent() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container_bx pt-14 pb-8 bg-gray-900">
      <div className="flex flex-wrap justify-between">
        <div className="w-1/4">
          <div className="flex gap-2 items-center mb-3">
            <ShoppingBagIcon className="text-[#00B207]" />
            <span className="text-white font-semibold text-xl">
              Shopping Store
            </span>
          </div>

          <p className="text-gray-500 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            asperiores deserunt reprehenderit, sequi tenetur laborum repellendus
            quae nobis porro amet!
          </p>
        </div>

        <div className="">
          <h1 className="text-white font-medium text-lg mb-2">{t("helps")}</h1>
          <div className="flex flex-col gap-1">
            <Link href="/">
              <span className="text-gray-500 text-sm">Contact</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Faqs</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Terms & Condition</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Privacy Policy</span>
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="text-white font-medium text-lg mb-2">Categories</h1>
          <div className="flex flex-col gap-1">
            <Link href="/">
              <span className="text-gray-500 text-sm">Contact</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Faqs</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Terms & Condition</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Privacy Policy</span>
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="text-white font-medium text-lg mb-2">Keep in touch</h1>
          <div className="flex flex-col gap-1">
            <Link href="/">
              <span className="text-gray-500 text-sm">Contact</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Faqs</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Terms & Condition</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 text-sm">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-gray-800 mt-10 mb-5" />

      <div className="flex gap-4 justify-between">
        <div className="text-gray-500 text-sm">
          Shopping Store © 2025. All Rights Reserved
        </div>

        <div className="flex gap-3">
            <img src={Images.visaIcon} alt="pic" />
            <img src={Images.discoverIcon} alt="pic" />
            <img src={Images.mastercardIcon} alt="pic" />
        </div>
      </div>
    </div>
  );
}
