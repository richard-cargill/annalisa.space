import React from 'react';
import Panels from '../components/Panels/';
import Paging from '../components/Paging';
import SelectorPanel from '../components/Panels/SelectorPanel';
import TwoRotation from '../components/react-two';

function currentPageIndexOf(pagesArray, slug) {
  return pagesArray.findIndex(page => page.slug === slug);
}

function getNextIndexObj (pagesArray, index) {
  const length = pagesArray.length - 1;
  const nextIndex = index + 1;
  if (nextIndex > length) {
    return pagesArray[0];
  } else {
    return pagesArray[nextIndex];
  }
}

function getPrevIndexObj (pagesArray, index) {
  const length = pagesArray.length;
  const prevIndex = index - 1;
  if (prevIndex < 0) {
    return pagesArray[length - 1];
  } else {
    return pagesArray[prevIndex];
  }
}

export default class PageTemplate extends React.Component {
  render() {
    const {
      name,
      slug,
      panels
    } = this.props.data.contentfulPage;

    const {
      pages
    } = this.props.data.contentfulPageSelectorPanel;
    const currentIndex = currentPageIndexOf(pages, slug);
    const nextIndexObj = getNextIndexObj(pages, currentIndex);
    const prevIndexObj = getPrevIndexObj(pages, currentIndex);

    return (
      <div>
        {slug === "/" && <TwoRotation />}
        <main>
          <article>
            {panels && panels.map(panel => {
              const { __typename } = panel;
              return <Panels key={__typename} type={__typename} data={panel} />
            })}
          </article>
          {slug === '/' && <div className="background-alt"><SelectorPanel /></div>}
          {slug.startsWith('/projects') && <Paging prev={prevIndexObj} next={nextIndexObj} />}
        </main>
      </div>
    );
  }
};

export const pageQuery = graphql`
	query PageQuery($slug: String!) {
    contentfulPageSelectorPanel {
      name
      pages {
        slug
        name
        description
      }
    }
		contentfulPage(slug: {eq : $slug}) {
      name
      slug
			panels {
        __typename
        ... on ContentfulHeroPanel {
          text
          description
        }
        ... on ContentfulPageSelectorPanel {
          text
          pages {
            name
            slug
            description
            password
            thumbnail {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
        ... on ContentfulHeaderPanel {
          name
          text
          media {
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulImagePanel {
          name
          media {
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulContentPanel {
          name
          content {
            content
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
