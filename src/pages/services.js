import { Inter } from "next/font/google";
import { Header } from "@/section/layout/Header";
import { Footer } from "@/section/layout/Footer";
import { Hero } from "@/section/services/Hero";
import { Services } from "@/section/services/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer/>
    </>
  );
}
