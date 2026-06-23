import { getTranslations } from 'next-intl/server'
import { galleryImages } from '@/data/publicContent'

export const metadata = {
  title: 'Gallery | Dar El Ghardaïa',
  description: 'Explore our gallery of rooms, courtyard, food, and local experiences at Dar El Ghardaïa.'
}

export default async function GalleryPage() {
  const t = await getTranslations('Gallery')

  const categories = [...new Set(galleryImages.map(img => img.category))]

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Gallery & Tours' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Discover the Atmosphere' })}
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            {t(
              'description',
              {},
              {
                defaultMessage:
                  'Browse through our collection of images capturing the spirit of Dar El Ghardaïa.'
              }
            )}
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container'>
          {categories.map(category => (
            <div key={category} className='mb-14'>
              <h2 className='font-display text-[26px] font-normal text-[#2c1d13] mb-6'>
                {category}
              </h2>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {galleryImages
                  .filter(img => img.category === category)
                  .map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className='overflow-hidden rounded-lg bg-[#ebe1d2] shadow-sm'
                    >
                      <div className='aspect-[4/3] overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='h-full w-full object-cover transition hover:scale-105'
                        />
                      </div>
                      <div className='p-4'>
                        <h3 className='text-[15px] font-bold text-[#2c1d13]'>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
