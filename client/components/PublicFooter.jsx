'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function PublicFooter() {
  const t = useTranslations('Footer')

  return (
    <footer className='border-t border-[#2c1d13]/10 bg-[#ebe1d2]'>
      <div className='site-container py-14'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <Link
              href='/'
              className='font-display text-[22px] font-semibold leading-none text-[#2c1d13]'
            >
              Dar El Ghardaïa
            </Link>
            <p className='mt-4 max-w-xs text-[14px] font-semibold leading-relaxed text-[#704d36]'>
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className='mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#c67a18]'>
              {t('explore')}
            </h4>
            <div className='flex flex-col gap-3'>
              <Link href='/rooms' className='text-[14px] font-semibold text-[#704d36] transition hover:text-[#c67a18]'>
                {t('rooms', {}, { defaultMessage: 'Rooms' })}
              </Link>
              <Link href='/gallery' className='text-[14px] font-semibold text-[#704d36] transition hover:text-[#c67a18]'>
                {t('gallery', {}, { defaultMessage: 'Gallery' })}
              </Link>
              <Link href='/food' className='text-[14px] font-semibold text-[#704d36] transition hover:text-[#c67a18]'>
                {t('foodLink', {}, { defaultMessage: 'Food' })}
              </Link>
              <Link href='/contact' className='text-[14px] font-semibold text-[#704d36] transition hover:text-[#c67a18]'>
                {t('contactLink', {}, { defaultMessage: 'Contact' })}
              </Link>
            </div>
          </div>

          <div>
            <h4 className='mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#c67a18]'>
              {t('contact')}
            </h4>
            <div className='flex flex-col gap-3 text-[14px] font-semibold text-[#704d36]'>
              <p>{t('address')}</p>
              <p>{t('phone')}</p>
              <p>{t('email')}</p>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-[#2c1d13]/10 pt-6 text-center text-[13px] font-semibold text-[#704d36]'>
          &copy; {new Date().getFullYear()} Dar El Ghardaïa
        </div>
      </div>
    </footer>
  )
}
