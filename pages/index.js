import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dinara Idrissova | Portfolio</title>
        <meta
          name="description"
          content="Dinara Idrissova -a front-end developer, proficient in  JS, CSS, HTML as well as modern front-end frameworks like React.js and NextJS, skilled in building dynamic and responsive user interfaces with a modern design aesthetic. "
        />
      </Head>
      <main>
        <div>
          <h1>hello</h1>
        </div>
      </main>
    </div>
  );
}
