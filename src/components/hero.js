import PropTypes from 'prop-types'
import React from 'react'

const Hero = ({ title, intro, image }) => (
  <section className='antialiased font-sans w-full bg-black text-left text-white py-8'>
    <div className='container mx-auto max-w-xl py-8 font-bold leading-normal'>
      <div className='flex'>
        <img className='h-16' width='64px' height='64px' src={image} alt='photo of Ruby' />
        <div className="ml-4">
          <h3 className='text-2xl'>{title}</h3>
          <p>{intro}</p>
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  image: PropTypes.string
}

Hero.defaultProps = {
  title: ``,
  intro: ``,
  image: ``
}

export default Hero
