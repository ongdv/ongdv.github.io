import React from "react"

const MainPresenter = props => {
  return <div></div>
}

export default MainPresenter
export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`
