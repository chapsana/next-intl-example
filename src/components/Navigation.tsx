import { useTranslations } from "next-intl";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

// const langs = {"en" : "English", "de" : "Deutsch" };
export default function Navigation() {
  const t = useTranslations("Navigation");

  const { locale, locales, route, push } = useRouter();

  const otherLocale = locales?.find((cur) => cur !== locale);
  // console.log(locale, locales, route , otherLocale);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/">
          <a>{t("index")}</a>
        </Link>
        <Link href="/about">
          <a>{t("about")}</a>
        </Link>
      </div>

      <select
        style={{ margin: "0 auto" }}
        onChange={(e) => {
          const newLocale = e.target.value;
          push(route, route, { locale: newLocale });
        }}
      >
        {locales?.map((cur) => {
          return (
            <option key={cur} value={cur}>
              {cur}
            </option>
          );
        })}
      </select>
    </div>
  );
}
