import { getTranslations } from 'next-intl/server'
import { activities } from '@/data/publicContent'

export const metadata = {
  title: 'Home Tour & Activities | Dar El Ghardaïa',
  description: 'Explore guided tours, local experiences, and activities around Ghardaïa.'
}

export default async function HomeTourPage() {
  const t = await getTranslations('HomeTour')

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Experiences' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Explore the Valley' })}
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            {t(
              'description',
              {},
              {
                defaultMessage:
                  'Let us guide you through the rich culture, history, and beauty of the Mzab Valley with authentic local experiences.'
              }
            )}
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container grid gap-10'>
          {activities.map((activity, index) => (
            <div
              key={`${activity.title}-${index}`}
              className='grid overflow-hidden rounded-lg bg-[#ebe1d2] md:grid-cols-2'
            >
              <div className={`aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-center p-8'>
                <h2 className='font-display text-[26px] font-normal text-[#2c1d13]'>
                  {activity.title}
                </h2>
                <p className='body-copy mt-4'>
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
