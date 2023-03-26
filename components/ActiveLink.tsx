import Link from 'next/link'
import { usePathname } from 'next/navigation'

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
  fontWeight: 'bold',
}

const ActiveLink = ({href, text}) => {

  const pathname = usePathname();

  return (
    <Link style={pathname === href ? style : null} href={href}>{text}</Link>
  )
}

export default ActiveLink