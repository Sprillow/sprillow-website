import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const queries = graphql`
  query {
    logo: file(relativePath: { eq: "sprillow-logo-light-green.png" }) {
      childImageSharp {
        fixed(width: 86) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    seedling: file(relativePath: { eq: "seedling-emoji.png" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    acorn: file(relativePath: { eq: "acorn-app-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cosense: file(relativePath: { eq: "cosense.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ufc: file(relativePath: { eq: "acorn-app-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pegahProfile: file(relativePath: { eq: "pegah-image.png" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    connorProfile: file(relativePath: { eq: "connor-image.png" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    connorWorking: file(relativePath: { eq: "sprillow-connor-working.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    connorFacilitating: file(
      relativePath: { eq: "sprillow-connor-facilitating-dweb.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = ({ type, imgName }) => {
  const data = useStaticQuery(queries)
  const props = {
    [type]: data[imgName] ? data[imgName].childImageSharp[type] : null,
  }
  return <Img {...props} />
}

const Logo = () => {
  return <Image type="fixed" imgName="logo" />
}

const Seedling = () => {
  return <Image type="fixed" imgName="seedling" />
}

const AcornScreenshot = () => {
  return <Image type="fluid" imgName="acorn" />
}

const CosenseScreenshot = () => {
  return <Image type="fluid" imgName="cosense" />
}

const UfcScreenshot = () => {
  return <Image type="fluid" imgName="ufc" />
}

const PegahProfile = () => {
  return <Image type="fixed" imgName="pegahProfile" />
}

const ConnorProfile = () => {
  return <Image type="fixed" imgName="connorProfile" />
}

const ConnorWorking = () => {
  return <Image type="fluid" imgName="connorWorking" />
}

const ConnorFacilitating = () => {
  return <Image type="fluid" imgName="connorFacilitating" />
}

export {
  Logo,
  Seedling,
  AcornScreenshot,
  CosenseScreenshot,
  UfcScreenshot,
  PegahProfile,
  ConnorProfile,
  ConnorWorking,
  ConnorFacilitating,
}
