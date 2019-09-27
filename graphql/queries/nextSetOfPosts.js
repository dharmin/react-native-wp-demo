import { gql } from 'apollo-boost';

const getNextSetOfPosts = gql`
  query GetNextSetOfPosts($cursor: String!) {
    posts(first: 10, after: $cursor) {
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

export default getNextSetOfPosts;
