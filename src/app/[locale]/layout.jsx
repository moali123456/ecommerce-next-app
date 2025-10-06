import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "../_components/theme-provider/theme-provider";
import LoaderHandler from "../_components/loaders/loader-handler";
import MainFooter from "../_components/main-footer/main-footer";
import MainHeader from "../_components/main-header/main-header";
import "@smastrom/react-rating/style.css";
import "./../globals.css";

// This layout wraps pages for /[locale]
export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure locale is valid
  if (!routing.locales.includes(locale)) {
    notFound(); // 404 if locale is invalid
  }

  // Load translations for this locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {/* Optional: add global font or style className here */}
        {/* loader */}
        <LoaderHandler />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* Main header */}
            <MainHeader locale={locale} />

            {/* <div className="flex gap-3 p-10">
              <Link href="/">
                <Button>Home Page</Button>
              </Link>
              <Link href="/about">
                <Button>About Page</Button>
              </Link>
            </div> */}
            {children}

            {/* footer */}
            <MainFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
