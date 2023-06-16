import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/section/layout/Header";
import { Footer } from "@/section/layout/Footer";
import { Hero } from "@/section/about/Hero"
import { Mission } from "@/section/about/Mission"
import { Album } from "@/section/about/Album";
import { Customers } from "@/section/about/Customers";
import { People } from "@/section/about/People";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
        <Hero/>
        <Mission/>
        <Album/>
        <Customers/>
        <People/>
        <Footer/>

    </>
  );
}
