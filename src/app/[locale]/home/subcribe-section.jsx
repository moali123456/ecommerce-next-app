import { useTranslations, useLocale } from "next-intl";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { TwitterIcon } from "@/components/ui/TwitterIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { BellRingIcon } from "@/components/ui/BellRingIcon";

export default function SubcribeSection() {
  return <SubcribeContent />;
}

// Client component to handle translations
function SubcribeContent() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container_bx bg-white py-10">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="">
            <BellRingIcon className="text-[#00B207]" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold dark:font-medium text-gray-900 dark:text-gray-200 mb-1.5">
              {t("subcribe-our-newsletter")}
            </h1>
            <div className="whitespace-pre-line text-gray-400 text-sm">
              {t("subcribe-subtext")}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-1/2">
          <InputGroup className="rounded-full">
            <InputGroupInput placeholder={t("your-email-address")} />
            <InputGroupAddon align="inline-end" className="p-0 !mr-0">
              <InputGroupButton className="px-6 h-full cursor-pointer bg-[#00B207] hover:bg-[#008905] text-white hover:!text-white rounded-full">
                {t("subscribe")}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <div className="flex gap-1">
            <FacebookIcon className="size-5 text-gray-700" />
            <TwitterIcon className="size-5 text-gray-700" />
            <InstagramIcon className="size-5 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
