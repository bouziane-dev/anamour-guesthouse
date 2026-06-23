import { redirect } from '@/i18n/navigation'

export const dynamic = 'force-dynamic'

export default function RootPage() {
  redirect({ href: '/', locale: 'en' })
}
