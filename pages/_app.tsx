import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: "ease-in-sine",
      anchorPlacement: 'top-bottom',
      duration: 600,
      debounceDelay: 150,
      throttleDelay: 199,
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: true,
    });
  }, []);

  return <Component {...pageProps} />
}
export default MyApp
