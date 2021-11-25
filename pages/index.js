import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

let links = ["home","about","projects"]

export default function App() {

  const [dark, setDark] = useState(typeof window !== 'undefined' ? localStorage.getItem("darkMode") === 'true' : true);

  const switchTheme = () => {
    localStorage.setItem("darkMode", !dark);
    setDark(!dark);
  }

  useEffect(() => { 
    document.querySelector("body").classList.add(`${dark ? "dark" : "light"}`);
    document.querySelector("body").classList.remove(`${!dark ? "dark" : "light"}`);
  }, [dark]);

  return (
    <>
      <Head>
        <title>Amanda Tong</title>
        <link rel="icon" href="/images/favicon.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/ata5kdu.css"></link>
        <script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>
      </Head>

      <header>
        <div className="header">
          <div className="logo"><img src="/images/logo.svg" alt="logo"/> Amanda Tong</div>
          <div className="links">
            {links.map((link, index) => {
              return(
                // onClick={() => fullpage_api.moveTo(index+1)}
                <div key={link} className={`link`}>
                  <a href={`#${link}`}>{link}</a>
                </div>
              )
            })}
            <div className="theme-switch" onClick={() => switchTheme()}>{dark ? <box-icon name='sun'></box-icon> : <box-icon name='moon' ></box-icon>}</div>
          </div>
        </div>
      </header>

      <main>
        <div className="section" id="home">
          <Home/>
        </div>
        <div className="section" id="about">
          <About/>
        </div>
        <div className="section" id="projects">
          <Projects/>
        </div>
      </main>

      <footer>
        <div className="footer">
          <div className="icons">
            <a href="http://github.com/amandatong" target="_blank"><box-icon name='github' type='logo'></box-icon></a>
            <a href="mailto:amandat@mit.edu" target="_blank"><box-icon name='envelope'></box-icon></a>
            <a href="http://linkedin.com/in/amanda-tong" target="_blank"><box-icon name='linkedin' type='logo'></box-icon></a>
          </div>
          <div>© Amanda Tong {(new Date().getFullYear())}</div>
        </div>
      </footer>
    </>
  )
}
