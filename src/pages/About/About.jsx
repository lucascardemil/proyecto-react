import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
        <Header title='About' color='green'/>
        <Navbar/>
        <Main title='About'/>
    </div>
  )
}

export default About