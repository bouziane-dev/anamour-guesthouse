import { Link } from '@/i18n/navigation'
import RoomCard from '@/components/rooms/RoomCard'
import { getRooms } from '@/lib/rooms'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Rooms | Dar El Ghardaïa',
  description: 'Browse active rooms and villa stays at Dar El Ghardaïa.'
}

export default async function RoomsPage() {
  const rooms = await getRooms()

  return (
    <div className='bg-[#f4ecdf]'>
      <section className='border-b border-[#2c1d13]/5 bg-[#ebe1d2] py-[78px]'>
        <div className='site-container text-center'>
          <p className='eyebrow'>Stay with us</p>
          <h1 className='page-title mt-4 text-[#2c1d13]'>
            Rooms and villa stays shaped for slow, comfortable travel.
          </h1>
          <p className='body-copy mt-5 max-w-2xl mx-auto'>
            Choose a quiet double room, a flexible family suite, or reserve
            the whole villa for a private guest-house experience.
          </p>
        </div>
      </section>

      <section className='py-[72px]'>
        <div className='site-container'>
          {rooms.length > 0 ? (
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {rooms.map(room => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          ) : (
            <div className='rounded-lg bg-[#ebe1d2] p-8 text-center'>
              <h2 className='font-display text-[26px] font-normal text-[#2c1d13]'>
                No rooms available
              </h2>
              <p className='body-copy mt-2'>
                Please check back soon for our available guest-house rooms.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
