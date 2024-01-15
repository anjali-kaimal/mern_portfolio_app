import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Miniprojects from './Miniprojects'
import Certifications from './Certifications'
import Contact from './Contact'
import LeftSider from './LeftSider'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div className='bg-primary'>
        <Header title={"Web Developer Portfolio"}/>
        {portfolioData && (<div className='px-20 sm:px-5'>
        <Intro/>
        <About/>
        <Experiences/>
        <Projects/>
        <Miniprojects/>
        <Certifications/>
        <Contact/>
        <LeftSider/>
        <Footer/>
        </div>)}
    </div>
  )
}

export default Home