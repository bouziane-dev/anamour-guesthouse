import { getTranslations } from 'next-intl/server'
import { foodItems } from '@/data/publicContent'

export const metadata = {
  title: 'Food | Dar El Ghardaïa',
  description: 'Discover local cuisine and homemade meals at Dar El Ghardaïa guest house.'
}

export default async function FoodPage() {
  const t = await getTranslations('Food')

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Local Cuisine' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Taste the Sahara' })}
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            {t(
              'description',
              {},
              {
                defaultMessage:
                  'Every meal at Dar El Ghardaïa is prepared with care using fresh, local ingredients and traditional recipes passed down through generations.'
              }
            )}
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container grid gap-8 md:grid-cols-3'>
          {foodItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className='rounded-lg bg-[#ebe1d2] p-6 text-center'
            >
              <h2 className='font-display text-[24px] font-normal text-[#2c1d13]'>
                {item.title}
              </h2>
              <p className='body-copy mt-4 text-[14px]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-[#ebe1d2] py-[72px] text-center'>
        <div className='site-container'>
          <p className='font-display text-[28px] font-normal text-[#2c1d13]'>
            {t(
              'note',
              {},
              {
                defaultMessage:
                  'All meals are prepared with seasonal ingredients. Please let us know about any dietary requirements.'
              }
            )}
          </p>
        </div>
      </section>
    </div>
  )
}
