import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/section/layout/Header'
import { Intro } from '@/section/home/Intro'
import { Gallery } from '@/section/home/Gallery'
import { Services } from '@/section/home/Services'
import { Clients } from '@/section/home/Clients'
import { Footer } from '@/section/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Header/>
     <Intro/>
     <Gallery/>
    <Services/>
     <Clients/>
    <Footer/>


    </>
  )
}
