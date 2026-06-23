import { getTranslations } from 'next-intl/server'
import { siteInfo } from '@/data/publicContent'

export const metadata = {
  title: 'Contact | Dar El Ghardaïa',
  description: 'Get in touch with Dar El Ghardaïa guest house in Ghardaïa, Algeria.'
}

export default async function ContactPage() {
  const t = await getTranslations('Contact')

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Get in Touch' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Contact Us' })}
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            {t(
              'description',
              {},
              {
                defaultMessage:
                  'We would love to hear from you. Reach out with any questions or to start planning your stay.'
              }
            )}
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container grid gap-12 md:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <h2 className='font-display text-[22px] font-normal text-[#2c1d13]'>
                {t('visitUs', {}, { defaultMessage: 'Visit Us' })}
              </h2>
              <p className='body-copy mt-2'>{siteInfo.address}</p>
            </div>
            <div>
              <h2 className='font-display text-[22px] font-normal text-[#2c1d13]'>
                {t('callUs', {}, { defaultMessage: 'Call Us' })}
              </h2>
              <p className='body-copy mt-2'>{siteInfo.phone}</p>
            </div>
            <div>
              <h2 className='font-display text-[22px] font-normal text-[#2c1d13]'>
                {t('emailUs', {}, { defaultMessage: 'Email Us' })}
              </h2>
              <p className='body-copy mt-2'>{siteInfo.email}</p>
            </div>
          </div>

          <div className='rounded-lg bg-[#ebe1d2] p-8'>
            <h2 className='font-display text-[22px] font-normal text-[#2c1d13]'>
              {t('sendMessage', {}, { defaultMessage: 'Send a Message' })}
            </h2>
            <form className='mt-6 space-y-4'>
              <div>
                <input
                  type='text'
                  placeholder={t('namePlaceholder', {}, { defaultMessage: 'Your name' })}
                  className='input-line'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder={t('emailPlaceholder', {}, { defaultMessage: 'Your email' })}
                  className='input-line'
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder={t('messagePlaceholder', {}, { defaultMessage: 'Your message' })}
                  className='input-line resize-y'
                />
              </div>
              <button type='submit' className='btn-gold w-full'>
                {t('sendButton', {}, { defaultMessage: 'Send Message' })}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
