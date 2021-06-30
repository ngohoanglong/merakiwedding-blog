import { parseISO } from 'date-fns'
import { useRouter } from 'next/router'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const { locale } = useRouter()
  const formater = new Intl.DateTimeFormat(locale || 'en-US', { dateStyle: 'full' })
  return <time dateTime={dateString}>{formater.format(date, 'LLLL	d, yyyy')}</time>
}
