import "@/styles/globals.css";
import Link from "next/link";
// import { Rajdhani } from "next/font/google";
import { Jura } from "next/font/google";
import Head from "next/head"
import NavBar from "@/components/NavBar";

// const rajdhani = Rajdhani({
//   weight: ["300", "400", "500", "600", "700"],
//   style: ['normal', 'italic'],
//   subsets: ["latin"],
// });

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
});

export default function App({ Component, pageProps }) {
  return (
    // alternative font
    // className={rajdhani.className}
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className={`${jura.className} font-jura bg-darkGrey w-full min-h-screen` }>
        <NavBar />
      <Component {...pageProps} />
        {/* <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/topic">Topics</Link>
            </li>
         
          </ul>
         
        </div> */}
      </main>
    </>
  );
}

   {/* <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li> */}