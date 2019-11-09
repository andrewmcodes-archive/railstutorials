import PropTypes from "prop-types"
import React from "react"

const Hero = ({ title, intro, image }) => (
  <section className="antialiased font-sans w-full bg-gray-500 text-left text-black py-8">
    <div className="container mx-auto max-w-xl py-8 font-normal leading-normal">
      <div style={{ maxWidth: `64px`, marginBottom: `1.45rem` }}>
        <img src={image} alt='photo of Ruby' />
      </div>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <p className>{intro}</p>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  image: PropTypes.object,
}

Hero.defaultProps = {
  title: ``,
  intro: ``,
  image: NaN,
}

export default Hero
