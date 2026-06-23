import { getTranslations } from 'next-intl/server'

export const metadata = {
  title: 'Booking | Dar El Ghardaïa',
  description: 'Check availability and request a booking at Dar El Ghardaïa guest house.'
}

export default async function BookingPage() {
  const t = await getTranslations('Booking')

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>{t('eyebrow', {}, { defaultMessage: 'Reserve Your Stay' })}</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            {t('title', {}, { defaultMessage: 'Check Availability' })}
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            {t(
              'description',
              {},
              {
                defaultMessage:
                  'Request your stay directly with us. No online payment is required at this stage — we will confirm availability and send you the details.'
              }
            )}
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container mx-auto max-w-2xl'>
          <div className='rounded-lg bg-[#ebe1d2] p-8'>
            <form className='space-y-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('checkIn', {}, { defaultMessage: 'Check-in' })}
                  </label>
                  <input type='date' className='input-line mt-1' />
                </div>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('checkOut', {}, { defaultMessage: 'Check-out' })}
                  </label>
                  <input type='date' className='input-line mt-1' />
                </div>
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('guests', {}, { defaultMessage: 'Guests' })}
                  </label>
                  <select className='input-line mt-1'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('roomType', {}, { defaultMessage: 'Room Type' })}
                  </label>
                  <select className='input-line mt-1'>
                    <option>{t('anyRoom', {}, { defaultMessage: 'Any room' })}</option>
                    <option>{t('standardDouble', {}, { defaultMessage: 'Standard Double' })}</option>
                    <option>{t('deluxeDouble', {}, { defaultMessage: 'Deluxe Double' })}</option>
                    <option>{t('familySuite', {}, { defaultMessage: 'Family Suite' })}</option>
                    <option>{t('wholeVilla', {}, { defaultMessage: 'Whole Villa' })}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                  {t('fullName', {}, { defaultMessage: 'Full Name' })}
                </label>
                <input type='text' className='input-line mt-1' />
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('email', {}, { defaultMessage: 'Email' })}
                  </label>
                  <input type='email' className='input-line mt-1' />
                </div>
                <div>
                  <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                    {t('phone', {}, { defaultMessage: 'Phone' })}
                  </label>
                  <input type='tel' className='input-line mt-1' />
                </div>
              </div>

              <div>
                <label className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>
                  {t('specialRequests', {}, { defaultMessage: 'Special Requests' })}
                </label>
                <textarea
                  rows={3}
                  className='input-line mt-1 resize-y'
                />
              </div>

              <button type='submit' className='btn-gold w-full'>
                {t('submitButton', {}, { defaultMessage: 'Request Booking' })}
              </button>
            </form>

            <p className='mt-6 text-center text-[13px] font-semibold text-[#704d36]'>
              {t(
                'disclaimer',
                {},
                {
                  defaultMessage:
                    'We will respond within 24 hours to confirm availability. No payment is required at this stage.'
                }
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
