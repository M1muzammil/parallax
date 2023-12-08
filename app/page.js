// import { ParallaxProvider } from "react-scroll-parallax"

// export default function Home() {
//   return (
  
//     <ParallaxProvider>
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </ParallaxProvider>
//   )
// }

// "use client"

// import './globals.css'
// import { ParallaxProvider } from 'react-scroll-parallax'

// export  function MyApp({ Component, pageProps }) {
//   return (
//     <ParallaxProvider scrollAxis='horizontal'>
//       <Component {...pageProps} />
//     </ParallaxProvider>
//   )
// }



"use client";

import './globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Component from './index';


export default function page() {
  return (
    <ParallaxProvider scrollAxis='horizontal'>
      <Component />
    </ParallaxProvider>
  );
}

 
