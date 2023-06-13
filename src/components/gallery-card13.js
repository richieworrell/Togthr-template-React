import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card13.css'

const GalleryCard13 = (props) => {
  return (
    <div className={`gallery-card13-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card13-image"
      />
      <h2 className="gallery-card13-text">{props.title}</h2>
      <span className="gallery-card13-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard13.defaultProps = {
  image_src: 'https://richieworrells3.s3.amazonaws.com/Media/IMG_8227.jpg',
  image_alt: 'image',
  rootClassName: '',
  subtitle: '',
  title: '',
}

GalleryCard13.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard13
