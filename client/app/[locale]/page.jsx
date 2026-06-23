import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

const heroImage =
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2200&q=90'

const roomOne =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=90'

const roomTwo =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90'

function WindIcon() {
  return (
    <svg width='34' height='34' viewBox='0 0 24 24' fill='none'>
      <path
        d='M3 8h10a3 3 0 1 0-3-3'
        stroke='#c67a18'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
      <path
        d='M3 12h15a3 3 0 1 1-3 3'
        stroke='#c67a18'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
      <path
        d='M3 16h7'
        stroke='#c67a18'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width='34' height='34' viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='4' stroke='#c67a18' strokeWidth='1.4' />
      <path
        d='M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1'
        stroke='#c67a18'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width='34' height='34' viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z'
        stroke='#c67a18'
        strokeWidth='1.4'
      />
      <circle cx='12' cy='9' r='2.5' stroke='#c67a18' strokeWidth='1.4' />
    </svg>
  )
}

function CupIcon() {
  return (
    <svg width='34' height='34' viewBox='0 0 24 24' fill='none'>
      <path
        d='M6 8h10v7a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8Z'
        stroke='#c67a18'
        strokeWidth='1.4'
      />
      <path d='M16 10h1a3 3 0 0 1 0 6h-1' stroke='#c67a18' strokeWidth='1.4' />
      <path
        d='M8 4v2M12 4v2M16 4v2'
        stroke='#c67a18'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default async function HomePage() {
  const t = await getTranslations('Home')

  const features = [
    {
      icon: <WindIcon />,
      title: t('feature1Title'),
      text: t('feature1Text')
    },
    {
      icon: <SunIcon />,
      title: t('feature2Title'),
      text: t('feature2Text')
    },
    {
      icon: <PinIcon />,
      title: t('feature3Title'),
      text: t('feature3Text')
    },
    {
      icon: <CupIcon />,
      title: t('feature4Title'),
      text: t('feature4Text')
    }
  ]

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='relative min-h-[560px] overflow-hidden md:min-h-[570px]'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className='bg-black/42 absolute inset-0' />

        <div className='relative flex min-h-[560px] items-center justify-center px-6 text-center text-white md:min-h-[570px]'>
          <div className='max-w-[900px]'>
            <h1 className='font-display text-[64px] font-normal leading-[0.95] tracking-[0.02em] md:text-[92px]'>
              {t('heroTitleLine1')}
              <br />
              {t('heroTitleLine2')}
            </h1>

            <p className='mt-9 text-[18px] font-medium uppercase tracking-[0.18em] md:text-[24px]'>
              {t('heroSubtitle')}
            </p>

            <Link href='/booking' className='btn-gold mt-10'>
              {t('checkAvailability')}
            </Link>
          </div>
        </div>
      </section>

      <section className='border-b border-[#2c1d13]/5 bg-[#f4ecdf] py-[78px]'>
        <div className='site-container text-center'>
          <h2 className='font-display text-[34px] font-normal text-[#2c1d13]'>
            {t('welcomeTitle')}
          </h2>

          <p className='mx-auto mt-7 max-w-[760px] text-[17px] font-semibold leading-[1.7] text-[#704d36]'>
            {t('welcomeText')}
          </p>

          <div className='mt-[88px] grid gap-12 md:grid-cols-4'>
            {features.map(feature => (
              <div key={feature.title} className='text-center'>
                <div className='mb-5 flex justify-center'>{feature.icon}</div>
                <h3 className='font-display text-[22px] font-normal text-[#2c1d13]'>
                  {feature.title}
                </h3>
                <p className='mt-3 text-[14px] font-semibold text-[#704d36]'>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#ebe1d2] py-[72px]'>
        <div className='site-container'>
          <div className='mb-9 flex items-center justify-between gap-6'>
            <h2 className='font-display text-[34px] font-normal text-[#2c1d13]'>
              {t('sanctuariesTitle')}
            </h2>

            <Link href='/rooms' className='btn-link-gold'>
              {t('viewAllRooms')} <span>→</span>
            </Link>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            <article>
              <Link href='/rooms/royal-suite' className='block'>
                <img
                  src={roomOne}
                  alt={t('royalSuiteTitle')}
                  className='h-[368px] w-full object-cover'
                />
              </Link>

              <div className='pt-4'>
                <h3 className='font-display text-[26px] font-normal text-[#2c1d13]'>
                  {t('royalSuiteTitle')}
                </h3>
                <p className='mt-2 text-[13px] font-semibold text-[#704d36]'>
                  {t('royalSuiteText')}
                </p>
                <p className='mt-4 text-[13px] font-bold text-[#c67a18]'>
                  {t('royalSuitePrice')}
                </p>
              </div>
            </article>

            <article className='md:pt-[43px]'>
              <Link href='/rooms/traditional-room' className='block'>
                <img
                  src={roomTwo}
                  alt={t('traditionalRoomTitle')}
                  className='h-[368px] w-full object-cover'
                />
              </Link>

              <div className='pt-4'>
                <h3 className='font-display text-[26px] font-normal text-[#2c1d13]'>
                  {t('traditionalRoomTitle')}
                </h3>
                <p className='mt-2 text-[13px] font-semibold text-[#704d36]'>
                  {t('traditionalRoomText')}
                </p>
                <p className='mt-4 text-[13px] font-bold text-[#c67a18]'>
                  {t('traditionalRoomPrice')}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className='bg-[#f4ecdf] py-[78px]'>
        <div className='site-container grid gap-10 md:grid-cols-3'>
          <div>
            <p className='eyebrow'>{t('galleryEyebrow')}</p>
            <h2 className='font-display mt-3 text-[34px] font-normal leading-tight'>
              {t('galleryTitle')}
            </h2>
          </div>

          <div>
            <p className='body-copy'>{t('galleryText')}</p>
          </div>

          <div className='flex items-start md:justify-end'>
            <Link href='/gallery' className='btn-link-gold'>
              {t('openGallery')} <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
