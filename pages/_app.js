import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${spectral.variable} font-spectral`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
