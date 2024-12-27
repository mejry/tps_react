import React from 'react'
import Layout from './Layout'
import Hero from './Hero'
import Header from './Header'
import Footer from './Footer'
const index = () => {
  return (
    <div>
      <Layout>
        <Header/>
        <Hero/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default index
