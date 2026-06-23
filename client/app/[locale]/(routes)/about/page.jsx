import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export const metadata = {
  title: 'About | Dar El Ghardaïa',
  description:
    'Learn about Dar El Ghardaïa, an authentic guest house in the Mzab Valley of Ghardaïa, Algeria.'
}

export default async function AboutPage() {
  const t = await getTranslations('About')

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Our Story' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Dar El Ghardaïa' })}
          </h1>
        </div>
      </section>

      <section className='py-[78px]'>
        <div className='site-container grid gap-12 md:grid-cols-2'>
          <div>
            <h2 className='font-display text-[28px] font-normal text-[#2c1d13]'>
              {t('welcomeTitle', {}, { defaultMessage: 'Welcome to our home' })}
            </h2>
            <p className='body-copy mt-5'>
              {t(
                'welcomeText',
                {},
                {
                  defaultMessage:
                    'Nestled in the heart of the Mzab Valley, Dar El Ghardaïa is a traditional guest house that offers a genuine Saharan experience. Our home is built with the timeless architecture of the region, designed to stay cool in the summer and warm in the winter, just as our ancestors intended.'
                }
              )}
            </p>
            <p className='body-copy mt-4'>
              {t(
                'welcomeText2',
                {},
                {
                  defaultMessage:
                    'We welcome travelers from around the world to experience the warmth of southern Algerian hospitality, explore the UNESCO heritage sites of the valley, and taste the rich flavors of local cuisine.'
                }
              )}
            </p>
          </div>
          <div className='space-y-6'>
            <div className='rounded-lg bg-[#ebe1d2] p-6'>
              <h3 className='font-display text-[20px] font-normal text-[#2c1d13]'>
                {t('missionTitle', {}, { defaultMessage: 'Our Mission' })}
              </h3>
              <p className='mt-2 text-[14px] font-semibold leading-relaxed text-[#704d36]'>
                {t(
                  'missionText',
                  {},
                  {
                    defaultMessage:
                      'To offer a peaceful, authentic stay where guests can disconnect, explore, and feel the genuine rhythm of life in the Mzab Valley.'
                  }
                )}
              </p>
            </div>
            <div className='rounded-lg bg-[#ebe1d2] p-6'>
              <h3 className='font-display text-[20px] font-normal text-[#2c1d13]'>
                {t('valuesTitle', {}, { defaultMessage: 'Our Values' })}
              </h3>
              <p className='mt-2 text-[14px] font-semibold leading-relaxed text-[#704d36]'>
                {t(
                  'valuesText',
                  {},
                  {
                    defaultMessage:
                      'Hospitality, tradition, sustainability, and a deep respect for the cultural heritage of the Mzab Valley.'
                  }
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#ebe1d2] py-[72px] text-center'>
        <div className='site-container'>
          <p className='body-copy max-w-2xl mx-auto'>
            {t(
              'closing',
              {},
              {
                defaultMessage:
                  'We look forward to welcoming you and sharing the golden light of the Sahara.'
              }
            )}
          </p>
          <Link href='/rooms' className='btn-gold mt-8'>
            {t('viewRooms', {}, { defaultMessage: 'View Our Rooms' })}
          </Link>
        </div>
      </section>
    </div>
  )
}
