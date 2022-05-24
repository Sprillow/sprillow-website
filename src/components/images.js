import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => {
  return (
    <StaticImage
      alt='Sprillow logo'
      layout='fixed'
      placeholder='blurred'
      formats={['auto', 'webp', 'avif']}
      width={86}
      src='../images/sprillow-logo-with-text-anzac.png'
    />
  )
}

export { Logo }
