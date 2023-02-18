import Footer from "./Footer"
import Head from "next/head"
import NavBar from "./NavBar";
import { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Treehacks 2023: Cowboy Pew Pew</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="Cowboy Pew Pew"
          content="GPT-Assisted Educational Tool by Jenny Mai, Ngoc Tran, Phuc Tran, and Caroline Van"
        />
      </Head>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
