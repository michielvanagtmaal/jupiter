import { Inter } from "next/font/google";
import { Header } from "@/section/layout/Header";
import { Footer } from "@/section/layout/Footer";
import { Hero } from "@/section/portfolio/Hero";
import { Album } from "@/section/portfolio/Album"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Album/>
      <Footer />
    </>
  );
}
