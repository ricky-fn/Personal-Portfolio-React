import React from 'react'

import PropTypes from 'prop-types'

import './-mac.css'

const IMac = (props) => {
  return (
    <div className={`-mac-i-mac ${props.rootClassName} `}>
      <img
        alt={props.Shadow_alt}
        src={props.Shadow_src}
        className="-mac-shadow"
      />
      <img
        alt={props.Support_alt}
        src={props.Support_src}
        className="-mac-support"
      />
      <img
        alt={props.FrontPlate_alt}
        src={props.FrontPlate_src}
        className="-mac-front-plate"
      />
      <img
        alt={props.AppleLogo_alt}
        src={props.AppleLogo_src}
        className="-mac-apple-logo"
      />
      <img
        alt={props.Border_alt}
        src={props.Border_src}
        className="-mac-border"
      />
      <div className="-mac-screen">
        <img
          alt={props.Wallpaper_alt}
          src={props.Wallpaper_src}
          className="-mac-wallpaper"
        />
      </div>
    </div>
  )
}

IMac.defaultProps = {
  FrontPlate_alt: 'FrontPlate4747',
  Support_alt: 'Support4746',
  Shadow_src: '/playground_assets/shadow4745-ugfl.svg',
  Shadow_alt: 'Shadow4745',
  AppleLogo_src: '/playground_assets/applelogo4748-y21f.svg',
  AppleLogo_alt: 'AppleLogo4748',
  Support_src: '/playground_assets/support4746-2ap.svg',
  Wallpaper_alt: 'Wallpaper4751',
  Wallpaper_src: '/playground_assets/wallpaper4751-g5-300h.png',
  Border_src: '/playground_assets/border4749-uj3-500w.png',
  FrontPlate_src: '/playground_assets/frontplate4747-iwmh.svg',
  Border_alt: 'Border4749',
  rootClassName: '',
}

IMac.propTypes = {
  FrontPlate_alt: PropTypes.string,
  Support_alt: PropTypes.string,
  Shadow_src: PropTypes.string,
  Shadow_alt: PropTypes.string,
  AppleLogo_src: PropTypes.string,
  AppleLogo_alt: PropTypes.string,
  Support_src: PropTypes.string,
  Wallpaper_alt: PropTypes.string,
  Wallpaper_src: PropTypes.string,
  Border_src: PropTypes.string,
  FrontPlate_src: PropTypes.string,
  Border_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default IMac
