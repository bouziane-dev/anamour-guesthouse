import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import PublicNavbar from '@/components/PublicNavbar'
import PublicFooter from '@/components/PublicFooter'
import { routing } from '@/i18n/routing'

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        lang={locale}
        dir={dir}
        className={locale === 'ar' ? 'font-arabic-site' : ''}
      >
        <PublicNavbar />
        <main>{children}</main>
        <PublicFooter />
      </div>
    </NextIntlClientProvider>
  )
}
