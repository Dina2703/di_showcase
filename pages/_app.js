import "@/styles/globals.css";

import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${spectral.variable} font-spectral`}>
      <Component {...pageProps} />
    </main>
  );
}
