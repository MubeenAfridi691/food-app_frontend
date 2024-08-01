import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div >
        <section><Header/></section>
        <section>
        <Carousel/>
        </section>

       <section className='m-5'>
       <Body/>
       </section>
<section>
<Footer/>
</section>

      
    </div>
  )
}

export default Home
