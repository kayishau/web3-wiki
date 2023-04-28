import '@/styles/globals.css'
import Link from "next/link"

export default function App({ Component, pageProps }) {
  return (
    <div>
       <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/topic'>Topics</Link></li>
        {/* <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li> */}
      </ul>
      <Component {...pageProps} />
    </div>
  )
}
