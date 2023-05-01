import "@/styles/globals.css";
import Link from "next/link";
// import { Rajdhani } from "next/font/google";
import { Jura } from "next/font/google";
import Head from "next/head"
// import NavBar from "@/components/NavBar";
import { motion, useScroll, useSpring } from "framer-motion";

// const rajdhani = Rajdhani({
//   weight: ["300", "400", "500", "600", "700"],
//   style: ['normal', 'italic'],
//   subsets: ["latin"],
// });

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
});

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    // alternative font
    // className={rajdhani.className}
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <motion.div className="progress-bar" style={{ scaleX }} />
      <main className= {`${jura.className} font-jura bg-darkGrey w-full min-h-screen overflow-x-scroll` }>
        {/* <NavBar /> */}
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