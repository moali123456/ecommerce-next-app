// import { useTranslations } from "next-intl";

// export default function Page() {
//   const t = useTranslations("HomePage");
//   return <h1>{t("title")}</h1>;
// }

import HomePage from "./home/home-page";

export default function Page() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
