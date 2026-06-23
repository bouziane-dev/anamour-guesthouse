import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { getRoom } from '@/lib/rooms'

export const dynamic = 'force-dynamic'

const formatPrice = price =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(price)

export async function generateMetadata({ params }) {
  const room = await getRoom(params.id)

  if (!room) {
    return {
      title: 'Room not found | Dar El Ghardaïa'
    }
  }

  return {
    title: `${room.name} | Dar El Ghardaïa`,
    description: room.shortDescription
  }
}

export default async function RoomDetailPage({ params }) {
  const room = await getRoom(params.id)

  if (!room) {
    notFound()
  }

  const images = room.images || []

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[30px]'>
        <div className='site-container'>
          <Link
            href='/rooms'
            className='text-[13px] font-bold uppercase tracking-[0.18em] text-[#c67a18] transition hover:text-[#2c1d13]'
          >
            &larr; Back to rooms
          </Link>
        </div>
      </section>

      <section className='py-[40px]'>
        <div className='site-container'>
          <div className='grid gap-3 md:grid-cols-4 md:grid-rows-2'>
            {images.length > 0 ? (
              images.slice(0, 5).map((image, index) => (
                <div
                  key={`${image.url}-${index}`}
                  className={
                    index === 0
                      ? 'aspect-[4/3] overflow-hidden rounded-lg bg-[#ebe1d2] md:col-span-2 md:row-span-2 md:aspect-auto'
                      : 'aspect-[4/3] overflow-hidden rounded-lg bg-[#ebe1d2]'
                  }
                >
                  <img
                    src={image.url}
                    alt={image.alt || room.name}
                    className='h-full w-full object-cover'
                  />
                </div>
              ))
            ) : (
              <div className='flex aspect-[16/9] items-center justify-center rounded-lg bg-[#ebe1d2] text-[#704d36] md:col-span-4'>
                No images available
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='pb-16'>
        <div className='site-container grid gap-8 lg:grid-cols-[1fr_360px]'>
          <div>
            <p className='eyebrow'>
              {room.unitType === 'whole_house' ? 'Whole villa' : 'Guest room'}
            </p>
            <h1 className='font-display mt-3 text-[34px] font-normal text-[#2c1d13]'>
              {room.name}
            </h1>
            <p className='body-copy mt-5 max-w-3xl'>
              {room.description}
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-lg bg-[#ebe1d2] p-4'>
                <p className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>Capacity</p>
                <p className='mt-1 font-display text-[22px] font-normal text-[#2c1d13]'>
                  Up to {room.maxGuests} guests
                </p>
              </div>
              <div className='rounded-lg bg-[#ebe1d2] p-4'>
                <p className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>Bedrooms</p>
                <p className='mt-1 font-display text-[22px] font-normal text-[#2c1d13]'>{room.bedrooms}</p>
              </div>
              <div className='rounded-lg bg-[#ebe1d2] p-4'>
                <p className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>Bathrooms</p>
                <p className='mt-1 font-display text-[22px] font-normal text-[#2c1d13]'>{room.bathrooms}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='font-display text-[26px] font-normal text-[#2c1d13]'>Amenities</h2>
              <div className='mt-4 grid gap-3 sm:grid-cols-2'>
                {(room.amenities || []).map(amenity => (
                  <div
                    key={amenity}
                    className='rounded-md bg-[#ebe1d2] px-4 py-3 text-[14px] font-semibold text-[#704d36]'
                  >
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className='h-fit rounded-lg bg-[#ebe1d2] p-6 lg:sticky lg:top-6'>
            <p className='text-[13px] font-bold uppercase tracking-[0.12em] text-[#704d36]'>From</p>
            <p className='mt-1 font-display text-[34px] font-normal text-[#c67a18]'>
              {formatPrice(room.nightlyPrice)}
              <span className='text-[16px] font-semibold text-[#704d36]'>
                {' '}/ night
              </span>
            </p>
            <p className='mt-4 text-[14px] font-semibold leading-relaxed text-[#704d36]'>
              Request your stay directly with the guest house. No online payment
              is required at this stage.
            </p>
            <Link
              href={`/booking?roomId=${room._id}`}
              className='btn-gold mt-6 w-full'
            >
              Book this room
            </Link>
          </aside>
        </div>
      </section>
    </div>
  )
}
