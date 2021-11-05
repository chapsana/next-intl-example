import { parseISO } from 'date-fns'
import { GetStaticPropsContext } from 'next'
import { useTranslations, useIntl } from 'next-intl'
import { useRouter } from 'next/router'
import Code from '../components/Code'
import PageLayout from '../components/PageLayout'

export default function Index() {
  const t = useTranslations('Index')
  const intl = useIntl()
  const dateTime = parseISO('2020-11-20T10:36:01.516Z')
  const now = parseISO('2020-11-25T10:36:01.516Z')

  const { locale } = useRouter()

  return (
    <PageLayout title={t('title')}>
      <>
        <br />
        {t('static')}
        <br />
        {t('interpolation', { name: 'Jane' })}
        <br />
        {t('plural', { numMessages: 3 })}
        <br />
        {t('selectordinal', { year: 11 })}
        <br />

        {intl.formatNumber(4999, { style: 'currency', currency: 'TZS' })}
        <br />
        {intl.formatDateTime(dateTime, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}

        <br />
        {intl.formatDateTime(dateTime, { hour: 'numeric', minute: 'numeric' })}
        <br />
        {intl.formatRelativeTime(dateTime, now)}
        <br />
        {t('ordered', { orderDate: parseISO('2020-11-20T10:36:01.516Z') })}
        <br />
        {t('latitude', { latitude: 47.414329182 })}
        <br />
        {t(
          'price',
          { price: 32000.99 },
          {
            number: {
              currency: {
                style: 'currency',
                currency: 'USD',
              },
            },
          }
        )}
        <br />
        <a href={t('attributeUrl')}>Link</a>
        <br />
        {t.rich('richText', {
          important: (children) => <b>{children}</b>,
          very: (children) => <i>{children}</i>,
        })}

        <br />
        <br />
        {t('percent', { value: 18 / 100 })}
        <br />
        {t('percent', { value: 60 / 100 })}
        <br />
        <br />
        {t.rich('description', {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
        <br />
        <div dangerouslySetInnerHTML={{ __html: t.raw('content') }} />
        <br />
        <br />
      </>
    </PageLayout>
  )
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: {
        ...require(`../../messages/shared/${locale}.json`),
        ...require(`../../messages/index/${locale}.json`),
      },
    },
  }
}
