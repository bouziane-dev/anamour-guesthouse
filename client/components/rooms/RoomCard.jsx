import { Link } from '@/i18n/navigation'

const formatPrice = price =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(price)

const getFeaturedImage = room =>
  room.images?.find(image => image.isFeatured) || room.images?.[0]

export default function RoomCard({ room }) {
  const featuredImage = getFeaturedImage(room)
  const amenities = room.amenities?.slice(0, 3) || []

  return (
    <article className='overflow-hidden rounded-lg bg-[#ebe1d2] shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
      <div className='aspect-[4/3] bg-[#d6c9b6]'>
        {featuredImage ? (
          <img
            src={featuredImage.url}
            alt={featuredImage.alt || room.name}
            className='h-full w-full object-cover'
          />
        ) : (
          <div className='flex h-full items-center justify-center text-[14px] font-semibold text-[#704d36]'>
            No image available
          </div>
        )}
      </div>

      <div className='space-y-4 p-5'>
        <div>
          <p className='eyebrow'>
            Up to {room.maxGuests} guests
          </p>
          <h2 className='font-display mt-1 text-[24px] font-normal text-[#2c1d13]'>
            {room.name}
          </h2>
        </div>

        <p className='line-clamp-3 text-[14px] font-semibold leading-relaxed text-[#704d36]'>
          {room.shortDescription}
        </p>

        <div className='flex flex-wrap gap-2'>
          {amenities.map(amenity => (
            <span
              key={amenity}
              className='rounded-full bg-[#f4ecdf] px-3 py-1 text-[12px] font-bold text-[#704d36]'
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className='flex flex-col gap-3 border-t border-[#2c1d13]/10 pt-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-[#2c1d13]'>
            <span className='font-display text-[22px] font-normal text-[#c67a18]'>
              {formatPrice(room.nightlyPrice)}
            </span>
            <span className='text-[13px] font-semibold text-[#704d36]'> / night</span>
          </p>

          <Link
            href={`/rooms/${room.slug}`}
            className='btn-gold text-[13px]'
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}
