import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import "./index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
