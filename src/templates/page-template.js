import React from "react"

export default class ProductTemplate extends React.Component {
  render() {
    console.log(this.props.data.contentfulPage)
    const {name} = this.props.data.contentfulPage
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export const pageQuery = graphql`
	query PageQuery($slug: String!) {
		contentfulPage(slug: {eq : $slug}) {
      name
      slug
			panels {
			__typename
			... on ContentfulHeroPanel {
			  text
			}
			... on ContentfulPageSelectorPanel {
			  title
			  pages {
				name
				slug
			  }
			}
			... on ContentfulHeaderPanel {
			  name
			  title
			  media {
				file {
				  url
				  fileName
				  contentType
				}
			  }
			}
		  }
	  }
	}
`
