import Footer from '@/components/footer/Footer';
import { NavbarMobileAfterLogin } from "@/components/navbar/NavbarMobileAfterLogin";
import { AppTabbar } from "@/components/tabbar/tabbar";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { NavbarMobile } from "@/components/navbar/NavbarMobile";
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { Noto_Sans_Thai } from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { UserContextProvider } from '@/contexts/UserContext';
import { MaintainPage } from '@/components/maintain';

const noto_sans_thai = Noto_Sans_Thai({ weight: '400', subsets: ['thai'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const isMaintain: boolean = false
  const getLayout = Component.getLayout ?? ((page) => page)
  const [token, setToken] = useState<string>("")
  useEffect(() => {
    const accessToken = localStorage.getItem("at")
    if (accessToken) {
      setToken(accessToken)
    }
  }, [])
  return getLayout(
    <main className={noto_sans_thai.className}>
      <Script
        id="gtag-id"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-958P0ZZK61`}
      />

      <Script id="gtag-id-engine" strategy="lazyOnload">
        {`	
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-958P0ZZK61', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.min.js"
        integrity="sha384-heAjqF+bCxXpCWLa6Zhcp4fu20XoNIA98ecBC1YkdXhszjoejr5y9Q77hIrv8R9i"
        crossOrigin="anonymous"
      ></Script>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap" rel="stylesheet" /> */}
      <Head>
        <meta
          name="description"
          content="Prompt Lab is an AI-powered content generation tool that helps you create engaging social media posts, emails, and more in English and Thai. Boost your content creation with Prompt Lab today! - เป็นเครื่องมือสร้างเนื้อหาที่ขับเคลื่อนด้วย AI ซึ่งช่วยคุณสร้างโพสต์สื่อสังคม, อีเมล, และอื่น ๆ ที่น่าสนใจในภาษาอังกฤษและภาษาไทย ปรับปรุงการสร้างเนื้อหาของคุณด้วย Prompt Lab ในวันนี้!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/images/prompt_lab_logo.png' />
      </Head>

      <LanguageProvider>
        <UserContextProvider>
          {isMaintain && <MaintainPage />}
          {token ?
            <NavbarMobileAfterLogin /> :
            <NavbarMobile />
          }
          <AppTabbar />
          <Component {...pageProps} />
          <Footer />
        </UserContextProvider>
      </LanguageProvider>
    </main>
  );

  // return getLayout(<Component {...pageProps} />)

}
