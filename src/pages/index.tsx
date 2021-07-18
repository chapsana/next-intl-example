import { parseISO } from "date-fns";
import { GetStaticPropsContext } from "next";
import { useTranslations, useIntl } from "next-intl";
import { useRouter } from "next/router";
import Code from "../components/Code";
import PageLayout from "../components/PageLayout";

export default function Index() {
  const t = useTranslations("Index");
  const intl = useIntl();
  const dateTime = parseISO("2020-11-20T10:36:01.516Z");
  // const dateTime = parseISO('2020-11-20T10:36:01.516Z');
  const now = parseISO("2020-11-25T10:36:01.516Z");

  const { locale } = useRouter();

  return (
    <PageLayout title={t("title")}>
      <>
        {t("description", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
        <br />
        <br />
        {t("static")}
        <br />
        {t("interpolation", { name: "Jane" })}
        <br />
        {t("plural", { numMessages: 3 })}
        <br />
        {t("selectordinal", { year: 11 })}
        <br />
        {t("selectLang", { gender: "male" })}
        <br />
        {t("asd", { taxableArea: "yes" })}
        <br />
        {intl.formatNumber(4999, { style: "currency", currency: "TZS" })}
        <br />
        {intl.formatDateTime(dateTime, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}

        <br />
        {intl.formatDateTime(dateTime, { hour: "numeric", minute: "numeric" })}
        <br />
        {intl.formatRelativeTime(dateTime, now)}
        <br />
        {t("ordered", { orderDate: parseISO("2020-11-20T10:36:01.516Z") })}
        <br />
        {t("latitude", { latitude: 47.414329182 })}
        <br />
        {t(
          "price",
          { price: 32000.99 },
          {
            number: {
              currency: {
                style: "currency",
                currency: "EUR",
              },
            },
          }
        )}
        <br />
      </>
    </PageLayout>
  );
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: {
        ...require(`../../messages/shared/${locale}.json`),
        ...require(`../../messages/index/${locale}.json`),
      },
    },
  };
}
