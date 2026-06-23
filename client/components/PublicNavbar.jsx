'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'

export default function PublicNavbar() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const otherLocale = locale === 'ar' ? 'en' : 'ar'

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/rooms', label: t('rooms') },
    { href: '/booking', label: t('availability') },
    { href: '/gallery', label: t('galleryTours') },
    { href: '/food', label: t('food') },
    { href: '/home-tour', label: t('homeTour') },
    { href: '/contact', label: t('contact') }
  ]

  return (
    <header className='sticky top-0 z-50 border-b border-[#2c1d13]/10 bg-[#f4ecdf]/95 backdrop-blur-md'>
      <nav className='flex h-[66px] items-center justify-between px-[30px]'>
        <Link
          href='/'
          className='font-display text-[22px] font-semibold leading-none text-[#2c1d13]'
        >
          Dar El Ghardaïa
        </Link>

        <div className='hidden items-center gap-7 lg:flex'>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-semibold transition hover:text-[#c67a18] ${
                index === 0 ? 'text-[#2c1d13]' : 'text-[#735f52]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <Link
            href={pathname}
            locale={otherLocale}
            className='text-[13px] font-bold text-[#735f52] transition hover:text-[#c67a18]'
          >
            {t('language')}
          </Link>

          <Link
            href='/booking'
            className='text-[13px] font-bold text-[#c67a18]'
          >
            {locale === 'ar' ? 'احجز' : 'Book'}
          </Link>
        </div>
      </nav>
    </header>
  )
}
