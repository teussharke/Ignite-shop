import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"
import { Container, Header } from "@/styles/pages/app";
import Image from 'next/future/image'

import homeImg from '../assets/home.png'
// import logoImg from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={homeImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


