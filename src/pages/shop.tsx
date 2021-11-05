import { parseISO } from 'date-fns'
import { GetStaticPropsContext } from 'next'
import { useIntl, useTranslations } from 'next-intl'
import PageLayout from '../components/PageLayout'

export default function Shop() {
  const t = useTranslations('Shop')
  const intl = useIntl()
  const lastUpdated = parseISO('2021-01-26T17:04:45.567Z')

  return (
    <PageLayout title={t('title')}>
      <p>
        {t('lastUpdated', {
          lastUpdated,
          lastUpdatedRelative: intl.formatRelativeTime(lastUpdated),
        })}
      </p>
    </PageLayout>
  )
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: {
        ...require(`../../messages/shared/${locale}.json`),
        ...require(`../../messages/shop/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  }
}
