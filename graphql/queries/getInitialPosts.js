import { gql } from 'apollo-boost';

const getInitialPostsQuery = gql`
  query GetInitialPosts {
    posts(first: 10) {
      edges {
        node {
          id
          postId
          title
          featuredImage {
            sourceUrl
          }
          excerpt
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default getInitialPostsQuery;
