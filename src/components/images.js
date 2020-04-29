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
        fixed(height: 70) {
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
    pegahProfile: file(relativePath: { eq: "sprillow-pegah-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    connorProfile: file(relativePath: { eq: "sprillow-connor-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
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

const Logo = () => {
  const data = useStaticQuery(queries)
  return <Img fixed={data.logo.childImageSharp.fixed} />
}

const Seedling = () => {
  const data = useStaticQuery(queries)
  return <Img fixed={data.seedling.childImageSharp.fixed} />
}

const AcornScreenshot = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.acorn.childImageSharp.fluid} />
}

const CosenseScreenshot = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.cosense.childImageSharp.fluid} />
}

const UfcScreenshot = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.ufc.childImageSharp.fluid} />
}

const PegahProfile = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.pegahProfile.childImageSharp.fluid} />
}

const ConnorProfile = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.connorProfile.childImageSharp.fluid} />
}

const ConnorWorking = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.connorWorking.childImageSharp.fluid} />
}

const ConnorFacilitating = () => {
  const data = useStaticQuery(queries)
  return <Img fluid={data.connorFacilitating.childImageSharp.fluid} />
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
