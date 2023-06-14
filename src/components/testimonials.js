import React from 'react'

import PropTypes from 'prop-types'

import './testimonials.css'

const Testimonials = (props) => {
  return (
    <div className="testimonials-testimonials">
      <div className="testimonials-container">
        <h1 className="testimonials-text">
          <span className="testimonials-text1">Session Work Testimonials:</span>
          <br></br>
        </h1>
        <div className="testimonials-testimonial">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="testimonials-image"
          />
        </div>
      </div>
      <div className="testimonials-testimonial1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="testimonials-image1"
        />
      </div>
    </div>
  )
}

Testimonials.defaultProps = {
  image_alt1: 'image',
  image_alt: 'image',
  image_src1: '/airgigs%20(3)-400h.png',
  image_src: '/airgigs%20(2)-800w.png',
}

Testimonials.propTypes = {
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Testimonials
