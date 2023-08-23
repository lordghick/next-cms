export default function getAllPost() {
  const query = {
    query: `query NewQuery {
        posts {
          nodes {
            slug
            title
            postId
            date
            excerpt
            categories {
              nodes {
                name
                categoryId
              }
            }
            tags {
              nodes {
                tagId
                name
              }
            }
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    height
                    sourceUrl
                    width
                  }
                }
              }
            }
          }
        }
      }`,
  };
}
