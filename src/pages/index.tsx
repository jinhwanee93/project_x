import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Title from "../components/Title/Title";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Tech from "../components/Tech/Tech";
import "./index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex-container">
      <div className="main-container">
        <Title/>
        <Hero/>
        <Info id="info"/>
        <Projects id="projects"/>
        <Tech/>
        <Contact id="contact"/>
        <Footer/>
      </div>
      <div className="header-wrapper">
        <Header/>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
